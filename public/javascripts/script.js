const menuB = document.querySelector('title1');
const leftMenu = document.querySelector('#leftMenu');
console.log(leftMenu, menuB)

menuB.addEventListener('click', function(){
    leftMenu.style.display = (leftMenu.style.display === 'none') ? 'block' : 'none';
})