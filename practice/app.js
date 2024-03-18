let cursor = document.querySelector(".lightbulb");

let li = document.querySelectorAll("li");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = `${x - 10}px`;
  cursor.style.top = `${y - 10}px`;

  console.log(x, y);
}

li.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.style.width = "10px";
    cursor.style.height = "10px";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  });
});
