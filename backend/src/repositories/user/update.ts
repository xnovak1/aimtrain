import { db } from "../../db/database"
import { User, UserUpdate, NewUser } from "../../db/types"

export async function updateUser(id: number, data: UserUpdate) {
  return await db.updateTable("users")
    .set(data)
    .where("id", "=", id)
    .execute()
}