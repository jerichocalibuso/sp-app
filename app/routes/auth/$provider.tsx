import { ActionFunction, redirect } from '@remix-run/node'
import { LoaderFunction } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { authenticator } from '~/services/auth.server'

export let loader: LoaderFunction = () => redirect('/signin')

export let action: ActionFunction = ({ request, params }) => {
  invariant(params.provider, 'auth provider is undefined')

  return authenticator.authenticate(params.provider, request)
}
