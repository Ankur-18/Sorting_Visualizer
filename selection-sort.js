//let delay = 260;
async function selectionSort() {
  console.log("In selectionSort()");
  const elements = document.querySelectorAll(".bars");
  for (let i = 0; i < elements.length; i++) {
    console.log("In ith loop");
    let min_index = i;
    // Change color of the position to swap with the next min
    elements[i].style.background = "blue";
    for (let j = i + 1; j < elements.length; j++) {
      console.log("In jth loop");
      // Change color for the current comparision (in consideration for min_index)
      elements[j].style.background = "red";

      await waitforme(delay);
      if (
        parseInt(elements[j].style.height) <
        parseInt(elements[min_index].style.height)
      ) {
        console.log("In if condition height comparision");
        if (min_index !== i) {
          // new min_index is found so change prev min_index color back to normal
          elements[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        // if the currnent comparision is more than min_index change is back to normal
        elements[j].style.background = "cyan";
      }
    }
    await waitforme(delay);
    swap(elements[min_index], elements[i]);
    // change the min element index back to normal as it is swapped
    elements[min_index].style.background = "cyan";
    // change the sorted elements color to green
    elements[i].style.background = "green";
  }
}

const selectionSortbtn = document.querySelector("#selection");
selectionSortbtn.addEventListener("click", async function () {
  disableBtn();
  disableSizeSlider();
  disableArrayBtn();
  await selectionSort();
  enableBtn();
  enableSizeSlider();
  enableArrayBtn();
});
