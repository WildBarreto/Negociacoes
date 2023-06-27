System.register(['../domain/negociacao/NegociacaoDao.js', './ConnectionFactory.js'], function (_export, _context) {
  "use strict";

  var NegociacaoDao, ConnectionFactory;
  function getNegociacaoDao() {

    return ConnectionFactory.getConnection().then(conn => new NegociacaoDao(conn));
  }

  _export('getNegociacaoDao', getNegociacaoDao);

  return {
    setters: [function (_domainNegociacaoNegociacaoDaoJs) {
      NegociacaoDao = _domainNegociacaoNegociacaoDaoJs.NegociacaoDao;
    }, function (_ConnectionFactoryJs) {
      ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=DaoFactory.js.map