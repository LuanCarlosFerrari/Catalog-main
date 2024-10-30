function calcularDesconto(precoOriginal, porcentagemDesconto) {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
}

document.querySelectorAll('.produtos__item').forEach(item => {
    const precoOriginalElement = item.querySelector('.preco-original');
    const precoDescontoElement = item.querySelector('.preco-desconto');
    const descontoElement = item.querySelector('.desconto');

    const precoOriginal = parseFloat(precoOriginalElement.textContent.replace('R$', '').replace(',', '.'));
    const porcentagemDesconto = parseFloat(descontoElement.textContent.replace('-', '').replace('%', ''));

    const precoComDesconto = calcularDesconto(precoOriginal, porcentagemDesconto);

    precoDescontoElement.textContent = `R$ ${precoComDesconto.toFixed(2).replace('.', ',')}`;

    if (porcentagemDesconto > 0) {
        const precoComDesconto = calcularDesconto(precoOriginal, porcentagemDesconto);
        precoDescontoElement.textContent = `R$ ${precoComDesconto.toFixed(2).replace('.', ',')}`;
    } else {
        precoDescontoElement.textContent = '';
    }
});
