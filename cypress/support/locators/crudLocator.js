class crudLocator {
    textoTitulo =  () => { return '.display-3' }
    campoImagem = () => { return '#imagem' }
    campoNome =  () => { return '#nome' }
    campoCodinome =  () => { return '#codinome' }
    botaoSalvar = () => { return '.btn' }
    botaoExcluir = () => { return ':nth-child(3) > :nth-child(5) > form > .btn' }
    linkAdicionar = () => { return ':nth-child(2) > .nav-link' }
    linkVisualizar = () => { return ':nth-child(3) > :nth-child(2) > a' }
    textoNome =  () => { return '.card-title' }
    textoCodinome =  () => { return '.display-5' }
    textoMensagem = () => { return '.alert' }
}

const locator = new crudLocator();
export default locator;