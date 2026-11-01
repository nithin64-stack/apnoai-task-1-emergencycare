
// Select the dark mode button
const themeButton = document.getElementById("theme-toggle");

// Load previously saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}

// Change theme when button is clicked
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    // Check current theme
    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
        themeButton.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }

});
