var dados = [ 
    {nome: "Bicicleta Infantil"}, 
    {nome: "Bicicleta Teen"}, 
    {nome: "Bicicleta Adulta"}
];


/*
    Aqui abaixo são os códigos para gerar os cards, precisa alterar 
    o nome do produto, preço e imagem de acordo com o DB
*/

for (var i = 0 ; i < dados.length ; i++ ) {


var conteudo = 
        `<div class="card">
        <div class="imagem_produto">
            <img src="_img/bicicleta.jpg" class="imagem_produto"/>
        </div>
        <div class="nome_produto">
            <p class="nome_produto">${dados[i].nome}</p>
        </div>
        <div class="preco_produto">
            <p class="preco_produto">R$500,00</p>
        </div>
        <div class="adicionar_carrinho">
            <button type="button" class="adicionar_carrinho">Adicionar ao Carrinho</button>
        </div>
    </div>`;

document.getElementById('aplicativos').innerHTML += conteudo;
}