
const funcao = async () => {

    const nome = document.getElementById('txtNome').value
    const email = document.getElementById('txtEmail').value
    const senha = document.getElementById('pwdSenha').value
    
    // let url = 'http://10.107.144.24:8080/candidato/listar'
    
    //         const resposta = await fetch(url, {method: 'GET', headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',      
    //         })}).then(data => data.json()).then(console.log())
    //         console.log(resposta.content)
    
    let url = 'http://10.107.144.24:8080/candidato/cadastrar'
    
        if(validacao(nome, email, senha)) {
            console.log(fetch(url, {
                method: 'POST', 
                headers: new Headers({
                'Content-Type': 'application/json',
                'Accept':'application/json',      
            }), body:JSON.stringify({email ,nome,senha, genero: 'PREFIRO_NAO_INFORMAR'}),

            }).then(alert("cadastrou bro")))
        } else {
            alert("preencha os campos vazios")
        }
            
}

const validacao = (nome, email, senha) => {

    if(nome.length > 3 && nome.length <= 50) {

        return true

    } else {
        return false
    }

} 


const postCandidato =  async(candidato) => {
    const urlCadastro = 'http://10.107.144.24:8080/candidato/cadastrar'
    const options = {
        method: 'POST',
        body:candidato,
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        }
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp.data))
   

}

const getCandidato = () => {

    const urlListar = 'http://10.107.144.24:8080/candidato/listar'
    const options = {
        method: 'GET',
        mode: 'no-cors'
    }
    fetch(urlListar, options).then(resp=>console.log(resp.data))

}

document.getElementById('btnCadastro').addEventListener('click', funcao)
