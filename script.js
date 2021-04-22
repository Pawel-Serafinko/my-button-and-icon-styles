const buttons = document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        button.classList.toggle("return");
    });
});
