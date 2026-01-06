function adicionar(produto) {
    const lista = document.getElementById("lista");
    const item = document.createElement("li");
    item.textContent = produto;
    lista.appendChild(item);
}
