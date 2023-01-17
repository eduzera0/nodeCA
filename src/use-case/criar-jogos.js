import { JogoView } from "../db/views/jogos-view.js";

export class CriarJogo{
    async CreateJogo(jogo){
        const response = await new JogoView().createJogo(jogo)
        return response
    }
}