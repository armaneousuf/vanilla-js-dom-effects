const cursorContainer = document.querySelector('.cursor-container');

window.addEventListener('mousemove', (e) => {
    // console.log(e);
    cursorContainer.style.left = `${e.clientX}px`;
    cursorContainer.style.top = `${e.clientY}px`;
})