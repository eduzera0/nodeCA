import { JogoView } from "../db/views/jogos-view.js";

export class EditaJogo{
    async EditJogo(id, jogo){
        const response = await new JogoView().editJogo(id,jogo)
        return response
    }
}