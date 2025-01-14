function toggleSideNav() {
    const sideNav = document.getElementById('sideNav');
    const hamburger = document.querySelector('.hamburger');
    
    sideNav.classList.toggle('open');
    hamburger.classList.toggle('hide');
}

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a, .side-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});