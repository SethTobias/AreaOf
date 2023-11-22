function calculateCircle() {
  let input1 = document.querySelectorAll("input")[0].value;
  document.querySelector(".radius").innerText = input1;
  answer = Math.PI * Math.pow(input1, 2);
  document.querySelector(".resultCircle").innerText = answer.toFixed(2);
}
let circle = document.querySelector(".calculateCircle");
circle.addEventListener("click", () => calculateCircle());

function calculateTriangle() {
  let input2 = document.querySelectorAll("input")[1].value;
  let input3 = document.querySelectorAll("input")[2].value;
  document.querySelector(".base").innerText = input2;
  document.querySelector(".height").innerText = input3;
  answer = 0.5 * input2 * input3;
  document.querySelector(".resultTriangle").innerText = answer;
}
let triangle = document.querySelector(".calculateTriangle");
triangle.addEventListener("click", () => calculateTriangle());

function calculateSquare() {
  let input4 = document.querySelectorAll("input")[3].value;
  document.querySelector(".side").innerText = input4;
  answer = Math.pow(input4, 2);
  document.querySelector(".resultSquare").innerText = answer;
}
let square = document.querySelector(".calculateSquare");
square.addEventListener("click", () => calculateSquare());

function calculateRectangle() {
  let input5 = document.querySelectorAll("input")[4].value;
  let input6 = document.querySelectorAll("input")[5].value;
  document.querySelector(".length").innerText = input5;
  document.querySelector(".breath").innerText = input6;
  answer = input5 * input6;
  document.querySelector(".resultRectangle").innerText = answer;
}
let rectangle = document.querySelector(".calculateRectangle");
rectangle.addEventListener("click", () => calculateRectangle());
