import { EditaJogo } from "../use-case/edita-jogo.js"

export class JogosControllerEdit{
    async handle(req, res){
        const id = req.params.id
        const jogoBody = req.body
        const jogo = await new EditaJogo().EditJogo(id, jogoBody)
        console.log(jogo)
        return res.json(jogo)
    }
}