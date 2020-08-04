/*Assignment-4 

step 1: hide the bottom message please try again
step-2: generate a 4 digit pin using math.random
step-3: type that number in num pad
step-4: match the generate num with the input num , if match the show the message pin matched otherwise the pin didn't match .
step-5: bonus marks: activate total clear [C] button and  backspace[<] button.
*/

// step-1
document.getElementById("pin-right").style.display = "none";
document.getElementById("pin-wrong").style.display = "none";
document.getElementById("try-left").style.display = "none";

// step-2

function numberGenerator() {
  document.getElementById("generated-pin").value = Math.floor(
    Math.random() * 9000 + 999
  );
}
// step-3
// button generator activation
function numberButton(num) {
  document.getElementById("pin-input").value =
    document.getElementById("pin-input").value + num;
}

// step-4
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

// function popup(id) {
//     let id = document.getElementById(id);
//     id.style.display = 'block';
// }

// function hidePopup() {
//     let id = document.getElementById(id);
//     id.style.display = 'none';
// }

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