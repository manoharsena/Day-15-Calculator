let finalResult = document.getElementById("result");

function display(num) {
  finalResult.value = finalResult.value + num;
}

function Calculate() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
//This function is to check keypress, calculator input is number only, otherwise show alert box
window.addEventListener("keypress", (event) => {
  operator = ["-", "+", "/", "*"];
  key = event.key;
  code = event.code;
  if (code.includes("Digit") || operator.includes(key)) {
    parent = document.getElementById("result");
    parent.innerText = parent.innerText + key;
    console.log(event);
  } else {
    alert("Only numbers are allowed");
  }
});

function equal() {
  equ = document.getElementById("equal").value;
}

function Clear() {
  finalResult.value = "";
}

function Delete() {
  finalResult.value = finalResult.value.slice(0, -1);
}
