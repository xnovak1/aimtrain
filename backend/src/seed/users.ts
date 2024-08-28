import { User, NewUser, UserUpdate } from "../db/types"
import { faker } from "@faker-js/faker"

const ACTIVE_USERS = 10;
const DELETED_USERS = 5;

faker.seed(123);

function createRandomUser(isDeleted: boolean): NewUser {
  return {
    name: faker.internet.userName(),
    password: faker.internet.password(),
    created_at: faker.date.past(),
    deleted_at: isDeleted ? faker.date.recent() : null
  }
}

function createUsers(): User[] {
  let users = [];

  for (let i = 0; i < ACTIVE_USERS; i++) {
    users.push(createRandomUser(false));
  }

  for (let i = 0; i < DELETED_USERS; i++) {
    users.push(createRandomUser(true));
  }

  return users;
}

const users: User[] = createUsers();
export default users;