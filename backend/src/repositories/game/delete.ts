import { db } from "../../db/database"
import { Game, GameUpdate, NewGame } from "../../db/types"

export async function deleteGame(id: number) {
  return await db.deleteFrom("games")
    .where("id", "=", id)
    .execute()
}