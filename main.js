let arraySize = document.querySelector("#arrsize");
arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
  createArray(parseInt(arraySize.value));
});

let delayElement = document.querySelector("#speed-input");
delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});
let randomArray = [];

createArray();

function createArray(ARRAY_LENGTH = 100) {
  deleteChild();
  randomArray = [];

  for (let i = 0; i < ARRAY_LENGTH; i++) {
    randomArray.push(Math.floor(Math.random() * (250 - 1) + 1));
  }
  console.log(randomArray);

  const container = document.querySelector("#bar");

  for (let i = 0; i < ARRAY_LENGTH; i++) {
    const bars = document.createElement("div");
    bars.classList.add("bars");
    bars.style.height = `${randomArray[i] * 2 + 0}px`;

    container.appendChild(bars);
  }
}

function generateArray() {
  deleteChild();
  var inputArray = [];
  var size = prompt("Enter size (Maximum:100,Minimum:1) "); //Maximum Array size

  do {
    if (size > 0 && size < 101) break;
    else if (size == null) break;
    alert("Invalid size range ! Try again");
    size = prompt("Enter size (Maximum:100,Minimum:1) ");
  } while (1);
  for (var i = 0; i < size; i++) {
    //Taking Input from user
    inputArray[i] = prompt("Enter Element no:" + (i + 1) + "  Max:200, Min:1");
    do {
      if (inputArray[i] > 1 && inputArray[i] < 201) break;
      else if (inputArray[i] == null && inputArray[i] != "") break;
      alert("Invalid size range ! Try again");
      inputArray[i] = prompt("Enter Element " + (i + 1) + "Max:200, Min:1");
    } while (1);
    if (inputArray[i] == null) break;
  }
  //Print the array in the console.
  console.log(inputArray);
  const container = document.querySelector("#bar");
  for (var i = 0; i < size; i++) {
    const bars = document.createElement("div");
    bars.classList.add("bars");
    bars.style.height = `${inputArray[i] * 2 + 0}px`;

    container.appendChild(bars);
  }
}

function deleteChild() {
  const bar = document.querySelector("#bar");
  bar.innerHTML = "";
}

const arrayBtn = document.querySelector("#newarray");
arrayBtn.addEventListener("click", function () {
  createArray();
});

const arrayBtn2 = document.querySelector("#createarray");
arrayBtn2.addEventListener("click", function () {
  generateArray();
});

function disableBtn() {
  document.getElementById("bubble").disabled = true;
  document.getElementById("selection").disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("quicksort").disabled = true;
  document.getElementById("mergesort").disabled = true;
}

function enableBtn() {
  document.getElementById("bubble").disabled = false;
  document.getElementById("selection").disabled = false;
  document.getElementById("insertion").disabled = false;
  document.getElementById("quicksort").disabled = false;
  document.getElementById("mergesort").disabled = false;
}

function disableSizeSlider() {
  document.querySelector("#arrsize").disabled = true;
}

function enableSizeSlider() {
  document.querySelector("#arrsize").disabled = false;
}

function disableSpeedSlider() {
  document.querySelector("#speed-input").disabled = true;
}

function enableSpeedSlider() {
  document.querySelector("#speed-input").disabled = false;
}

function disableArrayBtn() {
  document.querySelector("#newarray").disabled = true;
  document.querySelector("#createarray").disabled = true;
}

function enableArrayBtn() {
  document.querySelector("#newarray").disabled = false;
  document.querySelector("#createarray").disabled = false;
}
