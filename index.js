let button_text = document.getElementById("button");
let next_num = document.getElementById("next");
let time = document.getElementById("time");
let itmer__id;
let target__num = 1;

let start = button_text => {
  let timer__count = 0;
  let next__number = 1;
  console.log(next_num);
  button_text.innerHTML = "Reset";
  time.innerHTML = "0";
  next_num.innerHTML = "1";
  button_text.style.background_color = "#2ecc71"; //why it doesn't work??

  randomize(); //Implement

  timer__id = setInterval(function() {
    timer__count += 1;
    time.innerHTML = timer__count / 10.0;
  }, 100);
};

let reset = button_text => {
  button_text.innerHTML = "Start";
  clearInterval(timer__id);
  for (let i = 1; i <= 25; i++) {
    console.log(i);
    document.getElementById("box__" + i).style.backgroundColor = "white";
  }
};

let button_click = () => {
  console.log(button_text.innerHTML);
  button_text.innerHTML == "Start" ? start(button_text) : reset(button_text);
};

let randomize = () => {};

let color_changing = i => {
  if (document.getElementById(i).style.backgroundColor != "red") {
    document.getElementById(i).style.backgroundColor = "red";
  }
  //Module Works
  // else {
  //   document.getElementById(i).style.backgroundColor = "white";
  // }
};

let box_clicked = i => {
  if (button_text.innerHTML === "Reset") {
    if ("box__" + target__num == i) {
      // console.log("Working?");
      color_changing(i);
      document.getElementById("next").innerHTML = target__num + 1;
      target__num++;
      if (target__num === 26) {
        alert("time : " + time.innerHTML);
        clearInterval(timer__id);
        document.getElementById("next").innerHTML = "Done";
      }
    }
  }
};
