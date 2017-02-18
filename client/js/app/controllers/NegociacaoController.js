class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this.negociacao = new ListaNegociacoes();
    }
    
    adiciona(event) {
        
        event.preventDefault();
      
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2) //só subtrai no indice 1
        );
            
        negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value  
        );
        
        console.log(negociacao);
        limparCampos();
    }
    
    limparCampos(){
        this._inputData = ''
        this._inputQuantidade = 1;
        this._inputValor = 0.0
        this._inputData.focus();
    }
}