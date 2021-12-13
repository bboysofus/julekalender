let data
const day = new Date()
let all = document.getElementsByClassName('box');
let currentDay = day.getDate()
    
        
console.log(currentDay + '. November')

    
let number = currentDay + 386

const opening = () => {
    document.querySelector("body").style.overflow = "visible"
    document.querySelector("body").style.overflowX = "hidden"
}

setTimeout(opening, 3500)

const audioBruh = () => {
    console.log('sure fødder')
    let audio = new Audio('./assets/errorsound.wav')
        audio.play()
    
}     


const ifStatements = (num) => {
    console.log(num.id)
    let liveDate = 0
    if(num.id == 493){
        liveDate = 410
    }
    else{
        liveDate = num.id
    }
    if(num.id - 386 > currentDay){
    document.getElementById('bruh' + num.id).addEventListener('click', audioBruh)}
        if((liveDate) - 386 <= currentDay){
            console.log('shit works')
            document.getElementById(liveDate).innerHTML = ''
            document.getElementById('bruh' + num.id).style.backgroundImage = 'url("./assets/smolbg.png")'
            document.getElementById('bruh' + num.id).style.backgroundPosition ='center'
            document.getElementById('bruh' + num.id).style.filter = 'brightness(100%)'
        
        }
        else{
        let displayDay = num.id - 386
        document.getElementById('bruh' + num.id).innerHTML = ''
        document.getElementById('bruh' + num.id).style.backgroundImage = 'url("./assets/baller.jpg")'
        if(displayDay == 107){
            displayDay = 24
        }
        document.getElementById('bruh' + num.id).innerHTML = "<h1>" + displayDay + "</h1>"
        document.getElementById('bruh' + num.id).style.filter = 'brightness(100%)'
        document.getElementById('bruh' + num.id).style.fontSize = '40px'
        }
        
        
        if((liveDate) - 386 == currentDay){
            document.getElementById('bruh' + num.id).style.backgroundImage = 'url("./assets/wdpkmn.jpg")'
            document.getElementById('bruh' + num.id).style.backgroundPosition = 'releative'
            document.getElementById('fis' + liveDate).style.filter = 'brightness(0%)'
        
        }
        /*if(document.getElementById(json.id).innerHTML == 493){
            document.getElementById('bruh' + json.id).style.backgroundColor = 'cornflowerblue'
            document.getElementById('bruh' + json.id).style.filter = 'brightness(50%)'
        
        }*/
        
        }

const newL = (g) => {
        let pokebob = document.createElement('div')
        pokebob.classList.add('box')
        let arceus = g.id - 83
        pokebob.id = 'bruh' + g.id 
        console.log(pokebob.id)
        if(g.id == 493){
            pokebob.innerHTML = "<img id='" + 'fis' + arceus + "' src='" + g.sprites.front_default + "'> <h1 id='" + arceus + "'>" + arceus + "</h1>"
        }
        else{
            let inner = g.id - 386
            pokebob.innerHTML = "<img id='" + 'fis' + g.id + "' src='" + g.sprites.front_default + "'> <h1 id='" + g.id + "'>" + g.id + "</h1>"
        }
    
    document.querySelector('main').append(pokebob)
    console.log(g)
    ifStatements(g)
}

let doors = []

const Pokemonner = async (id) => {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    let json = await res.json()
    doors.push(json)
}

const init = async () => {
    for(let i = 387;i<411;i++){
        if(i == 410){
            i=493
        }
        await Pokemonner(i)   
    }    
}

const test = ()=> {
    console.log('test')
}




const run = async () => {
    console.log('init')
    await init()
    console.log('init done')
    let index = 0
    let t = setInterval(()=>{
        newL(doors[index])
        index++
        if(index>23) {
            clearInterval(t)
            console.log('dine fødder')
        }
    }, 1)
    
} 


run()



for (var i = 0; i < all.length; i++) {
    
    all[i].style.filter = 'brightness(0%)';
    
}
let audio1 = new Audio('./assets/sounds/AButton.mp3')    
const datPokemon = () => {
for (var i = 0; i < all.length; i++) {
        if(document.querySelector('.box h1').innerHTML - 500 <= currentDay){
            all[currentDay -1 ].style.filter = 'brightness(100%)';
            document.getElementById('fis' + number).style.filter = 'brightness(100%)'
       
            document.getElementById('fis' + number).style.transition = 'ease-in-out 1s all'
            
            audio1.play()
            console.log('mongoTV')
            
            
        }
        
       /*else{
           all[i].style.filter = 'brightness(0%)';
       }*/
  }
}




window.addEventListener('keydown', event => {
    if(event.keyCode === 13 || event.keyCode === 66){
        
        datPokemon()
        
        console.log('hejsa')
    }
})


const Qstring = window.location.search

const urlParams = new URLSearchParams(Qstring)
const product = urlParams.get('bgcolor')

document.querySelector('body').style.backgroundColor = product