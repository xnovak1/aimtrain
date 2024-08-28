import repository from "../repositories"
import { db } from "../db/database"
import users from "./users"
import games from "./games"

async function dropAllTables() {
  await db.schema.dropTable("users").ifExists().execute();
  console.log("Dropped table: users");

  await db.schema.dropTable("games").ifExists().execute();
  console.log("Dropped table: games");
}

async function createTables() {
  await db.schema
    .createTable("users")
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('password', 'varchar', col => col.notNull())
    .addColumn('created_at', 'timestamp', col => col.notNull())
    .addColumn('deleted_at', 'timestamp')
    .execute()

  console.log("Created table: users");

  await db.schema
    .createTable("games")
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('time', 'real', col => col.notNull())
    .addColumn('hits', 'integer', col => col.notNull())
    .addColumn('speed', 'real', col => col.notNull())
    .addColumn('accuracy', 'real', col => col.notNull())
    .addColumn('played_at', 'timestamp', col => col.notNull())
    .addColumn('user_id', 'integer', (col) =>
      col.references('users.id').onDelete('cascade')
    )
    .execute()

    console.log("Created table: games");
}

async function seedUsers() {
  await repository.user.createMany(users);
}

async function seedGames() {
  await repository.game.createMany(games);
}

async function seed() {
  dropAllTables();
  createTables();

  console.log("Seeding started...")

  seedUsers();
  seedGames();

  console.log("Seeding complete.")
}

seed(); 