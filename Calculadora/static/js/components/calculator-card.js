export class CalculatorCard extends HTMLElement {
    connectedCallback() {
        this.classList.add("card");
        this.insertAdjacentHTML("afterbegin", `
            <div class="section-title">
                <span>${this.dataset.number}</span>
                <div>
                    <p class="eyebrow">${this.dataset.eyebrow}</p>
                    <h2>${this.dataset.title}</h2>
                    <p>${this.dataset.description}</p>
                </div>
            </div>
        `);
    }
}

customElements.define("calculator-card", CalculatorCard);
