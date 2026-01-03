console.log("SCRIPT LOADED");

const button = document.getElementById("openDropdown");
const dropdown = document.getElementById("dropdown");

console.log(button, dropdown);

if (button && dropdown) {
  button.addEventListener("click", () => {
    console.log("BUTTON CLICKED");
    dropdown.classList.toggle("open");
    console.log(dropdown.className);
  });
}
