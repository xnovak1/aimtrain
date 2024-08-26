import { createUser } from "./create"
import { readOneUser, readManyUser } from "./read"
import { updateUser } from "./update"
import { deleteUser } from "./delete"

export default {
  create: createUser,
  readOne: readOneUser,
  readMany: readManyUser,
  update: updateUser,
  delete: deleteUser
}