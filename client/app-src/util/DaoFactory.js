import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao.js';
import { ConnectionFactory } from './ConnectionFactory.js';

export function getNegociacaoDao() {

  return ConnectionFactory
    .getConnection()
    .then(conn => new NegociacaoDao(conn));
}