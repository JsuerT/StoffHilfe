//Index: Hamburger Menu: click HEADER
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

//Index: 4. Section: FAQs antw. anzeigen
const FrageWas = document.querySelector('.FrageWas');
const AntwWas = document.querySelector('.AntwWas');
FrageWas.addEventListener('click', () => {
    AntwWas.classList.toggle('active');
})

const FrageWohin = document.querySelector('.FrageWohin');
const AntwWohin = document.querySelector('.AntwWohin');
FrageWohin.addEventListener('click', () => {
    AntwWohin.classList.toggle('active');
})

const FrageReal = document.querySelector('.FrageReal');
const AntwReal = document.querySelector('.AntwReal');
FrageReal.addEventListener('click', () => {
    AntwReal.classList.toggle('active');
})

const buttons = document.querySelectorAll('.Stoffart');

