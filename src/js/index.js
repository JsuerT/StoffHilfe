//Hamburger Menu: click
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.offscreenmenu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

//Index: 2 Section: Willkommenstext, mehr anzeigen
const beschreibungMehrInfos = document.querySelector('.beschreibungMehrInfo');
const beschreibungWenigerInfos = document.querySelector('.beschreibungWenigerInfo');
const beschreibungInhalt = document.querySelector('.beschreibungInhalt');
const beschreibungEnde = document.querySelector('.beschreibungEnde');

beschreibungMehrInfos.addEventListener('click', () => {
    beschreibungInhalt.classList.toggle('active');
    beschreibungEnde.classList.toggle('active');
    beschreibungWenigerInfos.classList.toggle('active');

    beschreibungMehrInfos.classList.toggle('hidden');
})

beschreibungWenigerInfos.addEventListener('click', () => {
    beschreibungInhalt.classList.toggle('active');
    beschreibungEnde.classList.toggle('active');
    beschreibungWenigerInfos.classList.toggle('active');

    beschreibungMehrInfos.classList.toggle('hidden')
})