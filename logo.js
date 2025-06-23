document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo-text");
    logo.addEventListener("animationend", () => {
        console.log("Animation finished");
    });
});