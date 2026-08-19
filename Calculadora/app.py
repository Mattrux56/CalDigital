from flask import Flask, render_template, request, jsonify
from conversiones import convertir_todas, validar_entrada, obtener_decimal
from alu import operaciones_alu

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/convertir", methods=["POST"])
def convertir():
    data = request.get_json()

    numero = str(data.get("numero", "")).strip()
    base = int(data.get("base", 10))
    bits = int(data.get("bits", 8))

    try:
        validar_entrada(numero, base)
        decimal = obtener_decimal(numero, base)

        maximo = (2 ** bits) - 1
        if decimal < 0 or decimal > maximo:
            return jsonify({
                "ok": False,
                "error": f"Overflow / Desbordamiento de Registro. "
                         f"El maximo para {bits} bits es {maximo}."
            }), 400

        resultado = convertir_todas(decimal, bits)

        return jsonify({
            "ok": True,
            "decimal": decimal,
            "resultados": resultado
        })

    except ValueError as e:
        return jsonify({"ok": False, "error": str(e)}), 400


@app.route("/alu", methods=["POST"])
def alu():
    data = request.get_json()

    a = str(data.get("a", "")).strip()
    b = str(data.get("b", "")).strip()
    bits = int(data.get("bits", 8))

    try:
        resultado = operaciones_alu(a, b, bits)
        return jsonify({"ok": True, "resultados": resultado})
    except ValueError as e:
        return jsonify({"ok": False, "error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)
