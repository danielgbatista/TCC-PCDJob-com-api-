'use strict';

const validacao = ({nome, email, senha}) => {

    if(nome.length > 3 && nome.length <= 50 && email.length > 9 && email.length <= 100  && senha.length > 3 && senha.length <= 50) {
        return true

    } else {
        return false
    }

} 

const cadastrarEmpresa = async() => {
    const empresa = {
        nome: document.getElementById('txtNome').value,
        email: document.getElementById('txtEmail').value,
        senha: document.getElementById('pwdSenha').value,
        genero: "PREFIRO_NAO_INFORMAR"
    }

    if(validacao(empresa)) {
        const resposta = await postCandidato(empresa).then(data => data.json()).then(console.log())
        resposta.content.id
    } else {
        alert("preencha os campos vazios")
    }
}

document.getElementById('btnCadastro').addEventListener('click', cadastrarCandidato)


const postEmpresa =  async(empresa) => {
    const urlCadastro = 'http://10.107.144.24:8080/empresa/cadastrar'
    const options = {
        method: 'POST',
        body:JSON.stringify(empresa),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        }
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp))
   

}

const putProduto = async (empresa) => {
    const urlAtualizar = 'http://10.107.144.24:8080/empresa/atualizar/'
    const options = {
        method: 'PUT',
        body: JSON.stringify(empresa),
        headers: {
            'content-Type' : 'application/json'
        }
    }

    await fetch(`${urlAtualizar}${empresa.id}`, options)
}

const deleteProduto = async (empresa) => {
    const urldeletar = 'http://10.107.144.24:8080/empresa/deletar/'
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type' : 'application/json'
        }
    }

    await fetch(`${urldeletar}${empresa.id}`, options)
}

const getEmpresa = () => {

    const urlListar = 'http://10.107.144.24:8080/empresa/listar'
    const options = {
        method: 'GET',
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}
