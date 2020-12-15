    var workers = document.querySelectorAll('.staff > .worker').forEach((elm, index) => {
        var expanded = false;

        elm.addEventListener('click', (e) => {
            var image = e.target.parentNode.querySelector('.image');
            var content = e.target.parentNode.querySelector('.content');
            var expandIcon = e.target.parentNode.querySelector('.expand-icon');
            var collapseIcon = e.target.parentNode.querySelector('.collapse-icon');

            if(!expanded) {
                image.style = "height: 300px; transition: 0.3s ease";
                setTimeout(() => {
                    content.style = "display: grid; height: auto";
                    expandIcon.style = "display: none;"
                    collapseIcon.style = "display: block;"
                }, 100)
                
                
                expanded = true;
            } else {
                image.style = "height: 80px; transition: 0.3s ease";
                content.style = "display: none; height: 0px;";
                expandIcon.style = "display: block;"
                collapseIcon.style = "display: none;"
                expanded = false;

            }

            
            

        })
    });




    // var expanded = false;
    // el.addEventListener('click', (e) => {
    //     if(!expanded) {
    //         document.querySelectorAll('.staff > .worker > .content').forEach((v) => {
    //             v.style = "display: block; height: 130px;"
    //         });
    //         el.style = "height: 300px; transition: 0.3s ease;"
    //         expanded = true;
    //         console.log(el);
    //     } else {
    //         document.querySelector('.staff > .worker > .content').style = "display: none; height: 0px;"
    //         el.style = "height: 80px; transition: 0.3s ease;"
    //         expanded = false;
    //     }
        
    // })