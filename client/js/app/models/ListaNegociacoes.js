class ListaNegociacoes {
    
    constructor(observer) {
        this._negociacoes = [];
        this._observer = observer;
    }
    
    adicionarNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
        this._observer(this);
    }
    
    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvaziar(){
    	this._negociacoes = [];
        this._observer(this);
    }
}