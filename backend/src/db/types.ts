import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'

export interface Database {
  users: UserTable
  games: GameTable
}

export interface UserTable {
  id: Generated<number>
  name: string
  password: string
  created_at: ColumnType<Date, Date, never>
  deleted_at: ColumnType<Date | undefined, Date | null, Date>
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>

export interface GameTable {
  id: Generated<number>
  time: number
  hits: number
  speed: number
  accuracy: number
  played_at: ColumnType<Date, Date, never>
  user_id: number
}

export type Game = Selectable<GameTable>
export type NewGame = Insertable<GameTable>
export type GameUpdate = Updateable<GameTable>