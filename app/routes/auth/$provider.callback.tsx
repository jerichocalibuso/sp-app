import { ActionFunction, LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'
import { authenticator } from '~/services/auth.server'

export let loader: LoaderFunction = ({ request, params }) => {
  invariant(params.provider, 'auth provider is undefined')

  return authenticator.authenticate(params.provider, request, {
    successRedirect: '/',
    failureRedirect: '/signin',
  })
}
