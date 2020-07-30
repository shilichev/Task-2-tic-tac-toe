let key = 1;
let keyForClean = 1;
let click = [];
let x = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
];
let stopGame = 1;
const showCross = (i, j, status) => {
  if (stopGame) {
    // функция отрисовывающая крестик если статус тру и берет номер соответсвтвуюзего дива
    $(".status1").remove();
    if (status) {
      $(`#${i}${j}`).append(
        `<img class="forRemove" src="images/крестик.png"></img>`
      );
      $(".status").append(
        `<img class="status1" src="images/нолик.png" width=150px></img>`
      );
      return;
    }
  }

  return;
};
const showZero = (i, j, status) => {
  if (stopGame) {
    $(".status1").remove();
    if (status) {
      return;
    }
    $(`#${i}${j}`).append(
      `<img class="forRemove" src="images/нолик.png"></img>`
    );
    $(".status").append(
      `<img class="status1" src="images/крестик.png" width=150px></img>`
    );
    return;
  }
};
const showWin = () => {
  if (stopGame) {
    $(".theEnd").append(`<p class ="forRemove">You WON!</p>`);
    stopGame = 0;
  }
};
const showEnd = () => {
  $(".theEnd").append(`<p class ="forRemove">GAME OVER</p>`);
  stopGame = 0;
};
const checkWin = () => {
  if (x[0][0] === x[0][1] && x[0][1] === x[0][2]) {
    showWin();
    $(".firstLine").append(
      ` <div class="lineHorizontal1 forRemove"><img src="images/horizontal.png"></div>`
    );
  } else if (x[1][0] === x[1][1] && x[1][1] === x[1][2]) {
    showWin();
    $(".secondLine").append(
      ` <div class="lineHorizontal2 forRemove"><img src="images/horizontal.png"></div>`
    );
  } else if (x[2][0] === x[2][1] && x[2][1] === x[2][2]) {
    showWin();
    $(".thirdLine").append(
      ` <div class="lineHorizontal3 forRemove"><img src="images/horizontal.png"></div>`
    );
  } else if (x[0][0] === x[1][1] && x[1][1] === x[2][2]) {
    showWin();
    $("main").append(
      ` <div class="diagonal1 forRemove"><img src="images/horizontal.png"></div>`
    );
  } else if (x[0][2] === x[1][1] && x[1][1] === x[2][0]) {
    showWin();
    $("main").append(
      ` <div class="diagonal2 forRemove"><img src="images/horizontal.png"></div>`
    );
  } else if (x[0][0] === x[1][0] && x[1][0] === x[2][0]) {
    showWin();
    $("main").append(
      ` <div class="lineVertical1 forRemove"><img src="images/vertical.png"></div>`
    );
  } else if (x[0][1] === x[1][1] && x[1][1] === x[2][1]) {
    showWin();
    $("main").append(
      ` <div class="lineVertical2 forRemove"><img src="images/vertical.png"></div>`
    );
  } else if (x[0][2] === x[1][2] && x[1][2] === x[2][2]) {
    showWin();
    $("main").append(
      ` <div class="lineVertical3 forRemove"><img src="images/vertical.png"></div>`
    );
  } else if (
    (x[0][0] == 0 || x[0][0] == 1) &&
    (x[0][1] == 0 || x[0][1] == 1) &&
    (x[0][2] == 0 || x[0][2] == 1) &&
    (x[1][0] == 0 || x[1][0] == 1) &&
    (x[1][1] == 0 || x[1][1] == 1) &&
    (x[1][2] == 0 || x[1][2] == 1) &&
    (x[2][0] == 0 || x[2][0] == 1) &&
    (x[2][1] == 0 || x[2][1] == 1) &&
    (x[2][2] == 0 || x[2][2] == 1)
  ) {
    showEnd();
  }
};

const clicker = (i, j) => {
  console.log(stopGame);
  {
    $(`#${i}${j}`).click(function () {
      if (key) {
        showCross(i, j, key);
        key = 0;
        x[i][j] = 1;
        checkWin();
        $(`#${i}${j}`).off("click");
        return;
      }
      showZero(i, j, key);
      x[i][j] = 0;
      checkWin();
      key = 1;
      $(`#${i}${j}`).off("click");
      return;
    });
  }
};

const getNumbers = () => {
  for (i = 0; i < 3; i++) {
    click[i] = [];
    for (j = 0; j < 3; j++) {
      click[i][j] = j;
      $(`#${i}${j}`).off("click");
      clicker(i, j);
    }
  }
  return;
};

const clear = () => {
  $(".clear").click(function () {
    $(".forRemove").remove();
    stopGame = 1;
    x = [
      [2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
    ];
    getNumbers();
    return;
  });
};
getNumbers();
clear();
