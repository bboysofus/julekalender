PS = document.querySelector('#press-start')
body = document.querySelector('body')

let PSSound = new Audio('./assets/sounds/PSSound.mp3')
let enterArrowSound = new Audio('./assets/sounds/AButton.mp3')

let n = 1
let i = 0
let txt = 'Hello there! Its so very nice to meet you!' /* The text */
let speed = 30 /* The speed/duration of the effect in milliseconds */
let typeTid = 1700

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("text-box-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const dialog = () => {
    document.querySelector('#text-box-parent').style.animation = 'hoverIn .1s ease-in'
    document.querySelector('#text-box-parent').style.animationFillMode = 'forwards'
}

const enterArrow = () => {
    document.querySelector('#enter-arrow').style.opacity = '100'
}

window.addEventListener("keyup", event => {
    if(event.keyCode === 13 || event.keyCode === 32){
        PS.style.animation = 'vanish 1.5s'
        PS.style.animationFillMode = 'forwards'
        if(n == 1){
            PSSound.play()
            setTimeout(dialog, 1500)
            setTimeout(typeWriter, typeTid)
            setTimeout(enterArrow, 2980)
        }
        if(document.querySelector('#enter-arrow').style.opacity == '100' && n == 1){
            enterArrowSound.play()
            document.querySelector('#enter-arrow').style.opacity = '0'
            document.querySelector('#text-box-text').innerHTML = ''
            txt = 'Congratulations if this works!'
            typeTid = 900
            i = 0
            n = 0
            if(txt == 'Congratulations if this works!' && n == 0){
                typeWriter()
                setTimeout(enterArrow, 0 + typeTid)
                n = 2
            }
        }
        if(document.querySelector('#enter-arrow').style.opacity == '100' && n == 2){
            enterArrowSound.play()
            document.querySelector('#enter-arrow').style.opacity = '0'
            document.querySelector('#text-box-text').innerHTML = ''
            body.style.background = 'red'
        }
    }
    
})