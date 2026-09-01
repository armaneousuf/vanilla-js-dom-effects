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
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    img.style.left = x + 20 + "px";
    img.style.top = y - 40 + "px";
  });
});
