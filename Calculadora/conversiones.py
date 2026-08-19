# ============================================================
# MOTOR DE CONVERSION DE BASES NUMERICAS
# Algoritmos manuales: sin bin(), oct(), hex() ni int(x, base)
# ============================================================

DIGITOS = "0123456789ABCDEF"


def validar_entrada(numero, base):
    if numero == "":
        raise ValueError("Debe ingresar un número.")

    if base not in (2, 8, 10, 16):
        raise ValueError("Base no soportada.")

    numero = numero.upper()

    for caracter in numero:
        if caracter not in DIGITOS[:base]:
            raise ValueError(
                f"El carácter '{caracter}' no es válido para la base {base}."
            )


def valor_caracter(caracter):
    caracter = caracter.upper()

    for i in range(len(DIGITOS)):
        if DIGITOS[i] == caracter:
            return i

    raise ValueError(f"Carácter hexadecimal inválido: {caracter}")


def obtener_decimal(numero, base):
    """
    Cualquier base -> decimal.
    Utiliza el teorema fundamental de la numeración:
    suma de dígito * base^posición.
    """
    numero = numero.upper()
    decimal = 0

    for caracter in numero:
        digito = valor_caracter(caracter)
        decimal = decimal * base + digito

    return decimal


def decimal_a_base(numero, base):
    """
    Decimal -> cualquier base.
    Utiliza divisiones sucesivas y conserva los residuos.
    """
    if numero == 0:
        return "0"

    residuos = []
    valor = numero

    while valor > 0:
        residuo = valor % base
        residuos.append(DIGITOS[residuo])
        valor = valor // base

    resultado = ""

    for i in range(len(residuos) - 1, -1, -1):
        resultado += residuos[i]

    return resultado


def padding_binario(binario, bits):
    while len(binario) < bits:
        binario = "0" + binario

    return binario


def convertir_todas(decimal, bits):
    binario = decimal_a_base(decimal, 2)
    octal = decimal_a_base(decimal, 8)
    hexadecimal = decimal_a_base(decimal, 16)

    binario = padding_binario(binario, bits)

    return {
        "binario": binario,
        "octal": octal,
        "decimal": str(decimal),
        "hexadecimal": hexadecimal
    }
