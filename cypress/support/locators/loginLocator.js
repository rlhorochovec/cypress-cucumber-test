class loginLocator {
    campoUser =  () => { return '#login' }
    campoPassword = () => { return '#senha' }
    botaoEntrar = () => { return '.btn' }
    textoMensagem = () => { return '#erro' }
}

const locator = new loginLocator();
export default locator;