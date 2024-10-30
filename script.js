function calcularDesconto(precoOriginal, porcentagemDesconto) {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
}

document.querySelectorAll('.produtos__item').forEach(item => {
    const precoOriginalElement = item.querySelector('.preco-original');
    const precoDescontoElement = item.querySelector('.preco-desconto');
    const descontoElement = item.querySelector('.desconto');
    const badgeElement = item.querySelector('.badge');

    const precoOriginal = parseFloat(precoOriginalElement.textContent.replace('R$', '').replace(',', '.'));
    const porcentagemDesconto = parseFloat(descontoElement.textContent.replace('-', '').replace('%', ''));

    if (porcentagemDesconto > 0) {
        const precoComDesconto = calcularDesconto(precoOriginal, porcentagemDesconto);
        precoDescontoElement.textContent = `R$ ${precoComDesconto.toFixed(2).replace('.', ',')}`;
        precoOriginalElement.textContent = `R$ ${precoOriginal.toFixed(2).replace('.', ',')}`;
        descontoElement.textContent = `${porcentagemDesconto}%`;
        badgeElement.textContent = `-${porcentagemDesconto}%`;
        badgeElement.style.display = 'block'; // Exibe o badge
    } else {
        precoDescontoElement.textContent = `R$ ${precoOriginal.toFixed(2).replace('.', ',')}`;
        precoOriginalElement.textContent = '';
        descontoElement.textContent = '';
        badgeElement.style.display = 'none'; // Oculta o badge
    }
});
