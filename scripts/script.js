const btn = document.querySelector(".button button");
const toastify = document.querySelector(".toastify");
const closed = document.querySelector(".toastify .toastContainer .close");
var timer;
btn.addEventListener("click", () => {
    showAlert();
    hideAlert();
});

function showAlert() {
    if (toastify.classList.contains("hide")) {
        clearTimeout(timer);
    }
    toastify.classList.remove("hide");
    toastify.classList.add("show");
}

function hideAlert() {
    if (toastify.classList.contains("show")) {
        timer = setTimeout(() => {
            toastify.classList.remove("show");
            toastify.classList.add("hide");
        }, 5000);
    }
}
closed.addEventListener("click", () => {
    clearTimeout(timer);
    toastify.classList.remove("show");
    toastify.classList.add("hide");
});