// const homeAutoType = document.querySelector('#auto-type');
// function resizeAutoType() {
//     if (document.body.clientWidth >= 576) {
//         homeAutoType.classList.remove('display-4');
//         homeAutoType.classList.add('display-3');
//         console.log('Greater');
//     } else {
//         homeAutoType.classList.remove('display-3');
//         homeAutoType.classList.add('display-4');
//         console.log('Lesser');
//     }
// }
// window.addEventListener('resize', function() {
//     resizeAutoType();
// });

new Typed('.auto-type', {
    strings: ['Neonie Quell'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});