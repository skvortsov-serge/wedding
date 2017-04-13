document.addEventListener("DOMContentLoaded", function(event) {


    document.getElementsByClassName('menu-btn')[0].addEventListener('click', function() {
        document.getElementsByClassName('toggle-menu')[0].classList.toggle('active-menu');
    });

    $('.popup-order').magnificPopup();
    $(".carousel").carousel({

    });

    var header = document.querySelector('header');
    // var aboutMe = document.querySelector('.about-me');
    if (window.innerWidth < 768) {
        header.style.height = 'initial';
        // aboutMe.style.marginTop = '50px';
    }
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            header.style.height = 'initial';
            // aboutMe.style.marginTop = '50px';
        } else {
            header.style.height = '110px';
            // aboutMe.style.marginTop = '110px';
        }
    });

    var lastScrollTop = 0;
    $('.wrapper').scroll(function() {
        var bodyPos = document.querySelector('.wrapper').scrollTop;
        if (bodyPos > 110) {
            if (bodyPos > lastScrollTop) {
                $('header').slideUp(300);
            } else {
                $('header').slideDown(300);
            }
            lastScrollTop = bodyPos;
        }
    });

    var el = document.getElementsByClassName('t-menu')[0];
    el.addEventListener('click', function(e) {
        e.preventDefault();
        var id = e.target.getAttribute('href');
        var element = document.querySelector(id);
        var header = document.querySelector('header');
        var top = element.offsetTop - 110;
        $('.wrapper').animate({ scrollTop: top }, 1500);
    });

    var logo = document.querySelector('.main-logo a img');
    logo.addEventListener('click', function() {
        $('.wrapper').animate({ scrollTop: 0 }, 1500);
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

    function phoneValidation(e) {
        var error = "";
        var stripped = e.target.value.replace(/[\(\)\.\-\ ]/g, '');
        var regexpPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        var divPhone = document.querySelector('.message-error.phoneDiv');

        if (e.target.value == "") {
            error = "Вы не ввели номер телефона.\n";
            e.target.style.border = '2px solid red';
            e.target.style.boxShadow = '0px 0px 12px 1px rgba(222,66,66,1)';
            divPhone.innerHTML = error;
            return false;

        } else if (regexpPhone.test(e.target.value)) {
            e.target.style.border = '2px solid green';
            e.target.style.boxShadow = '0px 0px 12px 1px rgba(65,224,70,1)';
            divPhone.innerHTML = '';
            return true;

        } else if (isNaN(parseInt(regexpPhone))) {
            error = "Номер телефона содежрит некоректные символы. Не записывайте (-)\n";
            e.target.style.border = '2px solid red';
            e.target.style.boxShadow = '0px 0px 12px 1px rgba(222,66,66,1)';
            divPhone.innerHTML = error;
            return false;
        } else if (!(regexpPhone.length == 10)) {
            error = "Неправильная длинна номера телефона. Убедитесь что вы заполнили область с кодом. Не записывайте (-)\n";
            e.target.style.border = '2px solid red';
            e.target.style.boxShadow = '0px 0px 12px 1px rgba(222,66,66,1)';
            divPhone.innerHTML = error;
            return false;
        }
        return true;
    }

    function nameValidation(e) {
        var error = "";
        var regex = /^[a-zA-Zа-яА-ЯёЁ ]{3,20}$/u;
        var value = e.target.value;
        var divName = document.querySelector('.message-error.nameDiv');

        if (regex.test(e.target.value)) {
            e.target.style.border = '2px solid green';
            e.target.style.boxShadow = '0px 0px 12px 1px rgba(65,224,70,1)';
            divName.innerHTML = '';
            return true;
        }

        if (e.target.value == "") {
            e.target.style.border = 'none';
            e.target.style.boxShadow = 'none';
            error = "Вы не ввели имя\n";
            divName.innerHTML = error;
            return false;
        }

        if ((e.target.value.length < 3) || (e.target.value.length > 20)) {
            e.target.style.border = '2px solid red';
            e.target.style.boxShadow = '0px 0px 12px 1px rgba(222,66,66,1)';
            error = "Имя не правильной длинны.\n";
            divName.innerHTML = error;
            return false;
        }
        if (!regex.test(e.target.value)) {
            e.target.style.border = '2px solid red';
            e.target.style.boxShadow = '0px 0px 12px 1px rgba(222,66,66,1)';
            error = "Имя содержит некоректные символы.\n";
            divName.innerHTML = error;
            return false;
        }
        return true;
    }
    var nameInput = document.querySelector('.name, .hidden>.name');
    var phoneInput = document.querySelector('.phone');
    var nameInputModal = document.querySelector('#hidden_form input.name');
    var phoneInputModal = document.querySelector('#hidden_form input.phone');

    nameInput.addEventListener('input', nameValidation);
    phoneInput.addEventListener('input', phoneValidation);

    nameInputModal.addEventListener('input', nameValidation);
    phoneInputModal.addEventListener('input', phoneValidation);

    function validateUsername(fld) {
        var error = "";
        var regex = /^[a-zA-Z ]{2,30}$/; // allow letters, numbers, and underscores
        var value = fld.value;
        var illegalChars = /\W/;
        console.log(value);

        if (regex.test(fld.value)) {
            console.log('your name is ok');
            return true;
        }
    }

    /*==========fullscring vidoe opening animation========*/

    var bodyEl = document.body,
        videoWrap = document.querySelector('.video-wrapper'),
        videoEl = videoWrap.querySelector('video'),
        playCtrl = document.querySelector('.action--play'),
        closeCtrl = document.querySelector('.action--close');

    videoEl.addEventListener('canplaythrough', allowPlay);
    if (videoEl.readyState > 3) {
        allowPlay();
    }


    function init() {
        initEvents();
    }

    function initEvents() {
        playCtrl.addEventListener('click', play);
        closeCtrl.addEventListener('click', hide);
        videoEl.addEventListener('canplaythrough', allowPlay);
        videoEl.addEventListener('ended', hide);
    }

    function allowPlay() {
        bodyEl.classList.add('video-loaded');
    }

    function play() {
        videoEl.currentTime = 0;
        videoWrap.classList.remove('video-wrap--hide');
        videoWrap.classList.add('video-wrap--show');
        setTimeout(function() { videoEl.play(); }, 600);
    }

    function hide() {
        videoWrap.classList.remove('video-wrap--show');
        videoWrap.classList.add('video-wrap--hide');
        videoEl.pause();
    }

    init();
    /*============================================================*/

});
