const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativo = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    alternarTextoBotao();
});

function mostrarMaisProjetos() {
    projetosInativo.forEach(projetosInativo => {
        if(!(projetosInativo.classList.contains('ativo'))) {
            projetosInativo.classList.add('ativo');
        } else {
            projetosInativo.classList.remove('ativo');
        }
    });
}

function alternarTextoBotao() {
    if (botaoMostrarProjetos.innerText === 'Mostrar mais') {
        botaoMostrarProjetos.innerText = 'Mostrar menos';
    } else {
        botaoMostrarProjetos.innerText = 'Mostrar mais';
    }
}