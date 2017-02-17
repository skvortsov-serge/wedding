document.addEventListener("DOMContentLoaded", function(event) {


    document.getElementsByClassName('menu-btn')[0].addEventListener('click', function() {
        document.getElementsByClassName('toggle-menu')[0].classList.toggle('active-menu');
    });

    window.onscroll = function() {
        var wScroll = document.body.scrollTop;
        var position = 1600 + wScroll;
        var bg = document.querySelector('.parallax-bg');
        bg.style.backgroundPosition = '-325px -' + position / 2 + 'px';
        // --------------------------------------------------------------

        var header = document.querySelector('.header-width');
        if (document.body.scrollTop >= 165) {
            document.querySelector('.about-me').style.marginTop = '200px';
            header.classList.add('scroll-header');
        } else {
            document.querySelector('.about-me').style.marginTop = '0px';
            header.classList.remove('scroll-header');
        }

    }

    var el = document.getElementsByClassName('t-menu')[0];
    el.addEventListener('click', function(e) {
        e.preventDefault();
        var id = e.target.getAttribute('href');
        var element = document.querySelector(id);
        var header = document.querySelector('header');
        var top = element.offsetTop - 90;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

});
