/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = generateExcuse();
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuseWho = who[Math.floor(Math.random() * who.length)];
  let excuseAction = action[Math.floor(Math.random() * action.length)];
  let excuseWhat = what[Math.floor(Math.random() * what.length)];
  let excuseWhen = when[Math.floor(Math.random() * when.length)];

  return excuseWho + " " + excuseAction + " " + excuseWhat + " " + excuseWhen;
}
