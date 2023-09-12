window.onload = () => {
  let topButton = document.querySelector('.top');

  window.onscroll = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300) {
      topButton.classList.add('open');
    } else {
      topButton.classList.remove('open');
    }
  };

  topButton.onclick = () => {
    // Use window.parent.top if your code is running in an iframe
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
};


/* direction */
function detectTextDirection() {
  const body = document.querySelector('body');
  const direction = getComputedStyle(body).direction;
  if (direction === 'rtl') {
    body.classList.add('rtl');
    body.classList.remove('ltr');
  } else {
    body.classList.add('ltr');
    body.classList.remove('rtl');
  }
}

detectTextDirection();