document.addEventListener("DOMContentLoaded", function(event) {


    document.getElementsByClassName('menu-btn')[0].addEventListener('click', function() {
        document.getElementsByClassName('toggle-menu')[0].classList.toggle('active-menu');
    });

    window.onscroll = function() {
        var wScroll = document.body.scrollTop;
        var position = 1600 + wScroll;
        var bg = document.querySelector('.parallax-bg');
        // bg.style.backgroundPosition = '-1650px -'+position/3 +'px';
        bg.style.backgroundPosition = '-325px -'+position/2 +'px';
    }

});
