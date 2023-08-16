document.querySelector('#qtd-paginas').addEventListener('change', atualizarPreco);
document.querySelector('#js').addEventListener('change', atualizarPreco);
document.querySelector('#layout-y').addEventListener('change', atualizarPreco);
document.querySelector('#layout-n').addEventListener('change', atualizarPreco);
document.querySelector('#prazo').addEventListener('change', () => {
    const prazo = document.querySelector('#prazo').value;
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
    atualizarPreco();
});

function atualizarPreco() {
    const qtd = document.querySelector('#qtd-paginas').value;
    const js = document.querySelector('#js').checked;
    const withLayout = document.querySelector('#layout-y').checked;
    const prazo = document.querySelector('#prazo').value;
    let preco = qtd * 100;

    if (js) preco *= 1.1;
    if (withLayout) preco += 500;

    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia;

    document.querySelector('#preco').innerHTML = `Preço: R$ ${preco.toFixed(2)}`;
}