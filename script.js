document.addEventListener('DOMContentLoaded', () => {
    // Inicialização das variáveis de contagem
    let likes = 0;
    let dislikes = 0;

    // Seleção dos elementos do DOM
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const themeBtn = document.getElementById('themeBtn');
    const likeCount = document.getElementById('like-count');
    const dislikeCount = document.getElementById('dislike-count');

    // Função de Curtir
    likeBtn.addEventListener('click', () => {
        likes++;
        likeCount.innerText = likes;
    });

    // Função de Descurtir
    dislikeBtn.addEventListener('click', () => {
        dislikes++;
        dislikeCount.innerText = dislikes;
    });

    // Função para alternar o Tema (Claro/Escuro)
    themeBtn.addEventListener('click', () => {
        const body = document.body;
        
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            themeBtn.innerText = '🌙 Modo Escuro';
        } else {
            body.setAttribute('data-theme', 'dark');
            themeBtn.innerText = '☀️ Modo Claro';
        }
    });
});