document.querySelectorAll('.schedule > .selected-panel > .selected').forEach((el) => {
    el.addEventListener('click', (e) => {
        document.querySelector('.time-picker').style = "transition: 0.3s ease-in; opacity: 1; visibility: visible;";
        document.querySelector('.page-mask').style = "display: block;"
        document.querySelector('body').style = "overflow: hidden;"
    })
});

document.querySelector('.page-mask').addEventListener('click', (e) => {
    document.querySelector('.time-picker').style = "visibility: hidden; opacity: 0;";
    document.querySelector('.page-mask').style = "display: none;"
    document.querySelector('body').style = "overflow: auto;"
})