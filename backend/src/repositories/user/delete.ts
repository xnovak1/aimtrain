import { db } from "../../db/database"
import { User, UserUpdate, NewUser } from "../../db/types"

export async function deleteUser(id: number) {
  return await db.updateTable("users")
    .set({
      deleted_at: new Date()
    })
    .where("id", "=", id)
    .execute()
}