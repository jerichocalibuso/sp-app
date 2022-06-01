import {
  json,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix'
import type { MetaFunction } from 'remix'
import styles from './tailwind.css'
import nprogress from './styles/nprogress.css'
import Navbar from './components/Navbar'
import Error from './components/Error'
import Footer from './components/Footer'
import { authenticator } from './services/auth.server'

import nProgressStyles from 'nprogress/nprogress.css'
import { useNProgress } from './hooks/useNProgress'
import { Role } from '@prisma/client'
import { db } from './utils/db.server'

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'icon', type: 'image/svg', href: '/images/logo.png' },
    { rel: 'stylesheet', href: nProgressStyles },
    { rel: 'stylesheet', href: nprogress },
  ]
}

export const meta: MetaFunction = () => {
  return { title: 'Camille Meat Shop' }
}

export const loader: LoaderFunction = async ({ request }) => {
  // If the user is already authenticated redirect to /dashboard directly
  const user = await authenticator.isAuthenticated(request)
  if (user?.id && user?.role === Role.CUSTOMER) {
    const currentOrder = await db.order.findFirst({
      where: {
        userId: user.id,
        status: 'IN_CART',
      },
    })
    return json({ user, currentOrder })
  }

  return json({ user })
}

export default function App() {
  const { user, currentOrder } = useLoaderData()

  useNProgress()

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <Navbar {...{ user, currentOrder }} />
          <Outlet />
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <Links />
      </head>
      <body>
        <Error />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}
