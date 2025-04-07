function ManipulationDom() {
  const labels = {
    "label-nome": "Nome completo",
    "label-data": "Data de nascimento",
    "label-cpf": "CPF",
    "label-sexo": "Sexo",
    "label-email": "E-mail",
    "label-telefone": "Telefone",
    "label-arquivo": "Documento de indetidade",
    "titulo-endereco": "Endereço residencial",
    "label-cep": "CEP",
    "label-rua": "Rua",
    "label-numero": "Número",
    "label-cidade": "Cidade",
    "label-estado": "Estado",
    "title-trilhas": "Trilhas de aprendizagem"
  };

  Object.entries(labels).forEach(([id, text]) => {
    // console.log(id);
    // console.log(text);
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  });
  

}


export { ManipulationDom };