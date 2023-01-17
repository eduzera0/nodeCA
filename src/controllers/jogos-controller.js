import { ObterJogos } from "../use-case/obterJogos.js";

export class JogosController{
	async handle(req, res){
		const response = await new ObterJogos().ConsultJogos();
		return res.json(response)
	}
}
