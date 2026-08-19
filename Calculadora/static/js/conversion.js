function clearResults() {
    ["resultadoBinario", "resultadoOctal", "resultadoDecimal", "resultadoHexadecimal"]
        .forEach((id) => document.getElementById(id).textContent = "-");
}

export function setupConversion() {
    const form = document.getElementById("conversion-form");
    const numero = document.getElementById("numero");
    const base = document.getElementById("base");
    const bits = document.getElementById("bits");
    const message = document.getElementById("mensaje");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        message.textContent = "";

        if (!numero.value.trim()) {
            message.textContent = "Ingrese un numero.";
            return;
        }

        try {
            const response = await fetch("/convertir", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    numero: numero.value.trim(),
                    base: Number(base.value),
                    bits: Number(bits.value)
                })
            });
            const data = await response.json();

            if (!data.ok) {
                message.textContent = data.error;
                clearResults();
                return;
            }

            document.getElementById("resultadoBinario").textContent = data.resultados.binario;
            document.getElementById("resultadoOctal").textContent = data.resultados.octal;
            document.getElementById("resultadoDecimal").textContent = data.resultados.decimal;
            document.getElementById("resultadoHexadecimal").textContent = data.resultados.hexadecimal;
        } catch (error) {
            message.textContent = "No se pudo conectar con el servidor.";
        }
    });
}
