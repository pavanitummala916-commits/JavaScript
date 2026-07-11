let dt = document.querySelector("h1");
dt.style.backgroundColor = "yellow";

let qi = document.querySelector("#heads");
qi.style.backgroundColor = "green";

let qc = document.querySelectorAll(".links"); // or "a"

for (let i = 0; i < qc.length; i++) {
  qc[i].style.backgroundColor = "pink";
  qc[i].style.color = "white";
}
