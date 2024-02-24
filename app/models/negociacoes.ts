import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private Negociacoes: Array<Negociacao> = [];

    adiciona(negociacao:Negociacao){
        this.Negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.Negociacoes;
    }
}