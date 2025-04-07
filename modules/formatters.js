
function formatadorCpf() {
    let cpfInput = document.getElementById('entrada-3');
    cpfInput.addEventListener("input", function (e) {
        let value = e.target.value;
        // Remove caracteres não numéricos
        value = value.replace(/\D/g, "");
        // Formata o CPF corretamente
        if (value.length <= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, "$1.$2");
        } else if (value.length <= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
        } else if (value.length <= 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
        } else if (value.length === 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
        // Atualiza o campo
        e.target.value = value;
    });
}

//formatador para o campo de email:
function formatadorEmail() {
    let emailFormat = document.getElementById("entrada-5"); // ID do campo de email
    let errorMessageEmail = document.getElementById("error-message-email"); // ID da mensagem de erro
    let verificarBtn = document.getElementById("inscricao");
    emailFormat.addEventListener('input', function (e) {
        let valorDigitado = e.target.value;
        let valorOriginal = valorDigitado.replace(/[^a-zA-Z0-9@._-]/g, "");
        e.target.value = valorOriginal;
        let emailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailFormato.test(valorOriginal) && valorOriginal !== "") {
            errorMessageEmail.style.display = "inline";
            verificarBtn.disabled = true;
        } else {
            errorMessageEmail.style.display = "none";
            verificarBtn.disabled = false;
        }
    });
}

function formatadorTelefone() {
    let telefoneInput = document.getElementById('entrada-6');
    telefoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

        if (value.length > 11) {
            value = value.slice(0, 11); // Limita a 11 caracteres (padrão Brasil: DDD + 9 dígitos)
        }
        // Aplica a formatação (XX) XXXXX-XXXX se tiver 11 dígitos
        if (value.length === 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        }

        e.target.value = value;
    });

}


// formatador cep
function formatadorCep() {
    let format = document.getElementById("entrada-7");
    format.addEventListener('input', function (e) {
        let valor = e.target.value.replace(/\D/g, "");
        if (valor.length > 5) {
            valor = valor.slice(0, 5) + "-" + valor.slice(5, 8);
        }
        e.target.value = valor;
    });
}

//Formatador do numero da casa para não aceitar letras;
function formatadorNumero() {
    let casaFormat = document.getElementById("entrada-9");
    let errorMessage = document.getElementById("error-message");
    casaFormat.addEventListener('input', function (e) {
        let valorOriginal = e.target.value; //valor original pega o ultimo valor digitado
        let valor = valorOriginal.replace(/\D/g, ""); // valor receber o ultimo digitado
        if (valorOriginal !== valor) {
            errorMessage.style.display = "inline"

        } else {
            errorMessage.style.display = "none";

        }
        e.target.value = valor;

    });
}

function formatadorSenha() {
    let senha = document.getElementById("senha");
    senha.addEventListener('input', function (e) {

        const temMaiuscula = /[A-Z]/.test(valor);
        const temNumero = /[0-9]/.test(valor);
        const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(valor);

        const maiuscula = document.getElementById("maiuscula");
        const caractere = document.getElementById("caractere-especial");
        const numero = document.getElementById("numero");

        maiuscula.style.color = temMaiuscula ? "green" : "red";
        caractere.style.color = temEspecial ? "green" : "red";
        numero.style.color = temNumero ? "green" : "red";




    })
}

export { formatadorCpf, formatadorEmail, formatadorTelefone, formatadorCep, formatadorNumero, formatadorSenha };


