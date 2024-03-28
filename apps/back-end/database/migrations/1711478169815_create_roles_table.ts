import { BaseSchema } from '@adonisjs/lucid/schema'
import Roles from '#enums/roles'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.defer(async (db) => {
      await db.table(this.tableName).multiInsert([
        { id: Roles.USER, name: 'User' },
        { id: Roles.ADMIN, name: 'Admin' },
      ])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
