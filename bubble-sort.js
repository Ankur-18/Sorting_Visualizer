let delay = 260;
let elements;
async function bubbleSort() {
  console.log("In bubbleSort()");
  elements = document.querySelectorAll(".bars");
  for (let i = 0; i < elements.length - 1; i++) {
    console.log("In ith loop");
    for (let j = 0; j < elements.length - i - 1; j++) {
      console.log("In jth loop");
      elements[j].style.background = "red";
      elements[j + 1].style.background = "red";
      if (
        parseInt(elements[j].style.height) >
        parseInt(elements[j + 1].style.height)
      ) {
        console.log("In if condition");
        await waitforme(delay);
        swap(elements[j], elements[j + 1]);
      }
      elements[j].style.background = "cyan";
      elements[j + 1].style.background = "cyan";
    }
    elements[elements.length - 1 - i].style.background = "green";
  }
  elements[0].style.background = "green";
}

const bubSortbtn = document.querySelector("#bubble");
bubSortbtn.addEventListener("click", async function () {
  disableBtn();
  disableSizeSlider();
  disableArrayBtn();
  await bubbleSort();
  enableBtn();
  enableSizeSlider();
  enableArrayBtn();
});

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

function swap(el1, el2) {
  console.log("In swap()");

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
