const produtosMusicais = [
    {
      nome: "Guitarra Elétrica",
      descrição: "Uma guitarra elétrica de alta qualidade para músicos experientes.",
      preço: 799.99,
    },
    {
      nome: "Teclado Digital",
      descrição: "Um teclado digital versátil com muitos recursos para iniciantes e profissionais.",
      preço: 499.99,
    },
    {
      nome: "Bateria Acústica",
      descrição: "Uma bateria acústica completa para bateristas apaixonados por ritmo.",
      preço: 1299.99,
    }
  ];
  
  const produtosContainer = document.getElementById("produtos-container");

  for (let i = 0; i < produtosMusicais.length; i++) {
    const produto = produtosMusicais[i];
  
    const card = document.createElement("div");
    card.classList.add("card");
  
    const nomeProduto = document.createElement("h2");
    nomeProduto.textContent = produto.nome;
  
    const descricaoProduto = document.createElement("p");
    descricaoProduto.textContent = produto.descrição;
  
    const precoProduto = document.createElement("p");
    precoProduto.textContent = `Preço: R$ ${produto.preço.toFixed(2)}`;
  
    card.appendChild(nomeProduto);
    card.appendChild(descricaoProduto);
    card.appendChild(precoProduto);
  
    produtosContainer.appendChild(card);
  }
  
