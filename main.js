console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Função para criar um texto animado com estilo e interação
function createAnimatedText() {
    // Cria um novo elemento <h1> para o título
    const h1 = document.createElement('h1');
    h1.innerText = "Clique para mudar o texto!";
    h1.style.fontSize = '40px';
    h1.style.textAlign = 'center';
    h1.style.marginTop = '100px';
    h1.style.transition = 'all 0.3s ease'; // Animação suave para alterações de estilo

    // Estilos iniciais para o h1
    h1.style.color = 'purple';
    h1.style.cursor = 'pointer';

    // Adiciona um efeito de animação de mudança de cor ao clicar no texto
    h1.addEventListener('click', () => {
        h1.style.color = h1.style.color === 'purple' ? 'orange' : 'purple'; // Alterna entre roxo e laranja
        h1.innerText = h1.style.color === 'purple' ? "Texto restaurado!" : "Texto alterado com sucesso!";
    });

    // Adiciona o h1 ao corpo do documento
    document.body.appendChild(h1);
}

// Função para criar o botão
function createButton() {
    // Cria um botão
    const button = document.createElement('button');
    button.innerText = "Mudar título";
    button.style.padding = '10px 20px';
    button.style.fontSize = '18px';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '30px';
    button.style.display = 'block';
    button.style.marginLeft = 'auto';
    button.style.marginRight = 'auto';

    // Estilo do botão ao passar o mouse
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'darkgreen';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'green';
    });

    // Função para mudar o texto do título ao clicar no botão
    button.addEventListener('click', () => {
        const h1 = document.querySelector('h1');
        if (h1) {
            h1.innerText = "O título foi alterado por um clique no botão!";
            h1.style.color = 'teal';
        }
    });

    // Adiciona o botão ao corpo do documento
    document.body.appendChild(button);
}

// Função para animar o fundo da página
function animateBackground() {
    let colors = ['#ff6347', '#4682b4', '#32cd32', '#ff1493', '#8a2be2', '#ff4500'];
    let i = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 2000); // Altera a cor de fundo a cada 2 segundos
}

// Inicializa o conteúdo da página
function initializePage() {
    animateBackground();  // Anima o fundo
    createAnimatedText();  // Cria o texto animado
    createButton();        // Cria o botão
}

// Executa a função de inicialização quando o conteúdo da página estiver carregado
window.onload = initializePage;
