async function partition(elements, l, r) {
  console.log("In partition()");
  let i = l - 1;
  // color pivot element
  elements[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    console.log("In partition for j");
    // color current element
    elements[j].style.background = "yellow";

    await waitforme(delay);

    if (
      parseInt(elements[j].style.height) < parseInt(elements[r].style.height)
    ) {
      console.log("In partition for j if");
      i++;
      swap(elements[i], elements[j]);
      // color
      elements[i].style.background = "orange";
      if (i != j) elements[j].style.background = "orange";
      // pauseChamp
      await waitforme(delay);
    } else {
      // color if not less than pivot
      elements[j].style.background = "pink";
    }
  }
  i++;
  // pauseChamp
  await waitforme(delay);
  swap(elements[i], elements[r]); // pivot height one
  console.log(`i = ${i}`, typeof i);
  // color
  elements[r].style.background = "pink";
  elements[i].style.background = "green";

  // pauseChamp
  await waitforme(delay);

  // color
  for (let k = 0; k < elements.length; k++) {
    if (elements[k].style.background != "green")
      elements[k].style.background = "cyan";
  }

  return i;
}

async function quickSort(elements, l, r) {
  console.log("In quickSort()", `l=${l} r=${r}`, typeof l, typeof r);
  if (l < r) {
    let pivot_index = await partition(elements, l, r);
    await quickSort(elements, l, pivot_index - 1);
    await quickSort(elements, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < elements.length && r < elements.length) {
      elements[r].style.background = "green";
      elements[l].style.background = "green";
    }
  }
}

const quickSortbtn = document.querySelector("#quicksort");
quickSortbtn.addEventListener("click", async function () {
  let elements1 = document.querySelectorAll(".bars");
  let l = 0;
  let r = elements1.length - 1;
  disableBtn();
  disableSizeSlider();
  disableArrayBtn();
  await quickSort(elements1, l, r);
  enableBtn();
  enableSizeSlider();
  enableArrayBtn();
  //   enableSortingBtn();
  //   enableSizeSlider();
  //   enableNewArrayBtn();
});
