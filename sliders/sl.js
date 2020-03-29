let sliders = document.querySelectorAll('.slide')
let currentSlide = 0
// let nextSlide = 0
let isEnabled = true

function changeCurrentSlide (n) {
    currentSlide = (n + sliders.length) % sliders.length
    
}

function hideSlide (direction) {
    isEnabled = false
    sliders[currentSlide].classList.add(direction)
    sliders[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('slide-active', direction)
    })
}

function showSlide (direction) {
    console.error(currentSlide)
    sliders[currentSlide].classList.add('slide-next', direction)
    sliders[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('slide-next', direction)
        this.classList.add('slide-active')
        isEnabled = true
    })
}

function previousSlide(n){
    hideSlide('to-right')
    changeCurrentSlide (n - 1)
    showSlide('from-left')
}

function nextSlide(n){
    hideSlide('to-left')
    changeCurrentSlide (n + 1)
    showSlide('from-right')
}

document.querySelector('.chev-left').addEventListener('click', function() {
    
    if(isEnabled){
        previousSlide(currentSlide)
    }
})

document.querySelector('.chev-right').addEventListener('click', function() {
    
    if(isEnabled){
        nextSlide(currentSlide)
    }
})




const swipedetect = (el) => {
    let surface = el
    let startX = 0
    let startY = 0
    let distX = 0
    let distY = 0

    let startTime = 0
    let elapseTime = 0

    let threshold = 150
    let restraint = 100
    let allowedTime = 300

    surface.addEventListener('mousedown', function(e){       
        startX = e.pageX
        startY = e.pageY
        startTime = new Date().getTime();
        e.preventDefault();

    }, false)

    surface.addEventListener('mouseup', function(e){
        distX = e.pageX - startX
        distY = e.pageY - startY
        elapseTime = new Date().getTime() - startTime

        if(elapseTime <= allowedTime) {
            if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if (isEnabled) {
                    previousSlide(currentSlide)
                } else {
                    if(isEnabled){
                    nextSlide(currentSlide) 
                    }
                }

            }
        }
      
        e.preventDefault();
        
    }, false)
    
    surface.addEventListener('touchstart', function(e){  
        if(e.target.classList.contains('chev') ) {
            if(e.target.classList.contains('chev-left')){
                if (isEnabled) {
                    previousSlide(currentSlide)
                } else {
                    if(isEnabled){
                    nextSlide(currentSlide) 
                    }
                }
        }
        }
        let touchObj = e.changedTouches[0]     
        startX = touchObj.pageX
        startY = touchObj.pageY
        startTime = new Date().getTime();
        e.preventDefault();

    }, false)

    surface.addEventListener('touchmove', function(e){  
               e.preventDefault();

    }, false)

    surface.addEventListener('touchend', function(e){
        let touchObj = e.changedTouches[0]   
        distX = touchObj.pageX - startX
        distY = touchObj.pageY - startY
        elapseTime = new Date().getTime() - startTime

        if(elapseTime <= allowedTime) {
            if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if (isEnabled) {
                    previousSlide(currentSlide)
                } else {
                    if(isEnabled){
                    nextSlide(currentSlide) 
                    }
                }

            }
        }
      
        e.preventDefault();
        
    }, false)


}

let el = document.querySelector('.sliders')
swipedetect(el)