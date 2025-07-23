// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
// Form submission alert
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thank you! Your service request is received — we'll be in touch shortly.");
  this.reset();
});
