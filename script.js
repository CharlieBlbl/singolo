window.onload = function() {
  console.log('Hello Rolling Scopes!');
  
  addNavbarClickHandler();
  addScroll();
  addChevronClickHandlers();
  addPortfolioClickHandlers();
  addFormClickHandlers();
  addScreenOffHandler();
  addHamburgerMenuHandler();
  
  
}

// header

const addNavbarClickHandler = () => {
  const links = document.querySelectorAll('.navbar-item a');
  // console.log(links)
  links.forEach(el =>
    
    el.addEventListener('click', event => {
    
    // set scroll-behavior to auto
    document.querySelector('.navbar ul').classList.add('scrolling')

    links.forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
    
    setTimeout(() => document.querySelector('.navbar ul').classList.remove('scrolling'), 1000)
    // set scroll-behavior to smooth
  }));
  

}

const addScroll = () => {
  document.addEventListener('scroll', onScroll)
  
  function onScroll(event){
    const curPos = window.scrollY
    const sections = document.querySelectorAll('section')
    const links = document.querySelectorAll('.navbar-item a')
    
   

    sections.forEach(el => {
      el.getAttribute('id')
      
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
      links.forEach(a =>{
        a.classList.remove('active')
        if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
          a.classList.add('active')
          }
      
        })
      }
    })

  
  }

}


//sliders swips

const addChevronClickHandlers = () => {
  const slider = document.querySelector('.sliders')
  const chevrons = document.querySelectorAll('.chev .svg>path')

  let sliders = document.querySelectorAll('.slide')
  let currentSlide = 0
  let isEnabled = true

  function changeCurrentSlide (n) {
    currentSlide = (n + sliders.length) % sliders.length
    
  }

  function hideSlide (direction) {
    isEnabled = false
    sliders[currentSlide].classList.add(direction)
    sliders[currentSlide].addEventListener('animationend', function() {
        slider.classList.add('color-red')
        slider.classList.remove('color-blue')
        this.classList.remove('slide-active', direction)    
        chevrons.forEach(chev => {chev.classList.remove('chev-two')})
    })
  }

  function showSlide (direction) {
    // console.error(currentSlide)
    sliders[currentSlide].classList.add('slide-next', direction)
    sliders[currentSlide].addEventListener('animationend', function() {
        slider.classList.add('color-blue')
        slider.classList.remove('color-red')
        this.classList.remove('slide-next', direction)
        this.classList.add('slide-active')        
        chevrons.forEach(chev => {chev.classList.add('chev-two')})
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
}



/*screens*/

const addScreenOffHandler = () => {
  const iphones = document.querySelectorAll('.iphone')
  iphones.forEach(iphon => {   
    const screen = iphon.querySelector('.iphone-screen') 
    const clicks = iphon.querySelectorAll('.click')  
 
    
    clicks.forEach(click =>{              
      click.addEventListener('click', () => {screen.classList.toggle("background-black")})
    })
   
  })

}




/* portfolio */
const addPortfolioClickHandlers = () => {
  const portfolioNavbarItems = document.querySelectorAll('.portfolio-navbar-item a');
  const portfolioImagesContainer = document.querySelector('.portfolio-images')
  
  portfolioNavbarItems.forEach(item => {
    item.addEventListener('click', event => {
      portfolioNavbarItems.forEach(el => el.classList.remove('active'))
      event.target.classList.add('active')
      
      const portfolioImagesChildren = portfolioImagesContainer.children

      portfolioImagesContainer.appendChild( portfolioImagesChildren[0] );  
    });
  });

  const portfolioImages = document.querySelectorAll('.portfolio-images .image img')
  portfolioImages.forEach(el => el.addEventListener('click', event => {
    portfolioImages.forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
  }))


}






/*form*/

const nameInput = document.querySelector('form input[name="username"]')
const mailInput = document.querySelector('form input[name="email-address"]')
const subjectInput = document.querySelector('form input[name="subject"]')
const describeInput = document.querySelector('form textarea[name="describe"]')
const subjectmod = document.createElement('p')
const describemod = document.createElement('p')

const addFormClickHandlers = () => {
  addSubmitClickHandler()
  addOkButtonClickHandler()

}

const validName = () => {  
  const reg = /^[а-яa-zА-ЯA-Z'][а-яa-zА-ЯA-Z-' ]+[а-яa-zА-ЯA-Z']?$/
  if(reg.test(nameInput.value)){
    nameInput.classList.remove('invalid')
    return true
  }else{
    nameInput.classList.add('invalid')
    return false
  }
}

const validEmail = () => {
  
  const reg = /^[0-9а-яa-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i
  if(reg.test(mailInput.value)){
    mailInput.classList.remove('invalid')
    return true
  }else{
    mailInput.classList.add('invalid')
    return false
  }
  
}


const  addSubmitClickHandler = () => {
  
  const modMessage = document.getElementById('modal-message')
  const submit = document.querySelector('.contact-info-submit')
  submit.addEventListener('click', event => { 
  
    if (validName() && validEmail()){         
      
      
      
      if(subjectInput.value === ''){
        subjectmod.textContent = 'Без темы'
      }else{
        subjectmod.textContent = `Тема: ${subjectInput.value}`
      }

      if(describeInput.value === ''){
        describemod.textContent = 'Без описания'
      }else{
        describemod.textContent = `Описание: ${describeInput.value}`
      }

      modMessage.appendChild(subjectmod)
      modMessage.appendChild(describemod)

      document.querySelector('.modal-backdrop').style.display = 'flex'
      document.body.style.setProperty('overflow', 'hidden')   
  }
})  
  
}

const addOkButtonClickHandler = () => {
  const submit = document.querySelector('.modal-submit')
  
  submit.addEventListener('click', event => {    
    document.querySelector('.modal-backdrop').style.display = 'none'
    document.body.style.removeProperty('overflow')
    nameInput.value = ''
    mailInput.value = ''
    subjectInput.value = ''
    describeInput.value = ''
    subjectmod.value = ''
    describemod.value = ''
  })
}


const addHamburgerMenuHandler = () => {
  const hamburgerMenu = document.querySelector('.menu__btn')

  hamburgerMenu.addEventListener('click', event => {
    document.querySelector('.hamburger-menu').classList.toggle('hamburger-menu_shadow')
    document.querySelector('.logo').classList.toggle('logo_nav_375')
  })
}