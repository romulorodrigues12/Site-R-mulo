// Seleciona o botão e o corpo do documento (body)
const btnTema = document.getElementById('btn-tema');
const body = document.body;

// Verifica se o usuário já havia escolhido um tema anteriormente
const temaSalvo = localStorage.getItem('tema');

// Se o tema salvo for o escuro, já aplica a classe no body ao carregar a página
if (temaSalvo === 'escuro') {
    body.classList.add('dark-mode');
    btnTema.textContent = '☀️ Light Mode'; // Muda o texto do botão
}

// Cria o evento de clique no botão
btnTema.addEventListener('click', () => {
    // A função toggle adiciona a classe se ela não existir, ou remove se já existir
    body.classList.toggle('dark-mode');
    
    // Verifica se a classe dark-mode está ativa no momento para salvar no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
        btnTema.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('tema', 'claro');
        btnTema.textContent = '🌙 Dark Mode';
    }
});