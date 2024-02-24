import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private Negociacoes: Negociacao[] = [];

    adiciona(negociacao:Negociacao){
        this.Negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.Negociacoes;
    }
}