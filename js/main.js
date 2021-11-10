const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    deleteSpeed: 15
});

typewriter
.typeString('Aprende con profesores de excelencia')
.pauseFor(900)
.deleteChars(36)
.typeString('Al mejor precio ;)')
.pauseFor(1000)
.start();




/* ANIMACIONES DE SCROLL*/
ScrollReveal({ reset: true });

window.sr = ScrollReveal();
sr.reveal('#derecha', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#texto-prin, #typewriter, .main-btn', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
})

window.sr = ScrollReveal();
sr.reveal('#principal',{
    duration: 2000,
    origin: 'left'
})

window.sr = ScrollReveal();
sr.reveal('#circulos-id',{
    duration: 2000,
})




window.sr = ScrollReveal();
sr.reveal('#h1-s2', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#fila-servi',{
    duration: 2000,
    origin: 'left',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#titulo-team', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#fila-profe', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#ubicacion-text', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('.mapa', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#text-consultas', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#fila-form, #text-area', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
    
})

window.sr = ScrollReveal();
sr.reveal('#wave', {
    duration: 2000,
    origin: '',
    distance: 'px'
    
})

/* window.sr = ScrollReveal();
sr.reveal('#wave-2', {
    duration: 2000,
    origin: '',
    distance: 'px'
    
})

window.sr = ScrollReveal();
sr.reveal('#wave-3', {
    duration: 2000,
    origin: '',
    distance: 'px'
    
})

window.sr = ScrollReveal();
sr.reveal('#wave-4', {
    duration: 2000,
    origin: '',
    distance: 'px'
    
})

window.sr = ScrollReveal();
sr.reveal('#wave-5', {
    duration: 2000,
    origin: '',
    distance: 'px'
    
}) */




