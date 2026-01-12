console.log("SCRIPT LOADED");

const button = document.getElementById("openDropdown");
const dropdown = document.getElementById("navWrap");

console.log(button, dropdown);

if (button && dropdown) {
  button.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    console.log(dropdown.className);
  });
}



