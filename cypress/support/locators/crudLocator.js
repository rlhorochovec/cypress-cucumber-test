class crudLocator {
    textoTitulo =  () => { return '.display-3' }
    campoID =  () => { return '#mutante_id' }
    campoNome =  () => { return '#nome' }
    campoCodinome =  () => { return '#codinome' }
    botaoSalvar = () => { return '.btn' }
    botaoSim = () => { return '.btn-danger' }
    textoNome =  () => { return '.display-5' }
    textoCodinome =  () => { return '.card-text' }
}

const locator = new crudLocator();
export default locator;