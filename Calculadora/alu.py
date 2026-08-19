# ============================================================
# SIMULACION DE ALU
# Operaciones bit a bit: AND, OR y XOR
# ============================================================


def validar_binario(numero):
    if numero == "":
        raise ValueError("Debe ingresar ambos numero binarios.")

    for caracter in numero:
        if caracter != "0" and caracter != "1":
            raise ValueError("La ALU solo acepta cadenas binarias de 0 y 1.")


def preparar_binario(numero, bits):
    validar_binario(numero)

    if len(numero) > bits:
        raise ValueError(
            f"El numero '{numero}' supera el tamaño seleccionado de {bits} bits."
        )

    while len(numero) < bits:
        numero = "0" + numero

    return numero


def and_bit(a, b):
    if a == "1" and b == "1":
        return "1"
    return "0"


def or_bit(a, b):
    if a == "1" or b == "1":
        return "1"
    return "0"


def xor_bit(a, b):
    if a != b:
        return "1"
    return "0"


def operacion_bit_a_bit(a, b, operacion):
    resultado = ""

    for i in range(len(a)):
        if operacion == "AND":
            resultado += and_bit(a[i], b[i])
        elif operacion == "OR":
            resultado += or_bit(a[i], b[i])
        elif operacion == "XOR":
            resultado += xor_bit(a[i], b[i])

    return resultado


def operaciones_alu(a, b, bits):
    a = preparar_binario(a, bits)
    b = preparar_binario(b, bits)

    return {
        "a": a,
        "b": b,
        "and": operacion_bit_a_bit(a, b, "AND"),
        "or": operacion_bit_a_bit(a, b, "OR"),
        "xor": operacion_bit_a_bit(a, b, "XOR")
    }
