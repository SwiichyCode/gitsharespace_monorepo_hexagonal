import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const user = await ctx.auth.authenticate()

    if (user.role_id !== 2) {
      return ctx.response.status(401).send('You are not authorized to access this resource')
    }

    await next()
  }
}
