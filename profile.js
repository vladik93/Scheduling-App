document.querySelectorAll('.profile > .options > .option').forEach((elm, key) => {
    var extended = false;
    elm.addEventListener('click', (e) => {
       
        if(!extended) {
            e.target.parentNode.querySelector('.profile > .options > .option > .expanded').style = "max-height: 3000px; transition: 1.8s;";
            extended = true;     
        } else {
            e.target.parentNode.querySelector('.profile > .options > .option > .expanded').style = "max-height: 0px; transition: 1.3s; transition-delay: -0.85s";
            extended = false;
        }  
    })
})

document.querySelector('#edit-roles').addEventListener('click', (e) => {
    document.querySelector('.role-picker').style = "display: grid;"
    document.querySelector('.profile-fade').style = "display: block;"
    document.querySelector('body').style = "overflow: hidden;"
})

document.querySelector('.role-picker > .expand').addEventListener('click', (e) => {
    document.querySelector('.role-picker > .body').style = "max-height: 3000px; transition: 1.3s";
    document.querySelector('.role-picker > .body').scrollIntoView({behavior: 'smooth', block: 'end'});
});
