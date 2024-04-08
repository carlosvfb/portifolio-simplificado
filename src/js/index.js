const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativo = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativo.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
