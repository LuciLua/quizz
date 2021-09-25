function profileOpen() {
    var tab = document.querySelector('.closed')
    tab.classList.toggle('open')
} 

function active() {
    // for(let i = 0; i < resposta.length; i++){
    //     resposta[i].classList.add('active')
    //     console.log('ola', resposta[i], i)
console.log('ola')
    //}
}


// respostas.addEventListener('click', active())

// window.addEventListener('keydown', event => 
// {
//     if(event.key === '1'){
//         var respostas = document.querySelectorAll(".resposta")
//         respostas.forEach(e => e.classList.add('active'))
//     }
// })


function active(e){
   e.classList.add('active')
}

var respostas = document.querySelectorAll(".resposta")
respostas.forEach(e => e.addEventListener('click', () => active(e)))