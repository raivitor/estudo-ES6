class ListaNegociacoes {
    
    constructor() {
        this._negociacoes = [];
    }
    
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvaziar(){
    	this._negociacoes = [];
    }

    get volumeTotal() {
       return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }
}