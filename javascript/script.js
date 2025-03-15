const valorInput = document.getElementById('valor');
const btnInformar = document.getElementById('btnInformar');
const painelPix = document.getElementById('painelPix');
const painelCartao = document.getElementById('painelCartao');
const totalPix = document.getElementById('totalPix');
const totalCartao = document.getElementById('totalCartao');
const btnPagar = document.getElementById('btnPagar');
const mensagemSucesso = document.getElementById('mensagemSucesso');
const numeroCartaoInput = document.getElementById('numeroCartao');
const iconeCartao = document.getElementById('iconeCartao');
const erroCartao = document.getElementById('erroCartao');
const parcelaSelect = document.getElementById('parcelas');

let valorInicial = 0;

function limpaPainel(){
    painelPix.classList.add('hidden');
    painelCartao.classList.add('hidden');
    mensagemSucesso.classList.add('hidden');
}

btnInformar.addEventListener('click', function() {
    limpaPainel();
    erroCartao.textContent = '';
    iconeCartao.textContent = '';

    if (!valorInput.value) {
        alert('O campo valor deve ser preenchido.')
        return;
    }

    valorInicial = parseFloat(valorInput.value);

    const pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked').value;

    if (pagamentoSelecionado === 'pix') {
        const total = (valorInicial * 0.9).toFixed(2);
        totalPix.textContent = total;
        painelPix.classList.remove('hidden');
    } else if (pagamentoSelecionado === 'cartao') {
        painelCartao.classList.remove('hidden');
        calcularTotalCartao();
    }
})

numeroCartaoInput.addEventListener('input', function() {
    const num = numeroCartaoInput.value;
    iconeCartao.textContent = '';
    erroCartao.textContent = '';

    if(num.startsWith('1234')) {
        iconeCartao.style.backgroundImage = "url('icons/icon_visa.png')";
    } else if(num.startsWith('4321')) {
        iconeCartao.style.backgroundImage = "url('icons/icon_mastercard.png')";
    } else if(num.length >= 4) {
        erroCartao.textContent = 'Número de cartão inválido';
    }
});

function calcularTotalCartao(){
    const parcelas = parseInt(parcelaSelect.value);
    if(!parcelas || isNaN(parcelas)) {
        totalCartao.textContent = valorInicial.toFixed(2);
        return;
    }

    let total = valorInicial;
    if(parcelas === 4) {
        total = valorInicial * 1.05;
    } else if (parcelas === 5) {
        total = valorInicial * 1.10;
    }

    totalCartao.textContent = total.toFixed(2);
}

parcelaSelect.addEventListener('change', calcularTotalCartao);

btnPagar.addEventListener('click', function() {
    limpaPainel();
    mensagemSucesso.classList.remove('hidden');
})