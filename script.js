window.onload = function() {
  console.log('Hello Rolling Scopes!');
  
  addNavbarClickHandler();
  // addScloll();
  addChevronClickHandlers();
  addPortfolioClickHandlers();
  addFormClickHandlers();
  addScreenOffHandler();

  
}

// header

const addNavbarClickHandler = () => {
  const navbarItems = document.querySelectorAll('.navbar-item a');

  navbarItems.forEach(item => {
    item.addEventListener('click', event => {
      navbarItems.forEach(el => el.classList.remove('active'))
      event.target.classList.add('active')        
    });
  });

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
        this.classList.remove('slide-active', direction)
        slider.classList.add('color-red')
        slider.classList.remove('color-blue')
        chevrons.forEach(chev => {chev.classList.remove('chev-two')})
    })
  }

  function showSlide (direction) {
    console.error(currentSlide)
    sliders[currentSlide].classList.add('slide-next', direction)
    sliders[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('slide-next', direction)
        this.classList.add('slide-active')
        slider.classList.add('color-blue')
        slider.classList.remove('color-red')
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

// const addScroll = () => {
//   document.addEventListener('scroll', onScroll)

//   function onscroll(event){
    
//   }

// }

// // chev chev-left
// const xxx1 = (index) => {
//   let index1
//   let index2
//   if (index === 0){
//     index1 = 0
//     index2 = 1 } else {
//       index2 = 0
//       index1 = 1
//     }
//   let counter1 = 0
//   let counter2 = 0
//   let interval = setInterval(function() {
//     let sl = document.querySelectorAll('.slide')
//     if (counter1 < 860) {counter1 += 10
//     sl[index1].style.transform = 'translateX(' + counter1 + 'px)';    
//     }
//     if (counter2 > -860) {counter2 -= 10    
//       sl[index2].style.transform = 'translateX(' + counter2 + 'px)';}
//   }, 10)


// }

// const changeSlideIndex = () => {
//   let sliders = Array.from(document.querySelectorAll('.slide'))
//   console.error(sliders)
//   let x= sliders[0]
//    sliders[0] = sliders[1]
//    sliders[1] = x
//   console.error(sliders) 
// }

// const xxx2 = (index) => {
  
//   let index1
//   let index2
//   if (index === 0){
//     index1 = 0
//     index2 = 1 } else {
//       index2 = 0
//       index1 = 1
//     }
//   let counter1 = 0
//   let counter2 = 0
//   let interval = setInterval(function() {
//     let sl = document.querySelectorAll('.slide')
//     if (counter1 > -860) {counter1 -= 10
//     sl[index1].style.transform = 'translateX(' + counter1 + 'px)';    
//     }
//     if (counter2 > -860) {counter2 -= 10    
//       sl[index2].style.transform = 'translateX(' + counter2 + 'px)';}
//   }, 10)

//   // changeSlideIndex()

//   }

// const changeBachgroundColor = (index) => {
//   const slider = document.querySelector('.sliders')
//   const chevrons = document.querySelectorAll('.chev .svg>path')

//   if (index % 2 === 0) {
//     slider.classList.add('color-red')
//     slider.classList.remove('color-blue')
//     chevrons.forEach(chev => {chev.classList.remove('chev-two')})
//     xxx2(index)
   
//     // console.error(document.querySelectorAll('.slide'))
//   } else {
//     slider.classList.add('color-blue')
//     slider.classList.remove('color-red')
//     chevrons.forEach(chev => {chev.classList.add('chev-two')})
//     xxx2(index)

//     // console.error(document.querySelectorAll('.slide'))
//   }
 
 
 
// }

// const addChevronClickHandlers = () => {

//   changeSlideIndex()
//   let selectedSlideIndex = 0
//   const allSlides = Array.from(document.querySelectorAll('.slide'))
//   const slideCount = allSlides.length
  

//   document.querySelector('.chev.chev-right').addEventListener('click', event => {

//     if (selectedSlideIndex < slideCount - 1) {
//       selectedSlideIndex++
//     } else {
//       selectedSlideIndex = 0      
//     }  
  
//     changeBachgroundColor(selectedSlideIndex)
    
    
//   })


//   document.querySelector('.chev.chev-left').addEventListener('click', event => {
    
//     if (selectedSlideIndex > 0) {
//       selectedSlideIndex--      
//     } else {
//       selectedSlideIndex = slideCount - 1      
//     }

    
//     changeBachgroundColor(selectedSlideIndex)
    
//   })

// }

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

const shuffle = (array) => array.sort(() => Math.random() - 0.5)

const addPortfolioClickHandlers = () => {
  const portfolioNavbarItems = document.querySelectorAll('.portfolio-navbar-item a');
  const portfolioImages = document.querySelectorAll('.portfolio-images img')
  let arrayOfPortfolioPositions = [...Array(12).keys()]

  portfolioNavbarItems.forEach(item => {
    item.addEventListener('click', event => {
      portfolioNavbarItems.forEach(el => el.classList.remove('active'))
      event.target.classList.add('active')
      
      arrayOfPortfolioPositions = shuffle(arrayOfPortfolioPositions)


      arrayOfPortfolioPositions.forEach((position, index) => {
        portfolioImages[index].style.order = position
      })

    });
  });
  
  portfolioImages.forEach(el => el.addEventListener('click', event => {
    portfolioImages.forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
  }))


}






/*form*/

const addFormClickHandlers = () => {
  addSubmitClickHandler()
  addOkButtonClickHandler()

}

const  addSubmitClickHandler = () => {
  const submit = document.querySelector('.contact-info-submit')
  
  submit.addEventListener('click', event => {    
    document.querySelector('.modal-backdrop').style.display = 'flex'
    // document.body.style.setProperty('overflow', 'hidden')
  })
}

const addOkButtonClickHandler = () => {
  const submit = document.querySelector('.modal-submit')
  
  submit.addEventListener('click', event => {    
    document.querySelector('.modal-backdrop').style.display = 'none'
    document.body.style.removeProperty('overflow')
  })
}

// const name = document.querySelector('.form__name');
// const email = document.querySelector('.form__email');
// const subject = document.querySelector('.form__subject');
// const detail = document.querySelector('.form__detail');
// const formSubmit = document.querySelector('.form__submit');

// const modalWindow = document.getElementById('js-modal-window');
// const modalAlert = document.getElementById('js-alert');
// const modalMessage = document.getElementById('js-modal-message');
// const modalButton = document.getElementById('js-modal-button');

// const validateEmail = () => {
//   if (/^([a-zа-я0-9_-]+\.)*[a-zа-я0-9_-`]+@[a-zа-я0-9_-]+(\.[a-z0-9_-]+)*\.[a-zа-я]{2,6}$/i.test(email.value)) {
//     email.classList.remove('invalid');
//     return true;
//   }else{
//     email.classList.add('invalid');
//     return false;
//   }
// }

// const validateName = () => {
//   if (/^[a-zа-яё\s]{2,}$/i.test(name.value)) {
//     name.classList.remove('invalid');
//     return true;
//   }else{
//     name.classList.add('invalid');
//     return false;
//   }
// }

// name.addEventListener('input', validateName);
// email.addEventListener('input', validateEmail);

// formSubmit.addEventListener('click', (e) => {
//   e.preventDefault();
//   e.stopPropagation();

//   if (!validateEmail() || !validateName()) {
//     if (!validateName()) {
//        name.focus();
//     }else{
//       email.focus();
//     }
//   }else{
//     modalWindow.classList.add('visible');
//     modalButton.addEventListener('click', () => {
//       modalWindow.classList.remove('visible');
      
//       modalMessage.innerHTML ='';
//       name.value = '';
//       email.value = '';
//       subject.value = '';
//       detail.value = '';      
//     }, {once:true});

//     const theme = document.createElement('p');
//     theme.textContent = subject.value !== '' ? `Тема: ${subject.value}` : 'Без темы';
//     modalMessage.append(theme);
    
//     const description = document.createElement('p');
//     description.textContent = detail.value !== '' ? `Описание: ${detail.value}` : 'Без описания';
//     modalMessage.append(description);
//   }
// });