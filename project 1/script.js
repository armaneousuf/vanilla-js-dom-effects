const statusEl = document.querySelector(".status");
const btn = document.querySelector(".add-friend");
let isFriedn = false;
// console.log(status, btn);

btn.addEventListener("click", function () {
    isFriedn = !isFriedn
  if (isFriedn) {
    statusEl.textContent = "Friends";
    statusEl.style.color = "green";
    btn.textContent = "Remove";
  } else {
    statusEl.textContent = "Unknown";
    statusEl.style.color = "black";
    btn.textContent = 'Add Friend';
  }
});
