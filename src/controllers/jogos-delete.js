import { DeletaJogo } from "../use-case/delete-jogo"

export class JogoControllerDelete{
    async Handler(req, res) {
        const id = req.params.id
        const jogo = await new DeletaJogo().DeletaJogo(id)
        return res.json(jogo)
    }
}