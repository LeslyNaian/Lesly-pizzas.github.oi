emailjs.init("tVS7U8jQTxiRZ2baE");

    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_zcmly04", "template_u69jj96", this)
        .then(function() {
          document.getElementById("success-message").style.display = "block";
          document.getElementById("contact-form").reset();
        }, function(error) {
          alert("Error al enviar el formulario: " + JSON.stringify(error));
        });
    });
   
