const button = document.getElementById("openDropdown");
const dropdown = document.getElementById("dropdown");

if (button && dropdown) {
  button.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });
}
