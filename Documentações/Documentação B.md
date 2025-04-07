```markdown
# Guia Rápido de Bootstrap 5

## 1. Importação do Bootstrap

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```
Isso importa a biblioteca Bootstrap, trazendo estilos predefinidos para botões, inputs, espaçamentos, entre outros.

---

## 2. Sistema de Grid (Layout Responsivo)

O Bootstrap usa um sistema de grid baseado em 12 colunas.

### Exemplo de uso:

```html
<div class="container">
    <div class="row g-3">
        <div class="col-6">
```

### Explicação:
- **container**: Define um container centralizado e responsivo.
- **row**: Cria uma linha dentro do container.
- **col-6**: Divide a linha em duas colunas de igual largura (50% cada).

---

## 3. Formulários e Campos de Entrada

O Bootstrap oferece classes para estilizar inputs.

### Exemplo de Input:

```html
<input type="text" class="form-control bg-secondary bg-opacity-25 form-control-lg w-100">
```

### Explicação:
- **form-control**: Estiliza o input com bordas arredondadas e preenchimento adequado.
- **bg-secondary bg-opacity-25**: Define um fundo cinza com transparência.
- **form-control-lg**: Aumenta o tamanho do input.
- **w-100**: Faz o input ocupar 100% da largura disponível.

---

## 4. Botões Personalizados

### Exemplo de Botão:

```html
<button id="inscricao" class="btn btn-orange">Fazer inscrição</button>
```

### Explicação:
- **btn**: Aplica estilos padrão de botão.
- **btn-orange**: Classe personalizada (provavelmente definida no seu styles.css).

---

## 5. Componentes de Seleção (Select e Checkbox)

### Exemplo de Select:

```html
<select class="form-control bg-secondary bg-opacity-25 form-control-lg w-100">
    <option value="">Selecione...</option>
</select>
```

### Exemplo de Checkbox:

```html
<input type="checkbox" class="form-check-input">
```

### Explicação:
- **form-control**: Aplica estilos padrão ao select.
- **bg-secondary bg-opacity-25**: Define um fundo mais discreto.
- **form-check-input**: Estiliza o checkbox conforme o padrão do Bootstrap.

---

## 6. Espaçamentos e Margens

O Bootstrap facilita o controle de margens e espaçamentos com classes como:

```html
<div class="mb-3"></div>  <!-- Margem inferior de 3 -->
<div class="ms-auto"></div>  <!-- Margem automática à esquerda -->
<div class="d-flex justify-content-end"></div> <!-- Alinhamento flexbox -->
```

### Explicação:
- **mb-3**: Margem inferior.
- **ms-auto**: Margem automática à esquerda.
- **d-flex justify-content-end**: Usa Flexbox para alinhar elementos à direita.

---

## 7. Posicionamento Relativo e Absoluto

### Exemplo de Posicionamento:

```html
<div class="position-relative">
    <span class="position-absolute end-0 top-50 translate-middle-y">
        <img src="./src/assets/icons/arrow-down.svg" alt="Seta">
    </span>
</div>
```

### Explicação:
- **position-relative**: Define um contêiner como referência de posição.
- **position-absolute**: Posiciona o elemento (seta) em relação ao contêiner pai.
- **end-0 top-50 translate-middle-y**: Move o elemento para o canto direito e centraliza verticalmente.

---

## 8. Importação do JavaScript do Bootstrap

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

Isso garante que os componentes interativos do Bootstrap, como modais e dropdowns, funcionem corretamente.

---

