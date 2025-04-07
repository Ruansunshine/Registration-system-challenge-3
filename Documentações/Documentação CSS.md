# **Documentação Style CSS**

## **body**
- **Descrição**: Define o estilo para o elemento `body` da página.

### **Propriedades**:
- **font-family**: `Poppins`;: Define a fonte do texto como Poppins.
- **background-color**: `#E7E5E4`;: Define a cor de fundo do corpo da página.
- **width**: `100%`;: Define a largura do corpo como 100% da largura da janela.
- **display**: `flex`;: Usa o modelo de layout Flexbox para organizar os elementos filhos.
## **.main-principal**
- **Descrição**: Define o estilo para a classe `.main-principal`.

### **Propriedades**:
- **background-color**: `#FFFFFF`;: Define a cor de fundo como branco.
- **display**: `flex`;: Usa o modelo de layout Flexbox.
- **position**: `relative`;: Define a posição como relativa.
- **overflow**: `hidden`;: Esconde qualquer conteúdo que ultrapasse os limites do contêiner.
- **height**: `100vh`;: Define a altura como 100% da altura da janela (viewport height).
## **.section-principal**
- **Descrição**: Define o estilo para a classe `.section-principal`.

### **Propriedades**:
- **overflow-y**: `auto`;: Permite rolagem vertical se o conteúdo for maior que o contêiner.
- **overflow-x**: `hidden`;: Esconde a rolagem horizontal.
- **padding**: `100px`;: Adiciona um espaçamento interno de 100px em todos os lados.
## **.h1 e .h3**
- **Descrição**: Define estilos para elementos com as classes `.h1` e `.h3`.

### **Propriedades**:
- **font-size**: Define o tamanho da fonte.
- **line-height**: Define a altura da linha.
- **font-weight**: `bold`;: Define o peso da fonte como negrito.
- ## **.border-dashed**
- **Descrição**: Define uma borda tracejada.

### **Propriedades**:
- **border-style**: `dashed !important`;: Define o estilo da borda como tracejado, com prioridade sobre outros estilos.

---

## **.file-upload-area**
- **Descrição**: Define o estilo para a área de upload de arquivos.

### **Propriedades**:
- **cursor**: `pointer`;: Muda o cursor para um ponteiro, indicando que a área é clicável.

---

## **.image-ilustracao**
- **Descrição**: Define o estilo para a área de ilustração.

### **Propriedades**:
- **background-color**: `#2135a6`;: Define a cor de fundo.
- **display**: `flex`;: Usa o modelo de layout Flexbox.
- **justify-content**: `center`;: Centraliza os itens horizontalmente.
- **width**: `900px`;: Define a largura.
- **flex-direction**: `column`;: Organiza os itens em coluna.
- **align-items**: `center`;: Centraliza os itens verticalmente.
## **.ilustracao e .logo-trilhas**
- **Descrição**: Define o estilo para as imagens de ilustração e logo.

### **Propriedades**:
- **width e height**: Define a largura e altura das imagens.

---

## **Estilos para Inputs de Rádio**
- **Descrição**: Define estilos para inputs de tipo rádio quando estão selecionados.

### **Propriedades**:
- **background-color**: `#ff6600`;: Muda a cor de fundo para laranja.
- **border-color**: `#ff6600`;: Muda a cor da borda para laranja.
- **box-shadow**: Adiciona uma sombra para destacar o elemento.

---

## **.btn-outline-orange e .btn-orange**
- **Descrição**: Define estilos para botões com borda laranja e fundo laranja.

### **Propriedades**:
- **border**: Define a borda do botão.
- **color**: Define a cor do texto.
- **background-color**: Define a cor de fundo.
- **border-radius**: Arredonda os cantos do botão.
- **padding**: Adiciona espaçamento interno.
## **Media Queries**
- **Descrição**: Define estilos responsivos para telas com largura máxima de 450px.

### **Propriedades**:
- **display**: `none`;: Esconde a área de ilustração.
- **padding**: `50px`;: Reduz o espaçamento interno da seção principal.
- 


## **Integração com Bootstrap**

- **Botões Personalizados**: `.btn-outline-orange` e `.btn-orange` adicionam estilos de botão que não estão presentes no Bootstrap padrão.
- **Estilos de Inputs de Rádio**: Personaliza a aparência dos inputs de rádio, algo que o Bootstrap não faz por padrão.
- **Layout Flexbox**: Utiliza Flexbox para organizar os elementos, que é uma prática comum no Bootstrap, mas com configurações personalizadas.

