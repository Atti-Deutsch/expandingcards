const panels = document.querySelectorAll('.panel');  //Collects all panels in an list//

panels.forEach(panel => {
// When we click we are removing all other active classes with function removeActiveClasses
    panel.addEventListener('click', () => {  
        removeActiveClasses();          
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

