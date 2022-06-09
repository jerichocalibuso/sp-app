import { createCookieSessionStorage } from '@remix-run/node'

// export the whole sessionStorage object
export let guestSessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'guestData', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ['s3cr3t'], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
})

// you can also export the methods individually for your own usage
export let { commitSession, destroySession } = guestSessionStorage

export function getSession(request: Request) {
  return guestSessionStorage.getSession(request.headers.get('Cookie'))
}
