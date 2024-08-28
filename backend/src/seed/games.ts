import { User, Game, NewGame, GameUpdate } from "../db/types"
import { faker } from "@faker-js/faker"
import users from "./users"

const USER_GAME_COUNT = 10;

faker.seed(123);

function createRandomGame(user: User): NewGame {
  return {
    time: faker.number.float(60),
    hits: faker.number.int(90),
    speed: faker.number.float(4),
    accuracy: faker.number.float({
      max: 100,
      fractionDigits: 2
    }),
    played_at: faker.date.soon({
      days: 10,
      refDate: user.created_at
    }),
    user_id: 0
  }
}

function createGames(): Game[] {
  let games = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < USER_GAME_COUNT; j++) {
      games.push(createRandomGame(users[i]));
    }
  }

  return games;
}

const games: Game[] = createGames();
export default games;