
# Documentação de Palavras Reservadas e Métodos JavaScript

## **1. `document.getElementById`**
- **O que faz**: Seleciona um elemento HTML pelo seu `id`.
- **Tradução**: "Obter elemento por ID".
- **Quando usar**: Quando você precisa acessar um elemento específico no DOM (Document Object Model) que possui um `id` único.
- **Exemplo no código**:
  ```javascript
  let tituloEndereco = document.getElementById("titulo-endereco");
  tituloEndereco.textContent = "Endereço residencial";
## **2. `document.querySelector`**
- **O que faz**: Seleciona o primeiro elemento que corresponde a um seletor CSS.
- **Tradução**: "Consultar seletor".
- **Quando usar**: Quando você precisa acessar um único elemento usando um seletor CSS (como classes, tags, atributos, etc.).
- **Exemplo no código**:
  ```javascript
  let arquivo = document.querySelector('.file-upload-area');
## **3. `document.querySelectorAll`**
- **O que faz**: Seleciona todos os elementos que correspondem a um seletor CSS, retornando uma NodeList (uma lista de nós).
- **Tradução**: "Consultar todos os seletores".
- **Quando usar**: Quando você precisa acessar múltiplos elementos que compartilham o mesmo seletor (como classes, tags, etc.).
- **Exemplo no código**:
  ```javascript
  let trilhas = document.querySelectorAll('input[name="trilhas"]');
## **4. `addEventListener`**
- **O que faz**: Adiciona um "ouvinte" de eventos a um elemento, permitindo que você execute uma função quando um evento específico ocorrer (como um clique, foco, mudança, etc.).
- **Tradução**: "Adicionar ouvinte de evento".
- **Quando usar**: Sempre que você precisar responder a interações do usuário (cliques, digitação, foco, etc.).
- **Exemplo no código**:
  ```javascript
  arquivo.addEventListener('click', function () {
      console.log("Área de arquivo foi clicada");
  });
## **5. `classList`**
- **O que faz**: Permite manipular as classes de um elemento (adicionar, remover, alternar ou verificar classes).
- **Tradução**: "Lista de classes".
- **Quando usar**: Quando você precisa alterar dinamicamente as classes de um elemento para mudar seu estilo ou comportamento.
- **Exemplo no código**:
  ```javascript
  entrada.classList.remove('bg-secondary', 'bg-opacity-25');
  entrada.classList.add('bg-light');
## **6. `textContent`**
- **O que faz**: Define ou retorna o conteúdo de texto de um elemento.
- **Tradução**: "Conteúdo de texto".
- **Quando usar**: Quando você precisa alterar ou acessar o texto dentro de um elemento.
- **Exemplo no código**:
  ```javascript
  tituloEndereco.textContent = "Endereço residencial";
## **7. `value`**
- **O que faz**: Define ou retorna o valor de um campo de entrada (input, textarea, etc.).
- **Tradução**: "Valor".
- **Quando usar**: Quando você precisa acessar ou modificar o valor digitado pelo usuário em um campo de formulário.
- **Exemplo no código**:
  ```javascript
  let value = e.target.value;
## **8. `replace`**
- **O que faz**: Substitui parte de uma string por outra, com base em uma expressão regular ou texto.
- **Tradução**: "Substituir".
- **Quando usar**: Quando você precisa formatar ou limpar strings (como CPF, telefone, etc.).
- **Exemplo no código**:
  ```javascript
  value = value.replace(/\D/g, "");
## **9. `forEach`**
- **O que faz**: Itera sobre cada elemento de uma lista (como um array ou NodeList).
- **Tradução**: "Para cada".
- **Quando usar**: Quando você precisa executar uma ação para cada item de uma lista.
- **Exemplo no código**:
  ```javascript
  trilhas.forEach(input => {
      input.addEventListener('change', () => {
          if (input.checked) {
              console.log(`Usuario clicou em: ${trilhaSelecionada}`);
          }
      });
  });
  ## **10. `closest`**
- **O que faz**: Retorna o ancestral mais próximo que corresponde a um seletor CSS.
- **Tradução**: "Mais próximo".
- **Quando usar**: Quando você precisa acessar um elemento pai específico de um elemento atual.
- **Exemplo no código**:
  ```javascript
  let trilhaSelecionada = input.closest('.icons').querySelector('span').textContent.trim();
## **10`checked`**
- **O que faz**: Verifica se uma caixa de seleção (checkbox) ou botão de rádio (radio) está marcado.
- **Tradução**: "Marcado".
- **Quando usar**: Quando você precisa verificar o estado de um checkbox ou radio.
- **Exemplo no código**:
  ```javascript
  if (input.checked) {
      console.log(`Usuario clicou em: ${trilhaSelecionada}`);
  }

