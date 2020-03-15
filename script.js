window.onload = function() {
  console.log('Hello Rolling Scopes!');
  // NavbsarClick
  addNavbarClickHandler();
  addChevronClickHandlers();
  addPortfolioClickHandlers();

  
}

const addNavbarClickHandler = () => {
  const navbarItems = document.querySelectorAll('.navbar-item a');

  navbarItems.forEach(item => {
    item.addEventListener('click', event => {
      navbarItems.forEach(el => el.classList.remove('active'))
      event.target.classList.add('active')        
    });
  });
}

// chev chev-left

const changeBachgroundColor = (index) => {
  const slider = document.querySelector('.slider')

  if (index % 2 === 0) {
    slider.classList.add('color-red')
    slider.classList.remove('color-blue')
  } else {
    slider.classList.add('color-blue')
    slider.classList.remove('color-red')
  }
}

const addChevronClickHandlers = () => {


  let selectedSlideIndex = 0
  const allSlides = Array.from(document.querySelectorAll('.slide'))
  const slideCount = allSlides.length


  document.querySelector('.chev.chev-right').addEventListener('click', event => {

    if (selectedSlideIndex < slideCount - 1) {
      selectedSlideIndex++
    } else {
      selectedSlideIndex = 0
    }

    document.querySelectorAll('.slide').forEach(el => el.classList.remove('active'))
    allSlides[selectedSlideIndex].classList.add('active') 
    
    changeBachgroundColor(selectedSlideIndex)

  })


  document.querySelector('.chev.chev-left').addEventListener('click', event => {
    
    if (selectedSlideIndex > 0) {
      selectedSlideIndex--
    } else {
      selectedSlideIndex = slideCount - 1
    }

    document.querySelectorAll('.slide').forEach(el => el.classList.remove('active'))
    allSlides[selectedSlideIndex].classList.add('active') 
   
    changeBachgroundColor(selectedSlideIndex)

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