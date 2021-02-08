//define button

"use strict";

init();

function init() {
  document.querySelector("#butt").addEventListener("click", start);
}
//grab elements
function start() {
  console.log("Start");
  let firstinput = document.querySelector("#firstinput").value;
  let drop = document.querySelector("#dropdown").value;
  let answer = document.querySelector("#output").value;
  console.log(firstinput);
  console.log(drop);
  console.log(answer);

  if (drop === "v1") {
    const firstLetter = firstinput.substring(0, 1).toUpperCase();
    const cont = firstLetter.substring(1).toLowerCase();
    document.querySelector("#output").innerHTML = firstLetter + cont;
  } else if (drop === "v2") {
    const oneSpace = firstinput.indexOf(" ");
    const firstName = firstinput.substring(0, oneSpace);
    document.querySelector("#output").innerHTML = firstName;
  } else if (drop === "v3") {
    const lenght = firstinput.split(" ");
    const firstNameL = lenght[0];
    const FNL = firstNameL.length;
    document.querySelector("#output").innerHTML =
      "The length of the name is " + FNL;
  } else if (drop === "v6") {
    const hidden = "*";
    const hide = hidden.repeat(firstinput.length);
    document.querySelector("#output").innerHTML = hide;
  }
}
