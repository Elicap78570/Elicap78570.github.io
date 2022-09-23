document.addEventListener('DOMContentLoaded', function () {
    let input_nom = document.querySelector(".input_nom");
    let input_prenom = document.querySelector(".input_prenom");
    let input_mail = document.querySelector(".input_mail");
    let span_nom = document.querySelector(".span_nom");
    let span_prenom = document.querySelector(".span_prenom");
    let span_mail = document.querySelector(".span_mail");
    let button_generate = document.querySelector(".button_generate");
    let mailto = document.querySelector(".mailto");
    let main = document.querySelector("main");
    let signature_hidden = document.querySelector(".signature_hidden");

    let enableButton = () => {
        if (input_nom.value !== '' && input_prenom.value !== '') {
            button_generate.disabled = false;
        } else {
            button_generate.disabled = true;
        }
    }

    input_nom.addEventListener('change', enableButton);
    input_prenom.addEventListener('change', enableButton);

    button_generate.addEventListener('click', function () {
        let nom = input_nom.value.toUpperCase();
        let prenom = input_prenom.value.toUpperCase()[0] + input_prenom.value.toLowerCase().slice(1);
        let mail = input_mail.value.toLowerCase();
        span_nom.innerHTML = nom;
        span_prenom.innerHTML = prenom;
        span_mail.innerHTML = mail;
        mailto.href = "mailto:" + mail;
        main.style = 'display: none';
        signature_hidden.style = 'display: block';
    });
});