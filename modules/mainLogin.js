
function fazerLogin(event) {
    event.preventDefault();

    const json = localStorage.getItem('dadosInscricao');
    if (!json) {
        alert("Nenhum dado encontrado. Faça o cadastro primeiro.");
        return;
    }

    const dados = JSON.parse(json);
    const cpf = document.getElementById('entrada-1').value;
    const senha = document.getElementById('entrada-2').value;

    if (cpf === dados.CPF && senha === dados.senha) {
        window.location.href = "./Pages/views.html";
    } else {
        alert("CPF ou senha inválidos");
    }
}

function formatadorCpfLogin() {
    let cpfInput = document.getElementById('entrada-1');
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

formatadorCpfLogin();