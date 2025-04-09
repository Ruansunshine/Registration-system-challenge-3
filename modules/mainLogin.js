// function fazerLogin(event) {
//     event.preventDefault(); // Impede o recarregamento da página

//     // Recupera os dados salvos no localStorage
//     let json = localStorage.getItem('dadosInscricao');
//     let dados = JSON.parse(json);

//     // Pega os valores digitados nos inputs
//     let cpf = document.getElementById('entrada-1').value;
//     let senha = document.getElementById('entrada-2').value;

//     // Verifica se os dados estão corretos
//     if (dados.cpf === cpf && dados.senha === senha) {
//         alert("Login executado com sucesso!");
//         window.location.href = ".\Pages\views.html";
//     } else {
//         alert("CPF ou senha inválidos");
//     }

//     return false; // Também impede o envio real do formulário
// }
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
        alert("Login executado com sucesso!");
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