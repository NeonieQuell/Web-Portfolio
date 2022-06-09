const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
});

function onLogoClick(curPage) {
    if (curPage === 'index') {
        location.href="index.html";
    } else {
        location.href="../../index.html";
    }
}