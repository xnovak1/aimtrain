import { createGame } from "./create"
import { readOneGame, readManyGame } from "./read"
import { updateGame } from "./update"
import { deleteGame } from "./delete"

export default {
  create: createGame,
  readOne: readOneGame,
  readMany: readManyGame,
  update: updateGame,
  delete: deleteGame
}