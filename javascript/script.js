//ID - a,
const arr = [2, 3, 78, 21, 34 ,9];
document.getElementById("a").innerHTML = arr;

function func1() {
  document.getElementById("a").innerHTML = arr.sort();
}
function func2() {
  document.getElementById("a").innerHTML = arr.sort((function(a, b){return b - a}));
}
