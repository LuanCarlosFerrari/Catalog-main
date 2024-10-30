function calcularDesconto(precoOriginal, porcentagemDesconto) {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
}

const precoOriginal = 2596.99;
const porcentagemDesconto = 20;
const precoComDesconto = calcularDesconto(precoOriginal, porcentagemDesconto);

document.querySelector('.preco-original').textContent = `R$ ${precoOriginal.toFixed(2)}`;
document.querySelector('.preco-desconto').textContent = `R$ ${precoComDesconto.toFixed(2)}`;
