PS = document.querySelector('#press-start')



const pressStart = () => {
    if(PS.style.opacity == '100'){
        PS.style.opacity = '0'
    }
    else(PS.style.opacity = '100')
}

setInterval(pressStart, 500)