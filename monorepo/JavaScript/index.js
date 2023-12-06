const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function shuffleValues() {
  const parent = checkboxes[0].parentNode;
  Array.from(checkboxes).sort(() => Math.random() - 0.5).forEach(checkbox => {
    parent.appendChild(checkbox);
  });
}

function changeValues() {
  checkboxes.forEach(checkbox => {
    checkbox.value = "NewValue";
    checkbox.checked = false; 
  });
}

function showSelectedValues() {
  const selectedValues = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

  alert("Selected Values: " + selectedValues.join(", "));
}