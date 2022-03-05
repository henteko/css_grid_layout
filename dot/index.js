function draw() {
  this.style.backgroundColor = 'black';
}

for (let step = 0; step < 2500; step++) {
  const div = document.createElement("div");
  div.className = "dot";
  div.addEventListener("click", draw);
  document.querySelector("#dot-area").append(div);
}