
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "RBEdrilling@gmail.com",
        Password : "password",
        To : 'RBEdrilling@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Submission",
        Body : "Name: "+ document.getElementById("name").value
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}