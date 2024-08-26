import { db } from "../../db/database"
import { Game, GameUpdate, NewGame } from "../../db/types"

export async function updateGame(id: number, data: GameUpdate) {
  return await db.updateTable("games")
    .set(data)
    .where("id", "=", id)
    .execute()
}