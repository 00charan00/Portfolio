const consta = document.getElementById('abtnav');
const const1 = document.getElementById('abt');
const constb = document.getElementById('acdnav');
const const2 = document.getElementById('acd');
const constc = document.getElementById('skilnav');
const const3 = document.getElementById('add');
const constd = document.getElementById('pnav');
const const4 = document.getElementById('prjnav');




consta.addEventListener('click', () => {
  const1 .scrollIntoView({ behavior: 'smooth' });
});


constb.addEventListener('click', () => {
  const2.scrollIntoView({ behavior: 'smooth' });
});


constc.addEventListener('click', () => {
  const3.scrollIntoView({ behavior: 'smooth' });
});


constd.addEventListener('click', () => {
  const4.scrollIntoView({ behavior: 'smooth' });
});




const texto = document.getElementById('abtnav');

texto.addEventListener('click', () => {
  texto.style.color = 'red';
});

const textt = document.getElementById('acdnav');

textt.addEventListener('click', () => {
  textt.style.color = 'red';
});

const textz= document.getElementById('skilnav');

textz.addEventListener('click', () => {
  textz.style.color = 'red';
});

const textx= document.getElementById('pnav');

textx.addEventListener('click', () => {
  textx.style.color = 'red';
});

const textc= document.getElementById('yosinav');

textc.addEventListener('click', () => {
  textc.style.color = 'red';
});










// function isElementVisible(el) {
//   var elementTop = el.offsetTop;
//   var elementBottom = elementTop + el.offsetHeight;
//   var viewTop = window.pageYOffset;
//   var viewBottom = viewTop + window.innerHeight;

//   return elementBottom > viewTop && elementTop < viewBottom;
// }

// var animated = false;
// var animateMe = document.querySelectorAll(".animate-me");

// function animateOnScroll() {
//   animateMe.forEach(function(el) {
//     if (!animated && isElementVisible(el)) {
//       el.style.left = "0px"; /* animate to final position */
//       animated = true;
//     }
//   });
// }

// animateOnScroll(); /* check if element is visible on page load */

// window.addEventListener("scroll", animateOnScroll);

  
  
  
  
const observer = new IntersectionObserver((entries)=>{entries.forEach((entry)=>{
  console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('show');
  }
  else{
    entry.target.classList.remove('show');

  }
});
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));
  