import { ObterJogoById } from "../use-case/obter-jogosbyid.js";

export class JogosControllerById {
    async handle(req, res){
        const id = req.params.id
        const jogo = await new ObterJogoById().ConsultJogoById(id);
        return res.json(jogo)
    }
}