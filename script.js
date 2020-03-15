window.onload = function() {
  console.log('Hello Rolling Scopes!');
  // NavbsarClick
  addNavbarClickHandler();

  
}

const addNavbarClickHandler = () => {
  const navbarItems = document.querySelectorAll('.navbar-item a');

  Array.from(navbarItems).forEach(item => {
    item.addEventListener('click', event => {
      document.querySelectorAll('.navbar-item a').forEach(el => el.classList.remove('active'))
      event.target.classList.add('active')        
    });
  });
}

