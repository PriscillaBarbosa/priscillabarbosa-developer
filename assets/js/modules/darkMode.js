export function inicializarDarkMode() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const rootElement = document.documentElement;

    function applyTheme(theme) {
        rootElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    // Carrega o tema salvo (ou 'light' como padrão) ao iniciar a página.
    applyTheme(localStorage.getItem('theme') || 'light');

    // Adiciona o evento de clique ao botão.
    toggleButton.addEventListener('click', () => {
        const newTheme = rootElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
};