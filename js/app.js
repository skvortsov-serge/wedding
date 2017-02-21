document.addEventListener("DOMContentLoaded", function(event) {


    document.getElementsByClassName('menu-btn')[0].addEventListener('click', function() {
        document.getElementsByClassName('toggle-menu')[0].classList.toggle('active-menu');
    });

    $('.popup-order').magnificPopup();

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
    
    var nameInput = document.querySelector('.name, .hidden>.name');
    var phoneInput = document.querySelector('.phone');

    phoneInput.addEventListener('input', function(e) {
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

        } else  if (regexpPhone.test(e.target.value)) {
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
    });


    nameInput.addEventListener('input', function(e) {
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

    });

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

        // if (fld.value == "") {
        //     fld.style.background = 'Yellow';
        //     error = "You didn't enter a username.\n";
        //     alert(error);
        //     return false;

        // } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        //     fld.style.background = 'Yellow';
        //     error = "The username is the wrong length.\n";
        //     alert(error);
        //     return false;

        // } else if (illegalChars.test(fld.value)) {
        //     fld.style.background = 'Yellow';
        //     error = "The username contains illegal characters.\n";
        //     alert(error);
        //     return false;

        // } else {
        //     fld.style.background = 'White';
        // }
        // return true;
    }

});
