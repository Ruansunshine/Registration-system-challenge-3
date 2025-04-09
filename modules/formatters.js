
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
    let senhaConfirmada = document.getElementById("senha-confirmada");

    let maiuscula = document.getElementById("maiuscula");
    let caractere = document.getElementById("caractere-especial");
    let numero = document.getElementById("numero");
    let senhaIgual = document.getElementById("senha-igual");
    let btn = document.getElementById("salvarSenha");

    function validarSenha(valor) {
        let temMaiuscula = /[A-Z]/.test(valor);
        let temNumero = /[0-9]/.test(valor);
        let temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(valor);

        maiuscula.style.color = temMaiuscula ? "green" : "red";
        caractere.style.color = temEspecial ? "green" : "red";
        numero.style.color = temNumero ? "green" : "red";

        return temMaiuscula && temNumero && temEspecial;
    }

    function senhasIguais() {
        const senhaValida = validarSenha(senha.value);
        const iguais = senha.value === senhaConfirmada.value && senha.value.length > 0;

        senhaIgual.style.color = iguais ? "green" : "red";
        btn.disabled = !(iguais && senhaValida); // habilita o botão somente se tudo for válido
    }

    senha.addEventListener('input', senhasIguais);
    senhaConfirmada.addEventListener('input', senhasIguais);

    btn.addEventListener('click', (e) => {
        e.preventDefault(); // evita envio se estiver em form

        const dados = JSON.parse(localStorage.getItem('dadosInscricao')) || {};
        dados.senha = senha.value;
        localStorage.setItem('dadosInscricao', JSON.stringify(dados));

        alert("Senha salva com sucesso!");
        window.location.href = "../index.html"; // ajuste o caminho se necessário
    });
}

export { formatadorCpf, formatadorEmail, formatadorTelefone, formatadorCep, formatadorNumero, formatadorSenha };


