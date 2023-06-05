class NegociacaoController {

  constructor() {
    //Cria um atalho para a instrução document.queryselector
    const $ = document.querySelector.bind(document)
    //Buscando os elementos
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoes = new Negociacoes();
    this._negociacoesView = new NegociacoesView('#negociacoes');
    //	recebe	inicialmente	o	modelo	que	encapsula	uma	lista	vazia
    this._negociacoesView.update(this._negociacoes);
    //Instanciando o modelo
    this._mensagem = new Mensagem()

    this._mensagemView = new MensagemView('#mensagemView');
    this._mensagemView.update(this._mensagem);

  }

  adiciona(event) {
    //Cancelando submisão do formulário
    event.preventDefault()
    //Instancia de negociação
    this._negociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação	adicionada	com	sucesso';
    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();

  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0
    this._inputData.focus();
  }
  _criaNegociacao() {
    //	retorna	uma	instância	de	negociação
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }
}