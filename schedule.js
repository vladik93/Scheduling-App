document.querySelector('.schedule > .expand-profiles > #expand').addEventListener('click', (e) => {
    document.querySelector('.schedule > .profiles').style = "max-height: 3000px; transition: 1.3s ease-in";
    document.querySelector('.schedule > .expand-profiles > #collapse').style= "display: block;"
    document.querySelector('.schedule > .expand-profiles > #expand').style= "display: none;"
    document.querySelector('.schedule > .profiles').scrollIntoView({behavior: 'smooth'});
});

document.querySelector('.schedule > .expand-profiles > #collapse').addEventListener('click', (e) => {
    document.querySelector('.schedule > .profiles').style = "max-height: 215px; transition: 1.3s; transition-delay: -0.80s"; // research
    document.querySelector('.schedule > .expand-profiles > #expand').style= "display: block;"
    document.querySelector('.schedule > .expand-profiles > #collapse').style= "display: none;"
    document.querySelector('.schedule > .profiles').scrollIntoView({behavior: 'smooth', block: 'end'});
});


