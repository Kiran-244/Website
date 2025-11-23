window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-load');
  
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show'); // triggers the animation
    }, index * 150); // stagger effect (150ms delay per element)
  });
});
// mail
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Oops… ' + JSON.stringify(error));
    });

    this.reset();
});

    window.addEventListener("scroll", function () {
        const nav = document.querySelector(".navbar");
        if (window.scrollY > 10) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
