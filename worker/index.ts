// @ts-ignore
import * as build from '../build/index.js'
import { createCookieSessionStorage } from 'remix'
import { createFetchHandler } from './adapter.js'
const handleFetch = createFetchHandler({
  build,

  /**
   * Context to be available on `loader` or `action`, default to `undefined` if not defined
   * @param request Request object
   * @param env Variables defined on the environment
   * @param ctx Exectuion context, i.e. ctx.waitUntil() or ctx.passThroughOnException();
   * @returns Context
   */
  getLoadContext(request, env, context) {
    return {
      ...context,
      cloudflareImagesToken: process.env.CLOUDFLARE_IMAGES_TOKEN,
      cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      // TODO: This should be set externally, like from an environment variable.
      // It will be needed to hash passwords on creation and login
      sessionStorage: createCookieSessionStorage({
        cookie: {
          name: '_session',
          sameSite: 'lax',
          path: '/',
          httpOnly: true,
          secrets: ['s3cr3t'],
          secure: process.env.NODE_ENV === 'production',
        },
      }),
    }
  },
})

const worker: ExportedHandler = {
  fetch: handleFetch,
}

export default worker
