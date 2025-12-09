const div = document.querySelectorAll(".button");
const body = document.querySelector("body");
const p = document.querySelector("h3");

div.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
      p.innerText = "My color was changed";
      p.style.color = "#000000";
    }
  });
});
