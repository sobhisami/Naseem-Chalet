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

/*animation*/
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function animateElements() {
  var elements = document.querySelectorAll('.animate-text');
  elements.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener('scroll', animateElements);

animateElements();