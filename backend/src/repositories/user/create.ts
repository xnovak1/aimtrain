import { db } from "../../db/database"
import { User, UserUpdate, NewUser } from "../../db/types"

export async function createUser(user: NewUser) {
  return await db.insertInto("users")
    .values(user)
    .execute()
}

export async function createUsers(users: NewUser[]) {
  return await db.insertInto("users")
    .values(users)
    .execute()
}