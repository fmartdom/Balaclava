const menuB = document.querySelector('.title1');
const leftMenu = document.querySelector('#leftMenu');
const leftMenuClose = document.querySelector('#categoryC');


menuB.addEventListener('click', function(){
    leftMenu.style.display = 'block';
});

leftMenuClose.addEventListener('click', function (){
    leftMenu.style.display = 'none';
});

