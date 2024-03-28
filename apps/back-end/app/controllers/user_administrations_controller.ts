import User from '#models/user'
import { deleteUserValidator } from '#validators/user_administrations'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserAdministrationsController {
  async delete({ request, response }: HttpContext) {
    const { id } = await request.validateUsing(deleteUserValidator)

    const user = await User.findOrFail(id)

    await user.delete()

    return response.ok({
      message: 'User deleted successfully',
    })
  }
}
