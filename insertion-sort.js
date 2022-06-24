async function insertionSort() {
  console.log("In insertionSort()");
  const elements = document.querySelectorAll(".bars");
  // color
  elements[0].style.background = "green";
  for (let i = 1; i < elements.length; i++) {
    console.log("In ith loop");
    let j = i - 1;
    let key = elements[i].style.height;
    // color
    elements[i].style.background = "blue";

    await waitforme(delay);

    while (j >= 0 && parseInt(elements[j].style.height) > parseInt(key)) {
      console.log("In while loop");
      // color
      elements[j].style.background = "blue";
      elements[j + 1].style.height = elements[j].style.height;
      j--;

      await waitforme(delay);

      // color
      for (let k = i; k >= 0; k--) {
        elements[k].style.background = "green";
      }
    }
    elements[j + 1].style.height = key;
    // color
    elements[i].style.background = "green";
  }
}

const ISortbtn = document.querySelector("#insertion");
ISortbtn.addEventListener("click", async function () {
  disableBtn();
  disableSizeSlider();
  disableArrayBtn();
  await insertionSort();
  enableBtn();
  enableSizeSlider();
  enableArrayBtn();
});
