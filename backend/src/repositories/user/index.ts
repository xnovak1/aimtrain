import { createUser, createUsers } from "./create"
import { readOneUser, readManyUser } from "./read"
import { updateUser } from "./update"
import { deleteUser } from "./delete"

export default {
  create: createUser,
  createMany: createUsers,
  readOne: readOneUser,
  readMany: readManyUser,
  update: updateUser,
  delete: deleteUser
}