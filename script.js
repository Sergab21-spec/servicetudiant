document.getElementById("openDropdown").addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("dropdown-open");
    dropdown.classList.toggle("hidden"); // if you also want to show/hide visibility
});
