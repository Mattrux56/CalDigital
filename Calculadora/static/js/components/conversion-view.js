export class ConversionView extends HTMLElement {
    connectedCallback() {
        this.id = "conversion-view";
        this.classList.add("tool-view", "is-active");
        this.innerHTML = `
            <calculator-card data-number="1" data-eyebrow="Entrada"
                data-title="Conversion Multibase"
                data-description="Ingrese un numero y seleccione su sistema numerico.">
                <form id="conversion-form">
                    <div class="form-grid">
                        <div class="field">
                            <label for="numero">Numero de entrada</label>
                            <input id="numero" type="text" placeholder="Ej: 1010">
                        </div>
                        <div class="field">
                            <label for="base">Base de entrada</label>
                            <select id="base">
                                <option value="2">Binario - Base 2</option>
                                <option value="8">Octal - Base 8</option>
                                <option value="10" selected>Decimal - Base 10</option>
                                <option value="16">Hexadecimal - Base 16</option>
                            </select>
                        </div>
                        <div class="field">
                            <label for="bits">Tamano de palabra</label>
                            <select id="bits">
                                <option value="8">8 bits - Byte</option>
                                <option value="16">16 bits - Word</option>
                                <option value="32">32 bits - DWord</option>
                                <option value="64">64 bits - QWord</option>
                            </select>
                        </div>
                    </div>
                    <button class="primary-button" type="submit">Convertir</button>
                    <div id="mensaje" class="mensaje" aria-live="polite"></div>
                </form>
            </calculator-card>
            <calculator-card data-number="2" data-eyebrow="Salida"
                data-title="Panel de Registros"
                data-description="Resultado de la conversion en las cuatro bases principales.">
                <div class="results-grid">
                    <result-tile data-label="BASE 2" data-value-id="resultadoBinario"></result-tile>
                    <result-tile data-label="BASE 8" data-value-id="resultadoOctal"></result-tile>
                    <result-tile data-label="BASE 10" data-value-id="resultadoDecimal"></result-tile>
                    <result-tile data-label="BASE 16" data-value-id="resultadoHexadecimal"></result-tile>
                </div>
            </calculator-card>
        `;
    }
}

customElements.define("conversion-view", ConversionView);
