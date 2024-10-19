// Correct the element IDs based on your HTML structure
const consta = document.getElementById('abtnav');
const const1 = document.getElementById('abt');
const constb = document.getElementById('acdnav');
const const2 = document.getElementById('acd');
const constc = document.getElementById('skilnav');
const const3 = document.getElementById('skil');

// Scroll into view functionality for navigation buttons
consta.addEventListener('click', () => {
  const1.scrollIntoView({ behavior: 'smooth' });
});

constb.addEventListener('click', () => {
  const2.scrollIntoView({ behavior: 'smooth' });
});

constc.addEventListener('click', () => {
  const3.scrollIntoView({ behavior: 'smooth' });
});

// Change text color when clicked
consta.addEventListener('click', () => {
  consta.style.color = 'red';
});

constb.addEventListener('click', () => {
  constb.style.color = 'red';
});

constc.addEventListener('click', () => {
  constc.style.color = 'red';
});

// Observer to animate hidden elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

// Observe elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
