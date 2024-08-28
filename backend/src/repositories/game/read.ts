import { db } from "../../db/database"
import { Game, GameUpdate, NewGame } from "../../db/types"

export async function readOneGame(id: number) {
  return await db.selectFrom("games")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst()
}

export async function readManyGame(data: Partial<Game>) {
  let query = db.selectFrom("games")

  if (data.id) {
    query = query.where("id", "=", data.id)
  }

  if (data.time) {
    query = query.where("time", "=", data.time)
  }

  if (data.hits) {
    query = query.where("hits", "=", data.hits)
  }

  if (data.speed) {
    query = query.where("speed", "=", data.speed)
  }

  if (data.accuracy) {
    query = query.where("accuracy", "=", data.accuracy)
  }

  if (data.played_at) {
    query = query.where("played_at", "=", data.played_at)
  }

  if (data.user_id) {
    query = query.where("user_id", "=", data.user_id)
  }

  return await query.selectAll().execute()
}