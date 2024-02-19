document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    if (form) {        
        if (typeof $ !== 'undefined') {            
            if ($.fn.inputmask) {
                $('#telefone').inputmask('(99) 99999-9999');
            } else {
                console.error('O plugin jQuery Inputmask não foi carregado corretamente.');
            }
        } else {
            console.error('jQuery não foi carregado corretamente.');
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateForm()) {
                alert('Formulário enviado com sucesso!');
                form.reset();
            }
        });

        function validateForm() {
            let isValid = true;

            const nome = form.querySelector('#nome');
            if (nome.value.trim() === '') {
                isValid = false;
                alert('Por favor, preencha seu nome.');
            }

            const email = form.querySelector('#email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                isValid = false;
                alert('Por favor, insira um e-mail válido.');
            }

            const mensagem = form.querySelector('#mensagem');
            if (mensagem.value.trim() === '') {
                isValid = false;
                alert('Por favor, insira sua mensagem.');
            }

            return isValid;
        }
    } else {
        console.error('Formulário não encontrado no DOM.');
    }
});
