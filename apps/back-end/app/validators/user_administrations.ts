import vine from '@vinejs/vine'

export const deleteUserValidator = vine.compile(
  vine.object({
    id: vine.number(),
  })
)
