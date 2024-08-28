import { db } from "../../db/database"
import { Game, GameUpdate, NewGame } from "../../db/types"

export async function createGame(game: NewGame) {
  return await db.insertInto("games")
    .values(game)
    .execute()
}

export async function createGames(games: NewGame[]) {
  return await db.insertInto("games")
    .values(games)
    .execute()
}