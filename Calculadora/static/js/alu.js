function clearResults() {
    ["resultadoAND", "resultadoOR", "resultadoXOR"]
        .forEach((id) => document.getElementById(id).textContent = "-");
}

export function setupAlu() {
    const form = document.getElementById("alu-form");
    const bits = document.getElementById("bits");
    const message = document.getElementById("mensajeALU");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        message.textContent = "";

        const a = document.getElementById("aluA").value.trim();
        const b = document.getElementById("aluB").value.trim();
        if (!a || !b) {
            message.textContent = "Ingrese los dos registros binarios.";
            return;
        }

        try {
            const response = await fetch("/alu", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ a, b, bits: Number(bits.value) })
            });
            const data = await response.json();

            if (!data.ok) {
                message.textContent = data.error;
                clearResults();
                return;
            }

            document.getElementById("resultadoAND").textContent = data.resultados.and;
            document.getElementById("resultadoOR").textContent = data.resultados.or;
            document.getElementById("resultadoXOR").textContent = data.resultados.xor;
        } catch (error) {
            message.textContent = "No se pudo conectar con el servidor.";
        }
    });
}
