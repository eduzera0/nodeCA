import { JogoView } from "../db/views/jogos-view.js";

export class ObterJogoById {
    async ConsultJogoById(id){
        const response = await new JogoView().findById(id)
        return response
    }
}