let button_text = document.getElementById("button");
let next_num = document.getElementById("next");
let time = document.getElementById("time");
let timer__id;
let target__num = 1;
let timer__out;

let start = button_text => {
  let timer__count = 0;
  console.log(next_num);
  button_text.innerHTML = "StopOrMix";
  //time.innerHTML = "0";
  //next_num.innerHTML = "1";
  //button_text.style.background_color = "blue";

  timer__id = setInterval(function() {
    timer__count += 1;
    time.innerHTML = timer__count / 10.0;
  }, 100);
};

let reset = button_text => {
  button_text.innerHTML = "Start";
  clearInterval(timer__id);
  time.innerHTML = "0";
  next_num.innerHTML = "1";
  for (let i = 1; i <= 25; i++) {
    console.log(i);
    document.getElementById("box__" + i).style.backgroundColor = "white";
  }
  target__num = 1;

  for (let i = 0; i < 10; i++) {
    randomize();
  }
};

let button_click = () => {
  console.log(button_text.innerHTML);
  button_text.innerHTML == "StopOrMix"
    ? reset(button_text)
    : start(button_text);
};

let color_changing = i => {
  console.log(i);
  console.log(document.getElementById(i));
  document.getElementById(i).style.backgroundColor = "red";
};

let box_clicked = i => {
  //i is box__num
  let box = document.getElementById(i);
  if (button_text.innerHTML === "StopOrMix") {
    if (target__num == box.innerHTML) {
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

let randomize = () => {
  let x = Math.floor(Math.random() * 25 + 1);
  let y = Math.floor(Math.random() * 25 + 1);
  let box1 = document.getElementById("box__" + x);
  let box2 = document.getElementById("box__" + y);
  box1.style.backgroundColor = "red";
  box2.style.backgroundColor = "red";
  let temp;
  temp = box1.innerHTML;
  box1.innerHTML = box2.innerHTML;
  box2.innerHTML = temp;
  box1.style.backgroundColor = "white";
  box2.style.backgroundColor = "white";
};
