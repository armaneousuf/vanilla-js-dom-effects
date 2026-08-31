const container = document.querySelector(".container");
const heartIcon = document.querySelector(".icon");
// console.log(container, heartIcon);

container.addEventListener("dblclick", function () {
  // console.log('double click success');
  heartIcon.classList.add('active');

  setTimeout(() => {
    heartIcon.classList.remove('active')
  }, 2000);
});
