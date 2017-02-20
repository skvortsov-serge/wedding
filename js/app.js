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
            if (window.innerWidth < 767) {
                header.style.display = 'none';
            } else {
                header.style.display = 'block';
            }
            document.querySelector('.about-me').style.marginTop = '200px';
            document.querySelector('header').classList.add('header-padding');
            header.classList.add('scroll-header');
        } else {
            if (window.innerWidth < 767) {
                header.style.display = 'block';
            }
            document.querySelector('.about-me').style.marginTop = '0px';
            document.querySelector('header').classList.remove('header-padding');
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


    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

    };

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    // navigator.geolocation.getCurrentPosition(success, error);

});
