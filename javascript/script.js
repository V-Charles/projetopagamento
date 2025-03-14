const valorInput = document.getElementById('valor');
const btnInformar = document.getElementById('btnInformar');
const painelPix = documento.getElementById('painelPix');
const painelCartao = document.getElementById('painelCartao');
const totalPix = document.getElementById('totalPix');
const totalCartao = document.getElementById('totalCartao');
const btnPagar = document.getElementById('btnPagar');
const mensagemSucesso = document.getElementById('mensagemSucesso');
const numeroCartaoInput = document.getElementById('numeroCartao');
const iconeCartao = documento.getElementById('iconeCartao');
const erroCartao = document.getElementById('erroCartao');
const parcelaSelect = document.getElementById('parcelas');

let valorInicial = 0;

function limpaPainel(){
    painelPix.classList.add('hidden');
    painelCartao.classList.add('hidden');
    mensagemSucesso.classList.add('hidden');
}

btnInformar.addEventListener('click', function() {
    limparPainel();
    erroCartao.textContent = '';
    iconeCartao.textContent = '';

    if (!valorInput.value) {
        alert('O campo valor deve ser preenchido.')
        return;
    }

    valorInicial = parseFloat(valorInput.value);

    const pagamentoselecionado = document.querySelector('input[name="pagamento"]:checked').value;

    if (pagementoSelecionado == 'pix') {
        const total = (valorInicial * 0.9).toFixed(2);
        totalPix.textContent = total;
        painelPix.classList.remove('hidden');
    } else if (pagamentoselecionado == 'cartao') {
        painelCartao.classList.remove('hidden');
        calcularTotalCartao();
    }
})