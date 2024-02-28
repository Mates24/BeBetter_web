const tlacidlo = document.querySelector('.button')
const tlacidlomenu = document.querySelector('.hideondesktop')
const tlacidlopalicky = document.querySelectorAll('.button .hideondesktop .palicka')
const menu = document.querySelector('.linky')
const logoc = document.getElementById('logo-c')
const logob = document.getElementById('logo-b')

var clickcounter = 0;

tlacidlomenu.addEventListener("click", () => {
    clickcounter++;
    if (clickcounter % 2 ==0) {
        menu.style.left = "-150%";
        menu.style.right = "150%";
        tlacidlo.style.backgroundColor = '#000';
        logoc.style.display = 'initial';
        logob.style.display = 'none';
        tlacidlopalicky.forEach(function(div) {
            div.style.backgroundColor = '#fff';
        });
    } else{
        menu.style.left = "0"
        menu.style.right = "0"
        tlacidlo.style.backgroundColor = '#fff'
        logoc.style.display = 'none'
        logob.style.display = 'initial'
        tlacidlopalicky.forEach(function(div) {
            div.style.backgroundColor = '#000'
        });
    }
})
