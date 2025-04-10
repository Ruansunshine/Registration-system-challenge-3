
//Selecionar Arquivos

function selecionarArquivo() { //Seleção de arquivos;
    let arquivo = document.querySelectorAll('.file-upload-area');
    arquivo.forEach(arquivo => {
        arquivo.addEventListener('click', ( ) =>{
            console.log("Area clicada");
            const pai = arquivo.parentElement;
            const entradaArquivo = pai.querySelector('input[type="file"]');
            if(entradaArquivo){
                entradaArquivo.click();
            }else{
                console.log("nenhum documento encontrado")
            }
        });

    })
}

//Alterar Cor
function alterarCor(id) {
    let entrada = document.getElementById(`entrada-${id}`);
  
    entrada.addEventListener('focus', function () {
        entrada.classList.remove('bg-secondary', 'bg-opacity-25');
        entrada.classList.add('bg-light')
    });
    entrada.addEventListener('blur', function () {
        if (!entrada.value) {
            entrada.classList.remove('bg-light');
            entrada.classList.add('bg-secondary', 'bg-opacity-25');
        }
    });
}
//Essa função conta passa os parametros para alterar a cor
function passarParametros() {
    for (let i = 1; i <= 11; i++) {
        alterarCor(i);
        validarCampoVazio(i)
    }
}

function carregarEstados() {
    const estados = [
        { sigla: "AC", nome: "Acre" },
        { sigla: "AL", nome: "Alagoas" },
        { sigla: "AP", nome: "Amapá" },
        { sigla: "AM", nome: "Amazonas" },
        { sigla: "BA", nome: "Bahia" },
        { sigla: "CE", nome: "Ceará" },
        { sigla: "DF", nome: "Distrito Federal" },
        { sigla: "ES", nome: "Espírito Santo" },
        { sigla: "GO", nome: "Goiás" },
        { sigla: "MA", nome: "Maranhão" },
        { sigla: "MT", nome: "Mato Grosso" },
        { sigla: "MS", nome: "Mato Grosso do Sul" },
        { sigla: "MG", nome: "Minas Gerais" },
        { sigla: "PA", nome: "Pará" },
        { sigla: "PB", nome: "Paraíba" },
        { sigla: "PR", nome: "Paraná" },
        { sigla: "PE", nome: "Pernambuco" },
        { sigla: "PI", nome: "Piauí" },
        { sigla: "RJ", nome: "Rio de Janeiro" },
        { sigla: "RN", nome: "Rio Grande do Norte" },
        { sigla: "RS", nome: "Rio Grande do Sul" },
        { sigla: "RO", nome: "Rondônia" },
        { sigla: "RR", nome: "Roraima" },
        { sigla: "SC", nome: "Santa Catarina" },
        { sigla: "SP", nome: "São Paulo" },
        { sigla: "SE", nome: "Sergipe" },
        { sigla: "TO", nome: "Tocantins" }
    ];
    const selectEstado = document.getElementById("entrada-11");

    estados.forEach(estado => {
        let option = document.createElement("option");
        option.value = estado.sigla;
        option.textContent = `${estado.nome} (${estado.sigla})`;
        selectEstado.appendChild(option);
    });
}

//Verificar se o usuario clicou em uma trilha especifica
function trilhasCheck() {
    let trilhas = document.querySelectorAll('input[name="trilhas"]');


    trilhas.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                let trilhaSelecionada = input.closest('.icons').querySelector('span').textContent.trim();
                console.log(`Usuario clicou em : ${trilhaSelecionada}`);
            }
        });
    });
}

//Verificar o que o usuario clicou no botao segurança;
function segurancaClick() {
    let security = document.getElementById('seguranca');
    let messageError = document.getElementById('error-seguranca');
    security.addEventListener('change', () => {
        if (security.checked) {
            console.log("Usuario aceitou os termos");
            messageError.style.display = "none";
        } else {
            console.log("Usuario não aceitou os termos");
        }
    });

}
//funcão processa inscrição
 function processarInscricao() {
    const inscricao = document.getElementById('inscricao');
    const cancelar = document.getElementById('cancelar');
    const messageError = document.getElementById('error-seguranca');

    inscricao.addEventListener('click', () => {
     
        const campos = document.querySelectorAll('[data-required]');
        let dados = {};

        campos.forEach(campo => {
            const tipo = campo.type;
            const nome = campo.name || campo.id; 

            if (tipo === 'radio') {
                if (campo.checked) {
                    dados[nome] = campo.value;
                }
            } else if (tipo === 'checkbox') {
                dados[nome] = campo.checked;
            } else if (tipo === 'file') {
                
                if (campo.files.length > 0) {
                    dados[nome] = campo.files[0].name;
                }
            } else {
                dados[nome] = campo.value.trim();
            }''
        });

        // Salva no localStorage
        localStorage.setItem('dadosInscricao', JSON.stringify(dados));
        console.log("Dados salvos no localStorage:", dados);

        // Redireciona para página final
        window.location.href = '../pages/password.html';
    });

    cancelar.addEventListener('click', () => {
        console.log("Inscrição cancelada com sucesso");
        window.location.href = '../index.html';
    });
}


function validarCampoVazio() {
    const campos = document.querySelectorAll('[data-required]');
    const botao = document.getElementById("inscricao");
    let todosPreenchidos = true;
    const radiosValidados = new Set();

    campos.forEach(campo => {
        const tipo = campo.type;
        const erroId = campo.dataset.errorId;
        let erroMessage = erroId ? document.getElementById(erroId) : null;

        if (tipo === 'radio') {
            if (!radiosValidados.has(campo.name)) {
                const radios = document.querySelectorAll(`input[name="${campo.name}"]`);
                const algumSelecionado = Array.from(radios).some(r => r.checked);

                // Apenas um erroMessage por grupo
                if (!algumSelecionado) {
                    if (erroMessage) erroMessage.style.display = 'inline';
                    todosPreenchidos = false;
                } else {
                    if (erroMessage) erroMessage.style.display = 'none';
                }

                
                radios.forEach(radio => {
                    if (!radio.dataset.listenerAdded) {
                        radio.addEventListener('change', validarCampoVazio);
                        radio.dataset.listenerAdded = "true";
                    }
                });

                radiosValidados.add(campo.name);
            }
            return;
        }

        let preenchido = true;

        if (tipo === 'file') {
            preenchido = campo.files.length > 0;
        } else if (tipo === 'checkbox') {
            preenchido = campo.checked;
        } else {
            preenchido = campo.value.trim() !== '';
        }

        if (!preenchido) {
            if (erroMessage) erroMessage.style.display = 'inline';
            todosPreenchidos = false;
        } else {
            if (erroMessage) erroMessage.style.display = 'none';
        }

        if (!campo.dataset.listenerAdded) {
            const evento = (tipo === 'file' || tipo === 'checkbox') ? 'change' : 'input';
            campo.addEventListener(evento, validarCampoVazio);
            campo.dataset.listenerAdded = "true";
        }
    });

    if (botao) {
        botao.disabled = !todosPreenchidos;
    }
}

function fazerLogin(){
    document.getElementById('form-login').addEventListener('submit', function (event) {
        event.preventDefault(); // evita recarregar a página
    
        const cpfInput = document.getElementById('entrada-1').value.trim();
        const senhaInput = document.getElementById('entrada-2').value;
    
        const dados = JSON.parse(localStorage.getItem('dadosInscricao'));
    
        if (!dados) {
            alert("❌ Nenhum dado encontrado. Faça o cadastro primeiro.");
            return;
        }
    
        if (dados.cpf === cpfInput && dados.senha === senhaInput) {
            alert("✅ Login realizado com sucesso!");
            window.location.href = './views.html'; // ajuste o caminho se necessário
        } else {
            alert("❌ CPF ou senha incorretos.");
        }
    });
}




export { selecionarArquivo, passarParametros, carregarEstados, trilhasCheck, segurancaClick, processarInscricao, validarCampoVazio, fazerLogin };
