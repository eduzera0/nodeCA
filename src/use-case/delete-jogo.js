import { JogoView } from "../db/views/jogos-view";

export class DeletaJogo {
    async DeletaJogo(id){
        const response = await new JogoView().deleteJogo(id)
        return response
    }
}