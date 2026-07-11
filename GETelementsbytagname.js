let dt = document.getElementsByTagName("h1");
console.log(dt);

for (let item of dt) {
  demo(item);
}

function demo(item) {
  item.style.backgroundColor = "violet";
  item.style.color = "white";
}
