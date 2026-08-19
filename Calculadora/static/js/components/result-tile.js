export class ResultTile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <span>${this.dataset.label}</span>
            <strong id="${this.dataset.valueId}">-</strong>
        `;
    }
}

customElements.define("result-tile", ResultTile);
