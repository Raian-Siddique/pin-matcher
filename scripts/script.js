// step-1
//hiding the bottom message
document.getElementById("pin-right").style.display = "none";
document.getElementById("pin-wrong").style.display = "none";
document.getElementById("try-left").style.display = "none";

// step-2
//creating a pin generator

function numberGenerator() {
  document.getElementById("generated-pin").value = Math.floor(
    Math.random() * 9000 + 999
  );
}
// step-3
// number pad activation
function numberButton(num) {
  document.getElementById("pin-input").value =
    document.getElementById("pin-input").value + num;
}
// step-4
// matching the input pin with the generated pin
function submitButton() {
  let inputPin = document.getElementById("pin-input").value;
  let generatedPin = document.getElementById("generated-pin").value;
  if (inputPin == "" && generatedPin == "") {
    alert("Hey Generate Pin First");
  } else if (inputPin == generatedPin) {
    document.getElementById("pin-right").style.display = "block";
    document.getElementById("pin-wrong").style.display = "none";
  } else {
    document.getElementById("pin-right").style.display = "none";
    document.getElementById("pin-wrong").style.display = "block";
    tryLeft();
  }
}
// step-5
//activating backspace and clear button
function backspace() {
  let inputValue = document.getElementById("pin-input").value;
  document.getElementById("pin-input").value = inputValue.substring(
    0,
    inputValue.length - 1
  );
}

function clearAll() {
  document.getElementById("pin-input").value = "";
}
let count = 0;

function tryLeft() {
  let inputPin = document.getElementById("pin-input").value;
  let generatedPin = document.getElementById("generated-pin").value;
  count++;
  if (count == 1 && inputPin !== generatedPin) {
    document.getElementById("try-left").style.display = "block";
  } else if (count == 2 && inputPin !== generatedPin) {
    document.getElementById("try-left").innerText = "2 try left";
  } else if (count == 3 && inputPin !== generatedPin) {
    document.getElementById("try-left").innerText = "1 try left";
  } else if (count == 4 && inputPin !== generatedPin) {
    document.getElementById("try-left").innerText = "0 try left";
  }
}