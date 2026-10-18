const calculatorContainer = document.getElementById("calculator-container");
const displayArea = document.getElementById("display-area");
function clearDisplay() {
  displayArea.textContent = "";
}
function addToDisplay(value) {
  displayArea.textContent += value;
}
function deleteLast() {
  const currentContent = displayArea.textContent;
  displayArea.textContent = currentContent.slice(0, -1);
}
function calculate() {
  try {
    const result = math.evaluate(displayArea.textContent);
    displayArea.textContent = result;
  } catch (error) {
    displayArea.textContent = "Error";
  }
}

calculatorContainer.addEventListener("click", function (event) {
  
  if (event.target.nodeName === "BUTTON") {
    const buttonValue = event.target.textContent;

    switch (buttonValue) {
      case "C":
        clearDisplay();
        break;
      case "DEL":
        deleteLast();
        break;
      case "=":
        calculate();
        break;
      default:
       
        addToDisplay(buttonValue);
        break;
    }
  }
});