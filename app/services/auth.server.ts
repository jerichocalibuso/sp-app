// app/services/auth.server.ts
import { Role, User } from '@prisma/client'
import { Authenticator } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { FormStrategy } from 'remix-auth-form'
import invariant from 'tiny-invariant'
import bcrypt from 'bcryptjs'
import { db } from '~/utils/db.server'
import {
  FacebookStrategy,
  GoogleStrategy,
  SocialsProvider,
} from 'remix-auth-socials'

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage, {
  throwOnError: true,
})

// LOGIN METHOD

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const username = form.get('username')
    const password = form.get('password')

    invariant(typeof username === 'string', 'username must be a string')
    invariant(typeof password === 'string', 'password must be a string')

    const user = await db.user.findUnique({ where: { username } })
    if (!user) throw new Error('Invalid credentials')

    if (!user.password) throw new Error('User does not have a password')

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new Error('Invalid credentials')
    }

    return user
  }),
  'user-pass-signin'
)

// SIGNUP METHODS
authenticator.use(
  new FormStrategy(async ({ form, context }) => {
    // Here you can use `form` to access and input values from the form.
    // and also use `context` to access more things from the server
    const name = form.get('name')
    const username = form.get('username')
    const password = form.get('password')

    // You can validate the inputs however you want
    invariant(typeof name === 'string', 'name must be a string')
    invariant(name.length > 0, 'name must not be empty')

    invariant(typeof username === 'string', 'username must be a string')
    invariant(username.length > 0, 'username must not be empty')

    invariant(typeof password === 'string', 'password must be a string')
    invariant(password.length > 0, 'password must not be empty')

    const existingUser = await db.user.findUnique({ where: { username } })
    if (existingUser) throw new Error('Username is already used')

    // And if you have a password you should hash it
    const hashedPassword = await bcrypt.hash(password, 10)

    // And finally, you can find, or create, the user
    const user = await db.user.create({
      data: { username, password: hashedPassword, role: Role.CUSTOMER, name },
    })

    // And return the user as the Authenticator expects it
    return user
  }),
  'user-pass-signup'
)

invariant(process.env.GOOGLE_CLIENT_ID, 'Google OAuth Client ID is invalid')
invariant(
  process.env.GOOGLE_CLIENT_SECRET,
  'Google OAuth Client Secret is invalid'
)
invariant(process.env.FACEBOOK_CLIENT_ID, 'Facebook OAuth Client ID is invalid')
invariant(
  process.env.FACEBOOK_CLIENT_SECRET,
  'Facebook OAuth Client Secret is invalid'
)

// Create an instance of the authenticator, pass a generic <User> type which the
// strategies will return (this will be stored in the session)
authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `https://camillemeat.shop/auth/${SocialsProvider.GOOGLE}/callback`,
    },
    async ({ profile }) => {
      const email = profile?.emails?.pop()?.value || ''
      const name =
        profile?.displayName ||
        `${profile?.name?.givenName} ${profile?.name?.familyName}` ||
        ''
      const profileIconUrl = profile?.photos?.pop()?.value || ''
      const provider = profile?.provider || ''
      const providerId = profile?.id || ''
      return await db.user.upsert({
        where: {
          providerId,
        },
        update: {},
        create: {
          email,
          name,
          profileIconUrl,
          providerId,
          provider,
          role: Role.CUSTOMER,
        },
      })
    }
  )
)

authenticator.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `https://camillemeat.shop/auth/${SocialsProvider.FACEBOOK}/callback`,
    },
    async ({ profile }) => {
      const email = profile?.emails?.pop()?.value || ''
      const name =
        profile?.displayName ||
        `${profile?.name?.givenName} ${profile?.name?.familyName}` ||
        ''
      const profileIconUrl = profile?.photos?.pop()?.value || ''
      const provider = profile?.provider || ''
      const providerId = profile?.id || ''
      return await db.user.upsert({
        where: {
          providerId,
        },
        update: {},
        create: {
          email,
          name,
          profileIconUrl,
          providerId,
          provider,
          role: Role.CUSTOMER,
        },
      })
    }
  )
)
