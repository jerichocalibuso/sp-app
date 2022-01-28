import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import Navbar from "./components/Navbar";
import Error from "./components/error";
import Footer from "./components/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Links />
      </head>
      <body>
        <Navbar />
        <Error />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        <Footer />
      </body>
    </html>
  );
}
