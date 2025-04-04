let produtos = []
 
function addProduto(x){
    produtos.push(x)
}
 
function listProduto(){
    console.log('====== Lista de Produto ====')
    console.log(produtos)
}
 // Adicionando produto
addProduto("Arroz")
addProduto("Feijao")
addProduto("Queijo")
listProduto()
 
function removeProd(x,y){
    produtos.splice(x,y)
}
removeProd(2,1)
listProduto()
 