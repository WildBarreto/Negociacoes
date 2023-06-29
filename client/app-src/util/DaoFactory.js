import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao';
import { ConnectionFactory } from './ConnectionFactory';

export async function getNegociacaoDao() {

    let conn = await ConnectionFactory.getConnection();
    return new NegociacaoDao(conn);
}