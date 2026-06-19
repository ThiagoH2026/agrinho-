// Função para controlar a alternância de abas de conteúdo informativo
function openTab(event, tabId) {
    // Esconde todos os conteúdos das abas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove a classe 'active' de todos os botões
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Mostra o conteúdo da aba atual e adiciona a classe 'active' ao botão clicado
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}
