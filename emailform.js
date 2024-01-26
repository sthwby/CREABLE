$(function(){
    const userEmail = document.getElementsByName('from')[0];
    const subject = document.getElementsByName('subject')[0];
    const message = document.getElementsByName('message')[0];
    const recaptcha = document.querySelector(".g-recaptcha");
    const formAlert = document.querySelector(".emailFormAlert");
    const contactForm = $('#contact');
    function toggleContactForm(state) {
        if (typeof state !== 'boolean') return TypeError('State must be a boolean');
    
        if (state === true) {
          contactForm.fadeIn();
        }
        else {
          contactForm.fadeOut();
          userEmail.value='';
          subject.value='';
          message.value='';
          formAlert.innerHTML='';
          grecaptcha.reset();
        }
      }
      function toggleContactForm(state) {
        if (typeof state !== 'boolean') return TypeError('State must be a boolean');
    
        if (state === true) {
          contactForm.fadeIn();
        }
        else {
          contactForm.fadeOut();
          userEmail.value='';
          subject.value='';
          message.value='';
          formAlert.innerHTML='';
          grecaptcha.reset();
        }
      }
  
  });