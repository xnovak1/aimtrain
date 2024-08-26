import { db } from "../../db/database"
import { User, UserUpdate, NewUser } from "../../db/types"

export async function readOneUser(id: number) {
  return await db.selectFrom("users")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst()
}

export async function readManyUser(data: Partial<User>) {
  let query = db.selectFrom("users")

  if (data.id) {
    query = query.where("id", "=", data.id)
  }

  if (data.name) {
    query = query.where("name", "=", data.name)
  }

  if (data.created_at) {
    query = query.where("created_at", "=", data.created_at)
  }

  if (data.password) {
    query = query.where("password", "=", data.password)
  }

  if (data.deleted_at) {
    query = query.where("deleted_at", "=", data.deleted_at)
  }

  return await query.selectAll().execute()
}