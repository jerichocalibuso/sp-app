import { ActionFunction, json, LoaderFunction } from 'remix'
import { authenticator } from '~/services/auth.server'

export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: '/' })
}
