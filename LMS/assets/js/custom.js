(function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();





  // Bottom to Top & Sticky Header
  var btn = document.querySelector('#buttonToTopBtn')
  var nav = document.querySelector('#nav')
  window.onscroll = function(){
    if (window.scrollY > 300){
      btn.classList.add('show');
      nav.classList.add('header-fixed')

    }else{
      btn.classList.remove('show');
      nav.classList.remove('header-fixed')
    }
  }
  function scrollHandler() {
    window.scrollTo(0, 0);
  }


