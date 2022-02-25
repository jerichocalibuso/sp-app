import { ActionFunction, LoaderFunction, redirect } from 'remix'
import invariant from 'tiny-invariant'
import { authenticator } from '~/services/auth.server'

export let loader: LoaderFunction = () => redirect('/login')

export let action: ActionFunction = ({ request, params }) => {
  invariant(params.provider, 'auth provider is undefined')

  return authenticator.authenticate(params.provider, request)
}
