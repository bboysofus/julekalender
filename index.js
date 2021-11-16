PS = document.querySelector('#press-start')

let PSSound = new Audio('./assets/sounds/PSSound.mp3')

let intervalID = null
let letCounter = 1
let pressStartFlickering = () => {
    if(letCounter <= 1 && PS.style.opacity == '100'){
        PS.style.opacity = '0'
    }
    else(PS.style.opacity = '100')

    if(letCounter == 0){
        clearInterval(intervalID)
    }
}

intervalID = setInterval(pressStartFlickering, 500)

const pressStartPressed = () => {
    PS.style.transition = 'all 1s'
    PS.style.visibility = 'hidden'  
}

window.addEventListener("keydown", event => {
    if(event.keyCode === 13 || event.keyCode === 32){
        PS.style.transition = 'all 0s'
        letCounter = 0
        PSSound.play()
        PS.style.color = "chartreuse"
        pressStartPressed()
    }
})

