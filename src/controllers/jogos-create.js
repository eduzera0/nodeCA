import { CriarJogo } from "../use-case/criar-jogos.js"

export class JogosControllerCreate {
    async handle(req, res){
        const jogoBody = req.body
        const jogo = await new CriarJogo().CreateJogo(jogoBody)
        return res.json(jogo)
    }
}