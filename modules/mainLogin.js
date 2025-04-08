let json = localStorage.getItem('dadosInscricao');
let dados = JSON.parse(json);

let cpf = document.getElementById('entrada-1');
let senha = document.getElementById('entrada-2');

if(dados.cpf == cpf && dados.senha == senha){
    console.loggit ("Login realizado com sucesso!");
    window.location.href = "./Pages/views.html" 
}else{
    alert('Cpf e senha estão invalidos');
}