let key = 1;
const showCross = (number, status) => {// функция отрисовывающая крестик если статус тру и берет номер соответсвтвуюзего дива
  $(".status1").remove();
  if (status) {
    $(`#${number}`).append(`<img src="images/крестик.png"></img>`);
    $(".status").append(`<img class="status1" src="images/крестик.png"></img>`);
    return;
  }
  return;
};
const showZero = (number, status) => {// функция отрисовывающая нолик если статус фолс и берет номер соответсвтвуюзего дива
  $(".status1").remove();
  if (status) {
    return;
  }
  $(`#${number}`).append(`<img src="images/нолик.png"></img>`);
  $(".status").append(`<img class="status1" src="images/нолик.png"></img>`);
  return
};
const getNumbers = () => {
  let numbers = document.getElementsByClassName(`coordinate`);//получаем массив из элементов с соответствующим классом
  for (i = 0; i < numbers.length; i++) {//перебираем все возможные варианты события
    let id = i;// приравниваем переменную айди к вариантам (хз зачем без этого не пашет)
    $(`#${id}`).click(function () {//ну это наверное в отдельную функцию можно вынести как кликер 
      if (key) {//проверка переменной кей на то что отрисовывать крестик или нолик
        showCross(id, key);// отрисовка крестика
        key = key - 1;
        return;
      }
      showZero(id, key);//отрисовка нолика
      key = key + 1;
      return;
    });
  }
};
getNumbers();
