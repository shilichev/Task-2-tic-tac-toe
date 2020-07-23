let k = 1;
const showCross = (number, status) => {
  $(".status").remove();
  if (status) {
    $(`#${number}`).append(`<img src="images/крестик.png"></img>`);
    $(".status").append(`<img src="images/крестик.png"></img>`);
    return;
  }
  return;
};
const showZero = (number, status) => {
  if (status) {
    return;
  }
  return $(`#${number}`).append(`<img src="images/нолик.png"></img>`);
};
const getNumbers = () => {
  let numbers = document.getElementsByClassName(`coordinate`);
  console.log(numbers.length);
  for (i = 0; i < numbers.length; i++) {
    let a = i;
    $(`#${a}`).click(function () {
      if (k) {
        showCross(a, k);
        k = k - 1;
        return;
      }
      showZero(a, k);
      k = k + 1;
      return;
    });
  }
};
getNumbers();
// $(`#${number}`).click(function () {})
const check = () => {};
check();
