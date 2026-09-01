const elements = document.querySelectorAll(".element");

console.log(elements);

elements.forEach((element) => {
  const img = element.querySelector("img");
  // console.log(img);
  element.addEventListener("mouseenter", () => {
    img.style.opacity = 1;
  });

  element.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
  });

  element.addEventListener("mousemove", (e) => {
    img.style.left = e.offsetX + 20 + "px";
    img.style.top = e.offsetY - 40 + "px";
    // console.log(e);
  });
});
