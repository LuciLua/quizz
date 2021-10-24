function profileOpen() {
    var tab = document.querySelector('.closed')
    tab.classList.toggle('open')
} 

function active(e){
    e.classList.add('active')
    var actives = document.querySelectorAll(".active")
    if(actives.length > 1) actives.forEach(a => remove(a))
}

function remove(a){
    a.classList.remove('active')
}

var respostas = document.querySelectorAll(".resposta")
respostas.forEach(e => e.addEventListener('click', () => active(e)))

const toggleTheme = () => {
    document.querySelector('.left').classList.toggle('right')
    
    if(document.querySelector('.right')){
        document.querySelector('main').classList.add('darkTheme')
        document.querySelector('.profileOpenned').classList.add('darkTheme')
        document.querySelector('header').classList.add('darkTheme')
        document.querySelector('footer').classList.add('darkTheme')
        
    } else {
        document.querySelector('main').classList.remove('darkTheme')
        document.querySelector('.profileOpenned').classList.remove('darkTheme')
        document.querySelector('header').classList.remove('darkTheme')
        document.querySelector('footer').classList.remove('darkTheme')
    }
}

function openMenu(){
    var menu = document.querySelector('.itensMenu')
    menu.classList.toggle('menuOpen')
    var structureMenu= document.querySelector('.menu')
    structureMenu.classList.toggle('menuColum')
}