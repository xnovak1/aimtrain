import { createGame,createGames } from "./create"
import { readOneGame, readManyGame } from "./read"
import { updateGame } from "./update"
import { deleteGame } from "./delete"

export default {
  create: createGame,
  createMany: createGames,
  readOne: readOneGame,
  readMany: readManyGame,
  update: updateGame,
  delete: deleteGame
}