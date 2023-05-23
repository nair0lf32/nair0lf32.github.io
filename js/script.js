const toggler = document.getElementById("switch");
toggler.addEventListener("click", switchmode);

function switchmode() {
    const bg = document.getElementById("light");
    const toggler = document.getElementById("switch");

    bg.classList.toggle("dark");
    if (bg.classList.contains("dark")) {
        toggler.innerHTML = "Light Mode"
    } else {
        toggler.innerHTML = "Dark Mode"
    }
}
