document.querySelector('.navbar > .expand > button').addEventListener('click', (e) => {
    document.querySelector('.navbar').style = "height: 500px; transition: height 0.5s";
    document.querySelector('.navbar > .expand-panel').style = "display: flex;"
    document.querySelector('.navbar > .expand').style = "display: none";
    document.querySelector('.navbar > .collapse').style = "display: flex";
    document.querySelector('body').style = "overflow: hidden;";    
});

document.querySelector('.navbar > .collapse > button').addEventListener('click', (e) => {
    document.querySelector('.navbar').style = "height: 150px; transition: height 0.5s";
    document.querySelector('.navbar > .expand-panel').style = "display: none";
    document.querySelector('.navbar > .collapse').style = "display: none";
    document.querySelector('.navbar > .expand').style = "display: flex";
    document.querySelector('body').style = "overflow: auto;"; 
});