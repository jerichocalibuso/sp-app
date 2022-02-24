// app/services/auth.server.ts
import { Role, User } from '@prisma/client'
import { Authenticator } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { FormStrategy } from 'remix-auth-form'
import invariant from 'tiny-invariant'
import bcrypt from 'bcryptjs'
import { db } from '~/utils/db.server'

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage)

authenticator.use(
  new FormStrategy(async ({ form, context }) => {
    // Here you can use `form` to access and input values from the form.
    // and also use `context` to access more things from the server
    const username = form.get('username')
    const password = form.get('password')

    // You can validate the inputs however you want
    invariant(typeof username === 'string', 'username must be a string')
    invariant(username.length > 0, 'username must not be empty')

    invariant(typeof password === 'string', 'password must be a string')
    invariant(password.length > 0, 'password must not be empty')

    // And if you have a password you should hash it
    const hashedPassword = await bcrypt.hash(password, 10)

    // And finally, you can find, or create, the user
    const user = await db.user.upsert({
      where: {
        username,
      },
      update: {},
      create: {
        username,
        password: hashedPassword,
        role: Role.CUSTOMER,
      },
    })

    // And return the user as the Authenticator expects it
    return user
  }),
  'user-pass'
)
