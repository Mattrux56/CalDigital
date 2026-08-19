export class AluView extends HTMLElement {
    connectedCallback() {
        this.id = "alu-view";
        this.classList.add("tool-view");
        this.innerHTML = `
            <calculator-card data-number="03" data-eyebrow="Procesador"
                data-title="ALU - Operaciones Logicas"
                data-description="Simulacion de operaciones bit a bit entre dos registros.">
                <form id="alu-form">
                    <div class="form-grid alu-inputs">
                        <div class="field">
                            <label for="aluA">Registro A</label>
                            <input id="aluA" type="text" placeholder="Ej: 1010">
                        </div>
                        <div class="field">
                            <label for="aluB">Registro B</label>
                            <input id="aluB" type="text" placeholder="Ej: 1100">
                        </div>
                    </div>
                    <button class="primary-button" type="submit">Ejecutar ALU</button>
                    <div id="mensajeALU" class="mensaje" aria-live="polite"></div>
                </form>
                <div class="alu-results">
                    <result-tile data-label="AND" data-value-id="resultadoAND"></result-tile>
                    <result-tile data-label="OR" data-value-id="resultadoOR"></result-tile>
                    <result-tile data-label="XOR" data-value-id="resultadoXOR"></result-tile>
                </div>
            </calculator-card>
        `;
    }
}

customElements.define("alu-view", AluView);
