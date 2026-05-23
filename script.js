window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.style.background = 'rgba(11,11,15,0.95)';
  } else {
    navbar.style.background = 'rgba(11,11,15,0.7)';
  }
});
