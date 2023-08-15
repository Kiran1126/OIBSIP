var typed = new Typed('#movingText', {
    strings: ['Kiran Samanta. ','a Web Developer.', 'a Web Designer.', 'a Photographer.', 'a Writer.'],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
});

const animation = document.querySelectorAll('.scrollAnimation');
window.addEventListener('scroll',move);
move();
function move(){
    const triggerBottom = window.innerHeight;
    animation.forEach(textShadow => {
        const textTop = textShadow.getBoundingClientRect().top;
        if(textTop < triggerBottom){
            textShadow.classList.add('show');
        }
        else{
            textShadow.classList.remove('show');
        }
    });
}