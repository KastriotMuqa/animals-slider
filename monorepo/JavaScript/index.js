const shuffleValues = () => {
  const divPreferences = document.querySelectorAll(".preference");
  const mainContainer = document.querySelector(".main-container");

  Array.from(divPreferences)
    .sort(() => Math.random() - 0.5)
    .forEach((checkbox) => {
      mainContainer.appendChild(checkbox);
    });
};

const changeValues = () => {
  const checkboxes = document.querySelectorAll(".input-selector");
 
  checkboxes.forEach((checkbox, key) => {
    checkbox.value = `SomethingOfMyChoice-${key + 1}`;
  });
};

const showSelectedValues = () => {
  const checkboxes = document.querySelectorAll(".input-selector");

  const selectedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  alert("Selected Values: " + selectedValues.join(", "));
};