/** @format */

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let title = document.getElementById('title');
let exploreBtn = document.getElementById('explore');
let header = document.querySelector('header');

var previousScroll = 0;
window.addEventListener('scroll', function () {
  let value = window.scrollY;
  let currentScroll = window.pageYOffset;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  title.style.marginTop = value * 1.5 + 'px';
  title.style.marginRight = value * 3 + 'px';
  exploreBtn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
  if (currentScroll > previousScroll) {
    console.log('down', window.pageYOffset);
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
    console.log('up', window.pageYOffset);
  }

  if (value == 0) {
    header.classList.remove('scroll-up');
    header.classList.remove('scroll-down');
  }
  previousScroll = currentScroll;
});
