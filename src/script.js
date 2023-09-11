window.onload = () => {
  let top = document.querySelector('.top');

  window.onscroll = (e) => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300) {
      top.classList.add('open');
    } else {
      top.classList.remove('open');
    }
  };

  top.onclick = () => {
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