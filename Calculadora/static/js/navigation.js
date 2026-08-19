export function setupNavigation() {
    const buttons = document.querySelectorAll("[data-view-target]");
    const views = document.querySelectorAll(".tool-view");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.viewTarget;

            buttons.forEach((item) => {
                const isActive = item === button;
                item.classList.toggle("is-active", isActive);
                item.setAttribute("aria-selected", String(isActive));
            });

            views.forEach((view) => {
                view.classList.toggle("is-active", view.id === target);
            });
        });
    });
}
