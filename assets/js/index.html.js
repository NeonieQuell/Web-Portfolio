// Resize Auto Type
const nameTyping = document.querySelector('#typing-name');

function resize() {
    if (document.body.clientWidth <= 320) {
        nameTyping.classList.remove('display-3');
        nameTyping.classList.add('display-4');
    } else {
        nameTyping.classList.remove('display-4');
        nameTyping.classList.add('display-3');
    }
}

resize(); // Invoked on document load
window.addEventListener('resize', function() {
    resize();
});

new Typed('.auto-type', {
    strings: ['Neonie Quell', 'a developer'],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true
});