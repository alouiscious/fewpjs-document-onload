

document.addEventListener("DOMContentLoaded", function() {
  load_it()
});

function load_it() {
  document.getElementById("text").innerHTML = "This is really cool!";
}


// document.addEventListener("DOMContentLoaded", function() {
//   console.log("The DOM has loaded");
// });


// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );