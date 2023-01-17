import express from "express"
import { JogosController } from "../controllers/jogos-controller.js"
import { JogosControllerById } from "../controllers/jogos-cosultbyid.js"
import { JogosControllerCreate } from "../controllers/jogos-create.js"
import { JogosControllerEdit } from "../controllers/jogos-edit.js"

const router = express.Router()

router.get(`/consult`, new JogosController().handle)
router.get(`/find/:id`, new JogosControllerById().handle)
router.post(`/create`, new JogosControllerCreate().handle)
router.put(`/edit/:id`, new JogosControllerEdit().handle)

export default router
