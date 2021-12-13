PS = document.querySelector('#press-start')
body = document.querySelector('body')



let PSSound = new Audio('./assets/sounds/PSSound.mp3')
let enterArrowSound = new Audio('./assets/sounds/AButton.mp3')

let n = 1
let i = 0
let txt = 'Hello there! Its so very nice to meet you!' /* The text */
let speed = 30 /* The speed/duration of the effect in milliseconds */
let typeTid = 1700

const blueIn = () => {
    document.querySelector('#theme-select1').style.transform = 'scale(105%)'
    document.getElementById('dialga').style.opacity = '50%'
}

const blueOut = () => {
    document.querySelector('#theme-select1').style.transform = 'scale(100%)'
    document.getElementById('dialga').style.opacity = '0'
}

const redIn = () => {
    document.querySelector('#theme-select2').style.transform = 'scale(105%)'
    document.getElementById('palkia').style.opacity = '50%'
}

const redOut = () => {
    document.querySelector('#theme-select2').style.transform = 'scale(100%)'
    document.getElementById('palkia').style.opacity = '0'
}



const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("text-box-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const dialogIn = () => {
    document.querySelector('#text-box-parent').style.animation = 'hoverIn .1s ease-in'
    document.querySelector('#text-box-parent').style.animationFillMode = 'forwards'
}

const dialogOut = () => {
    document.querySelector('#text-box-parent').style.animation = 'hoverOut .1s ease-out'
    document.querySelector('#text-box-parent').style.animationFillMode = 'forwards'
}

const enterArrow = () => {
    document.querySelector('#enter-arrow').style.opacity = '100'
}

const themeSelectScreen = () => {
    document.getElementById('theme-select-text').style.animation = 'fadeIn .5s ease-in'
    document.getElementById('theme-select-text').style.animationFillMode = 'forwards'
    document.getElementById('theme-select-parent').style.opacity = '100'
    document.getElementById('theme-select-parent').style.zIndex = '2'
    document.getElementById('theme-select1').style.zIndex = '2'
    document.getElementById('theme-select2').style.zIndex = '2'
    document.getElementById('theme-select-text').style.zIndex = '2'
    body.style.transition = '.2s all ease-in-out'
    setTimeout(() => {
        document.getElementById('theme-select1').style.animation = 'popIn .5s ease-in-out'
        document.getElementById('theme-select1').style.animationFillMode = 'forwards'
    }, 500)
    setTimeout(() => {
        document.getElementById('theme-select2').style.animation = 'popIn .5s ease-in-out'
        document.getElementById('theme-select2').style.animationFillMode = 'forwards'
    }, 800)
}

document.addEventListener("keyup", event => {
    
})

let busy = false

const doSomethingThatTakesSomeTime = async () => {
busy = true
let result = () => {
        PS.style.animation = 'vanish 1.5s'
        PS.style.animationFillMode = 'forwards'
        if(n == 1){
            PSSound.play()
            setTimeout(dialogIn, 1500)
            setTimeout(typeWriter, typeTid)
            setTimeout(enterArrow, 2980)
        }
        if(document.querySelector('#enter-arrow').style.opacity == '100' && n == 1){
            enterArrowSound.play()
            document.querySelector('#enter-arrow').style.opacity = '0'
            document.querySelector('#text-box-text').innerHTML = ''
            txt = 'Welcome to the PokéCalender!'
            typeTid = 900
            i = 0
            n = 0
            if(txt == 'Welcome to the PokéCalender!' && n == 0){
                typeWriter()
                setTimeout(enterArrow, 0 + typeTid)
                setTimeout(n=2,5000)
            }
        }
        if(document.querySelector('#enter-arrow').style.opacity == '100' && n == 2){
            enterArrowSound.play()
            document.querySelector('#enter-arrow').style.opacity = '0'
            document.querySelector('#text-box-text').innerHTML = ''
            dialogOut()
            body.style.background = '#0f0f0f'
            body.style.transition = '.5s all ease-in'
            n = 3
        }
        if(n == 3){
            n = 4
            setTimeout(themeSelectScreen, 700)
        }
    }
    busy = false
    return result()
}

document.addEventListener('keyup', async ()=>{
if(busy){
console.log('busy true, returning without executing')
return
}

//vi kommer kun hertil hvis busy er false

console.log('eventlistener begin')
let res = await doSomethingThatTakesSomeTime()
console.log('eventlistener end')
})

