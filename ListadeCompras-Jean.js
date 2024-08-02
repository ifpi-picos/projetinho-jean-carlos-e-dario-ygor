let lista = []
let selecionar = 0
let resultado = 0
function adicionar() {
    const nome = prompt("Digite o nome do produto: ")
    const quantidade = Number(prompt("Digite a quantidade de produtos: "))
    const categoria = prompt("Digite a categoria do produto: ")
    const produt = {
        nome: `${nome}`,
        quantidade: `${quantidade}`,
        categoria: `${categoria}`,
    }
    lista.push(produt)
    selecionar = 0
}

function remover() {
    const produtoRemover = prompt("Digite o nome do produto que deseja remover: ")
    const resultado = lista.findIndex(list => {
        list.nome == produtoRemover
    })
    lista.splice(resultado,1)
console.log("\n                 Item REMOVIDO!!!!" )
}

function atualizar() {
    
    function procurar(listaProcura) {
        const nomeProcura = prompt("\n\nDigite qual produto você deseja alterar: ").trim()
        const retorno = listaProcura.findIndex(list => { list.nome == nomeProcura})
        console.log(retorno);
        
        return retorno
        // console.log(retorno)
    }
   
    console.log(" \n$$MENU$$\n\n1: Alterar nome\n2: Alterar quantidade\n3: Alterar categoria\n")
    const alterar = Number(prompt("\n\nDigite sua escolha: "))
    procurar(lista)

    if (alterar == 1) {
        
        const novoNome = prompt("\n\nDigite o novo nome do produto: ")
        lista[resultado].nome = novoNome
        selecionar = 0


    } else if (alterar == 2) {
   
        const novaQuantidade = Number(prompt("Digite a nova quantidade: "))
        lista[resultado].quantidade = novaQuantidade
        selecionar = 0


    } else if (alterar == 3) {
       
        const novaCategoria = Number(prompt("Digite a nova categoria: "))
        lista[resultado].categoria = novaCategoria
        selecionar = 0

        
    } else {
        console.log("Escolha Inválida!!!!!!")
        selecionar = 4
    }


}

function ver() {
    console.log(lista)
}

while (selecionar == 0) {
    console.log("                   #MENU# \n\n1: Adicionar produto\n2: Remover produto\n3: Atualizar produto\n4: Ver produto\n5: Encerrar")
    const escolha = Number(prompt("\nDigite sua escolha: "))
    console.log("\n")
    selecionar = escolha
    if (selecionar == 1) {
        adicionar()
        selecionar = 0
    } else if (selecionar == 2) {
        remover()
        selecionar = 0
    } else if (selecionar == 3) {
        atualizar()
        selecionar = 0
    } else if (selecionar == 4) {
        ver()
        selecionar = 0
    } else if (selecionar == 5) {
        selecionar = 100
        break
    } else {
        console.log("\n                 Escolha inválida!!\n")
        selecionar = 0
    }
}
        
    
