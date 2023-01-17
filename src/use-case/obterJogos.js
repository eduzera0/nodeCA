import { JogoView } from "../db/views/jogos-view.js";

export class ObterJogos{
    async ConsultJogos(){
        const response =  new JogoView().findAll();
        return response
    }
}