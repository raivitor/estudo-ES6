class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adicionar', 'esvaziar');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');  
    }
    
    adicionar(event) {
        event.preventDefault();
        this._listaNegociacoes.adicionar(this._criarNegociacao());
        this._mensagem.text = "Negociação adicionada com sucesso";
        this._limparFormulario();   
    }

    apagar(){
        this._listaNegociacoes.esvaziar();
        this._mensagem.texto = "Negociações apagadas com sucesso";
    }
    
    _criarNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value.trim()),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }

    importaNegociacoes(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    console.log('Obtendo as negociações do servidor.')
                    JSON.parse(xhr.responseText)
                        .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))
                        .forEach(negociacao => this._listaNegociacoes.adicionar(negociacao))

                        this._mensagem.texto = 'Negociações importadas com sucesso.';
                } else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível obter as negociações.';
                }
            }
        }
        xhr.send();
    }
}