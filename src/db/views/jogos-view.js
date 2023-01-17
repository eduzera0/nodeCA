import DbJogos from "../../models/Jogo.js"

export class JogoView {
	async findAll(){ 
		return DbJogos.find({})
	}

	async findById(idM){
		return DbJogos.findById(idM)
	}

	async createJogo(jogo){
		return DbJogos.create(jogo)
	}

	async editJogo(id, jogo){
		return DbJogos.findOneAndUpdate(id, jogo)
	}

	async deleteJogo(id){
		return DbJogos.findByIdAndDelete(id)
	}
}

