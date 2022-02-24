var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/jerichocalibuso/sp-app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WA75AMBN.css";

// app/components/Navbar.tsx
init_react();
var import_react = require("react");
var import_react2 = require("@headlessui/react");
var import_outline = require("@heroicons/react/outline");
var import_remix2 = __toESM(require_remix());
var currencies = ["CADds", "USD", "AUD", "EUR", "GBP"];
var navigation = {
  pages: [
    { name: "All Products", href: "/products" },
    { name: "Chicken", href: "/chicken" },
    { name: "Pork", href: "/pork" },
    { name: "Beef", href: "beef" }
  ]
};
function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react2.Transition.Root, {
    show: mobileMenuOpen,
    as: import_react.Fragment
  }, /* @__PURE__ */ React.createElement(import_react2.Dialog, {
    as: "div",
    className: "fixed inset-0 z-50 flex lg:hidden",
    onClose: setMobileMenuOpen
  }, /* @__PURE__ */ React.createElement(import_react2.Transition.Child, {
    as: import_react.Fragment,
    enter: "transition-opacity ease-linear duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity ease-linear duration-300",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React.createElement(import_react2.Dialog.Overlay, {
    className: "fixed inset-0 bg-black bg-opacity-25"
  })), /* @__PURE__ */ React.createElement(import_react2.Transition.Child, {
    as: import_react.Fragment,
    enter: "transition ease-in-out duration-300 transform",
    enterFrom: "-translate-x-full",
    enterTo: "translate-x-0",
    leave: "transition ease-in-out duration-300 transform",
    leaveFrom: "translate-x-0",
    leaveTo: "-translate-x-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex px-4 pt-5 pb-2.5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400",
    onClick: () => setMobileMenuOpen(false)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Close menu"), /* @__PURE__ */ React.createElement(import_outline.XIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(import_react2.Tab.Group, {
    as: "div",
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-b border-gray-200"
  }), /* @__PURE__ */ React.createElement(import_react2.Tab.Panels, {
    as: import_react.Fragment
  })), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6 border-t border-gray-200 py-6 px-4"
  }, navigation.pages.map((page) => /* @__PURE__ */ React.createElement("div", {
    key: page.name,
    className: "flow-root"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: page.href,
    className: "-m-2 block p-2 font-medium text-gray-900"
  }, page.name)))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6 border-t border-gray-200 py-6 px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flow-root"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#",
    className: "-m-2 block p-2 font-medium text-gray-900"
  }, "Create an account")), /* @__PURE__ */ React.createElement("div", {
    className: "flow-root"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#",
    className: "-m-2 block p-2 font-medium text-gray-900"
  }, "Sign in"))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6 border-t border-gray-200 py-6 px-4"
  }, /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "inline-block"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "mobile-currency",
    className: "sr-only"
  }, "Currency"), /* @__PURE__ */ React.createElement("div", {
    className: "group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
  }, /* @__PURE__ */ React.createElement("select", {
    id: "mobile-currency",
    name: "currency",
    className: "flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-red-600"
  }, currencies.map((currency) => /* @__PURE__ */ React.createElement("option", {
    key: currency
  }, currency))), /* @__PURE__ */ React.createElement("div", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    className: "h-5 w-5 text-gray-500"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M6 8l4 4 4-4"
  }))))))))))), /* @__PURE__ */ React.createElement("header", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fixed top-0 left-0 right-0 z-40 border-b border-gray-200 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-16 items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:flex lg:items-center"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Camille Meat Shop"), /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto",
    src: "/images/logo.png",
    alt: "Camille Meat Shop Logo"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden h-full lg:flex"
  }, /* @__PURE__ */ React.createElement(import_react2.Popover.Group, {
    className: "ml-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full justify-center space-x-8"
  }, navigation.pages.map((page) => /* @__PURE__ */ React.createElement(import_remix2.Link, {
    key: page.name,
    to: page.href,
    className: "flex items-center text-sm font-medium text-gray-700 hover:text-red-600"
  }, page.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 items-center lg:hidden"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-ml-2 rounded-md bg-white p-2 text-gray-400",
    onClick: () => {
      console.log("hello");
      setMobileMenuOpen(true);
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "MobileMenuOpen menu"), /* @__PURE__ */ React.createElement(import_outline.MenuIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#",
    className: "ml-2 p-2 text-gray-400 hover:text-red-600"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React.createElement(import_outline.SearchIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    className: "lg:hidden"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Camille Meat Shop"), /* @__PURE__ */ React.createElement("img", {
    src: "/images/logo.png",
    alt: "",
    className: "h-8 w-auto"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 items-center justify-end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center lg:ml-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:flex"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#",
    className: "-m-2 p-2 text-gray-400 hover:text-red-600"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React.createElement(import_outline.SearchIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#",
    className: "-m-2 p-2 text-gray-400 hover:text-red-600"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Account"), /* @__PURE__ */ React.createElement(import_outline.UserIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React.createElement("span", {
    className: "mx-4 h-6 w-px bg-gray-200 lg:mx-6",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flow-root"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/cart",
    className: "group -m-2 flex items-center p-2"
  }, /* @__PURE__ */ React.createElement(import_outline.ShoppingCartIcon, {
    className: "h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-red-600",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 text-sm font-medium text-gray-700 group-hover:text-red-600"
  }, "0"), /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "items in cart, view bag"))))))))))));
}

// app/components/Error.tsx
init_react();
var import_remix3 = __toESM(require_remix());
function Error2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 flex min-h-full flex-col bg-white pt-16 pb-12"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-shrink-0 justify-center"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    className: "inline-flex"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Camille Meat Shop"), /* @__PURE__ */ React.createElement("img", {
    className: "h-12 w-auto",
    src: "/images/logo.png",
    alt: "Camille Meat Shop Logo"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "py-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm font-semibold uppercase tracking-wide text-red-600"
  }, "404 error"), /* @__PURE__ */ React.createElement("h1", {
    className: "mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
  }, "Page not found."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-500"
  }, "Sorry, we couldn\u2019t find the page you\u2019re looking for."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    className: "text-base font-medium text-red-600 hover:text-red-500"
  }, "Go back home", /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, " \u2192")))))), /* @__PURE__ */ React.createElement("footer", {
    className: "mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-center space-x-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-sm font-medium text-gray-500 hover:text-gray-600"
  }, "Contact Support"), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block border-l border-gray-300",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-sm font-medium text-gray-500 hover:text-gray-600"
  }, "Status"), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block border-l border-gray-300",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-sm font-medium text-gray-500 hover:text-gray-600"
  }, "Twitter")))));
}

// app/components/Footer.tsx
init_react();
var import_remix4 = __toESM(require_remix());
var footerNavigation = {
  products: [
    { name: "All Products", href: "/products" },
    { name: "Chicken", href: "/chicken" },
    { name: "Pork", href: "/pork" },
    { name: "Beef", href: "/beef" }
  ],
  customerService: [
    { name: "Contact", href: "#footer" },
    { name: "Shipping", href: "#footer" },
    { name: "Returns", href: "#footer" },
    { name: "Warranty", href: "#footer" }
  ],
  company: [
    { name: "Who we are", href: "#footer" },
    { name: "Careers", href: "#footer" },
    { name: "Terms & Conditions", href: "#footer" },
    { name: "Privacy", href: "#footer" }
  ],
  legal: [
    { name: "Terms of Service", href: "#footer" },
    { name: "Return Policy", href: "#footer" },
    { name: "Privacy Policy", href: "#footer" },
    { name: "Delivery Policy", href: "#footer" }
  ],
  bottomLinks: [
    { name: "Privacy", href: "#footer" },
    { name: "Terms", href: "#footer" }
  ]
};
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    "aria-labelledby": "footer-heading",
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "footer",
    className: "sr-only"
  }, "Footer"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-t border-gray-200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-16 pb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:justify-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logo.png",
    alt: "Camille Meat Shop Logo",
    className: "h-8 w-auto"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:justify-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md mt-2 font-bold text-gray-900"
  }, "Camille Meat Shop")), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-8 xl:col-span-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-medium text-gray-900"
  }, "Products"), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "mt-6 space-y-6"
  }, footerNavigation.products.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.name,
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: item.href,
    className: "text-gray-500 hover:text-red-500"
  }, item.name))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-medium text-gray-900"
  }, "Customer Service"), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "mt-6 space-y-6"
  }, footerNavigation.customerService.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.name,
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: "text-gray-500 hover:text-red-500"
  }, item.name)))))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-medium text-gray-900"
  }, "Company"), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "mt-6 space-y-6"
  }, footerNavigation.company.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.name,
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: "text-gray-500 hover:text-red-500"
  }, item.name))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-medium text-gray-900"
  }, "Legal"), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "mt-6 space-y-6"
  }, footerNavigation.legal.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.name,
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: "text-gray-500 hover:text-red-500"
  }, item.name)))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "py-10 md:flex md:items-center md:justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center md:text-left"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "\xA9 ", new Date().getFullYear(), " All Rights Reserved")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 flex items-center justify-center md:mt-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-8"
  }, footerNavigation.bottomLinks.map((item) => /* @__PURE__ */ React.createElement(import_remix4.Link, {
    key: item.name,
    to: item.href,
    className: "text-sm text-gray-500 hover:text-red-500"
  }, item.name)))))));
}

// route:/Users/jerichocalibuso/sp-app/app/root.tsx
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "icon", type: "image/svg", href: "/images/logo.png" }
  ];
}
var meta = () => {
  return { title: "Camille Meat Shop" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Example, null), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null)), /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null)));
}
function CatchBoundary() {
  const caught = (0, import_remix5.useCatch)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement(import_remix5.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Error2, null), true ? /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null) : null));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/assigned-orders.tsx
var assigned_orders_exports = {};
__export(assigned_orders_exports, {
  default: () => Example2
});
init_react();
var import_solid = require("@heroicons/react/solid");
var positions = [
  {
    id: 1,
    title: "Order 123-456",
    type: "Packaging",
    location: "Phase 1 Block 2 Lot 3, Parklane Country Homes",
    department: "Evan Monreal",
    closeDate: "2022-01-07",
    closeDateFull: "January 7, 2022"
  },
  {
    id: 2,
    title: "Order 123-457",
    type: "For Delivery",
    location: "House #12, Sapphire Street, Camella Lessandra",
    department: "Samantha Lugtu",
    closeDate: "2022-01-07",
    closeDateFull: "January 7, 2022"
  },
  {
    id: 3,
    title: "Order 123-459",
    type: "Completed",
    location: "Block 76 Lot 5, Lumina Homes",
    department: "Joshua Lopez",
    closeDate: "2022-01-14",
    closeDateFull: "January 14, 2022"
  },
  {
    id: 3,
    title: "Order 123-005",
    type: "Completed",
    location: "Block 76 Lot 5, Lumina Homes",
    department: "Joshua Lopez",
    closeDate: "2022-01-14",
    closeDateFull: "January 14, 2022"
  },
  {
    id: 3,
    title: "Order 123-004",
    type: "Completed",
    location: "Block 76 Lot 5, Lumina Homes",
    department: "Joshua Lopez",
    closeDate: "2022-01-14",
    closeDateFull: "January 14, 2022"
  },
  {
    id: 3,
    title: "Order 123-003",
    type: "Completed",
    location: "Block 76 Lot 5, Lumina Homes",
    department: "Joshua Lopez",
    closeDate: "2022-01-14",
    closeDateFull: "January 14, 2022"
  },
  {
    id: 3,
    title: "Order 123-002",
    type: "Completed",
    location: "Block 76 Lot 5, Lumina Homes",
    department: "Joshua Lopez",
    closeDate: "2022-01-14",
    closeDateFull: "January 14, 2022"
  }
];
function Example2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "border-b border-gray-200 bg-white px-4 py-5 pt-24 sm:px-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl font-extrabold leading-6 text-gray-900"
  }, "Assgined Orders"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-sm text-gray-500"
  }, "List of all assgined orders to you.")), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden bg-white shadow sm:rounded-md"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "divide-y divide-gray-200"
  }, positions.map((position) => /* @__PURE__ */ React.createElement("li", {
    key: position.id
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "block hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "truncate text-xl font-medium text-red-500 hover:text-red-600"
  }, position.title), /* @__PURE__ */ React.createElement("div", {
    className: "ml-2 flex flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("p", {
    className: `inline-flex rounded-full ${position.type === "Packaging" && "bg-red-100"} ${position.type === "For Delivery" && "bg-yellow-100"} ${position.type === "Completed" && "bg-green-100"} 
                        
                        px-2 text-xs font-semibold leading-5 
                        
                        ${position.type === "Packaging" && "text-red-900"}
                        
                        ${position.type === "For Delivery" && "text-yellow-900"}
                        
                        ${position.type === "Completed" && "text-green-900"}
                        
                        `
  }, position.type))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 sm:flex sm:justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:flex"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex items-center text-sm text-gray-500"
  }, /* @__PURE__ */ React.createElement(import_solid.UsersIcon, {
    className: "mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), position.department), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-3"
  }, /* @__PURE__ */ React.createElement(import_solid.LocationMarkerIcon, {
    className: "mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), position.location)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
  }, /* @__PURE__ */ React.createElement(import_solid.CalendarIcon, {
    className: "mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", null, position.type === "Completed" ? "Delivered on" : "Placed on", " ", /* @__PURE__ */ React.createElement("time", {
    dateTime: position.closeDate
  }, position.closeDateFull)))))))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/manage-products.tsx
var manage_products_exports = {};
__export(manage_products_exports, {
  default: () => Example3
});
init_react();

// app/routes/products/index.tsx
init_react();
var products = [
  {
    id: 1,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 2,
    imageSrc: "/images/BF-chicken-breast-fillets-860g.jpeg",
    imageAlt: "BF-chicken-breast-fillets-860g",
    name: "Chicken Breasts Fillets",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 290,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 3,
    imageSrc: "/images/BF-chicken-breasts-860g.jpeg",
    imageAlt: "BF-chicken-breasts-860g",
    name: "Chicken Breasts",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 4,
    imageSrc: "/images/BF-chicken-leg-quarters-860g.jpeg",
    imageAlt: "BF-chicken-leg-quarters-860g",
    name: "Chicken Leg Quarters",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 5,
    imageSrc: "/images/BF-chicken-nuggets-200g.jpeg",
    imageAlt: "BF-chicken-nuggets-200g",
    name: "Chicken Nuggets",
    weight: "200g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 6,
    imageSrc: "/images/BF-chicken-popcorn-200g.jpeg",
    imageAlt: "BF-chicken-popcorn-200g",
    name: "Chicken Popcorn",
    weight: "200g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 7,
    imageSrc: "/images/BF-chicken-sticks-200g.jpeg",
    imageAlt: "BF-chicken-sticks-200g",
    name: "Chicken Sticks",
    weight: "200g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 8,
    imageSrc: "/images/BF-chicken-thighs-860g.jpeg",
    imageAlt: "BF-chicken-thighs-860g",
    name: "Chicken Thighs",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 9,
    imageSrc: "/images/BF-chicken-wings-860g.jpeg",
    imageAlt: "BF-chicken-wings-860g",
    name: "Chicken Wings",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 10,
    imageSrc: "/images/BF-drumstick-860g.jpeg",
    imageAlt: "BF-drumstick-860g",
    name: "Chicken Drumsticks",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 11,
    imageSrc: "/images/BF-everyday-chicken-piece.jpeg",
    imageAlt: "BF-everyday-chicken-piece",
    name: "Everyday Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 160,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 12,
    imageSrc: "/images/BF-family-feast-chicken.jpeg",
    imageAlt: "BF-family-feast-chicken",
    name: "Family Feast Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 280,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 13,
    imageSrc: "/images/BF-free-range-chicken.jpeg",
    imageAlt: "BF-free-range-chicken",
    name: "Free Range Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 14,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-pepper-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-pepper-550g",
    name: "Marinated Chicken Cut Ups (Pepper)",
    weight: "550g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 115,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 15,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-spicy-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-spicy-550g",
    name: "Marinated Chicken Cut Ups (Spicy)",
    weight: "550g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 115,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 16,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-sweet-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-sweet-550g",
    name: "Marinated Chicken Cut Ups (Spicy)",
    weight: "550g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 115,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 17,
    imageSrc: "/images/BF-marinated-chicken-neck-500g.jpeg",
    imageAlt: "BF-marinated-chicken-neck-500g",
    name: "Marinated Chicken Neck",
    weight: "500g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 80,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 18,
    imageSrc: "/images/BF-premium-chicken.jpeg",
    imageAlt: "BF-premium-chicken",
    name: "Premium Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 19,
    imageSrc: "/images/BF-saucy-torikaraage-sweet-and-sour-450g.jpeg",
    imageAlt: "BF-saucy-torikaraage-sweet-and-sour-450g",
    name: "Saucy Torikaraage (Sweet and Sour)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 20,
    imageSrc: "/images/BF-saucy-torikaraage-teriyaki-450g.jpeg",
    imageAlt: "BF-saucy-torikaraage-teriyaki-450g",
    name: "Saucy Torikaraage (Sweet and Sour)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 21,
    imageSrc: "/images/BF-chicken-thigh-fillets-860g.jpeg",
    imageAlt: "BF-chicken-thigh-fillets-860g",
    name: "Chicken Thigh Fillets",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 290,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 22,
    imageSrc: "/images/BF-top-toriburger-cheese-and-chives-450g.jpeg",
    imageAlt: "BF-top-toriburger-cheese-and-chives-450g",
    name: "Top Toriburger (Cheese and Chives)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 23,
    imageSrc: "/images/BF-top-toriburger-classic-mayo-450g.jpeg",
    imageAlt: "BF-top-toriburger-classic-mayo-450g",
    name: "Top Toriburger (Classic Mayo)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 24,
    imageSrc: "/images/BF-top-torikatsu-cheese-and-chives-450g.jpeg",
    imageAlt: "BF-top-torikatsu-cheese-and-chives-450g",
    name: "Top Torikatsu (Cheese and Chives)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 25,
    imageSrc: "/images/BF-top-torikatsu-classic-mayo-450g.jpeg",
    imageAlt: "BF-top-torikatsu-classic-mayo-450g",
    name: "Top Torikatsu (Classic Mayo)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 26,
    imageSrc: "/images/BF-young-and-tender-chicken.jpeg",
    imageAlt: "BF-young-and-tender-chicken",
    name: "Young and Tender Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 190,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 27,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 41,
    imageSrc: "/images/Camille-beef-cubes-500g.jpeg",
    imageAlt: "Camille-beef-cubes-500g",
    name: "Beef Cubes",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 42,
    imageSrc: "/images/Camille-beef-new-york-steak-500g.jpeg",
    imageAlt: "Camille-beef-new-york-steak-500g",
    name: "Beef New York Steak",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 43,
    imageSrc: "/images/Camille-beef-sakiyuki-500g.jpeg",
    imageAlt: "Camille-beef-sakiyuki-500g",
    name: "Beef Sakiyuki",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 44,
    imageSrc: "/images/Camille-beef-shanks-500g.jpeg",
    imageAlt: "Camille-beef-shanks-500g",
    name: "Beef Shanks",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 45,
    imageSrc: "/images/Camille-beef-strongranoff-500g.jpeg",
    imageAlt: "Camille-beef-strongranoff-500g",
    name: "Beef Strongranoff",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 46,
    imageSrc: "/images/Camille-ground-beef-500g.jpeg",
    imageAlt: "Camille-ground-beef-500g",
    name: "Ground Beef",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 47,
    imageSrc: "/images/Camille-ground-pork.jpeg",
    imageAlt: "Camille-ground-pork",
    name: "Ground Pork",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 48,
    imageSrc: "/images/Camille-pata-slice-500g.jpeg",
    imageAlt: "Camille-pata-slice-500g",
    name: "Pata Slice",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 49,
    imageSrc: "/images/Camille-pork-adobo-cut-500g.jpeg",
    imageAlt: "Camille-pork-adobo-cut-500g",
    name: "Pork Adobo Cut",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 50,
    imageSrc: "/images/Camille-pork-bacon-cut-500g.jpeg",
    imageAlt: "Camille-pork-bacon-cut-500g",
    name: "Pork Bacon Cut",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 51,
    imageSrc: "/images/Camille-pork-belly-slice-500g.jpeg",
    imageAlt: "Camille-pork-belly-slice-500g",
    name: "Pork Belly Slice",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 52,
    imageSrc: "/images/Camille-pork-sinigang-cut-500g.jpeg",
    imageAlt: "Camille-pork-sinigang-cut-500g",
    name: "Pork Sinigang Cut",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 53,
    imageSrc: "/images/Camille-porkchop-500g.jpeg",
    imageAlt: "Camille-porkchop-500g",
    name: "Pork Chop",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  }
];
var returnTitle = ({
  onlyCategory
}) => {
  if (onlyCategory === null) {
    return "All Products";
  } else if (onlyCategory === "Chicken" /* CHICKEN */) {
    return "Chicken Products";
  } else if (onlyCategory === "Pork" /* PORK */) {
    return "Pork Products";
  } else if (onlyCategory === "Beef" /* BEEF */) {
    return "Beef Products";
  } else {
    return "All Products";
  }
};
function ProductsPage({
  onlyCategory
}) {
  return /* @__PURE__ */ React.createElement("main", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, returnTitle({ onlyCategory })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  }, products.sort((a, b) => b.id - a.id).map((product2) => {
    if (onlyCategory === "Chicken" /* CHICKEN */ && product2.category !== "Chicken" /* CHICKEN */)
      return;
    else if (onlyCategory === "Beef" /* BEEF */ && product2.category !== "Beef" /* BEEF */)
      return;
    else if (onlyCategory === "Pork" /* PORK */ && product2.category !== "Pork" /* PORK */)
      return;
    return /* @__PURE__ */ React.createElement("div", {
      key: product2.id
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative h-72 w-full overflow-hidden rounded-lg"
    }, /* @__PURE__ */ React.createElement("img", {
      src: product2.imageSrc,
      alt: product2.imageAlt,
      className: "h-full w-full object-cover object-center"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "relative mt-4 h-16"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex justify-between "
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "text-md font-medium text-gray-900 hover:text-red-500"
    }, /* @__PURE__ */ React.createElement("a", {
      href: `/products/${product2.id}`
    }, product2.name)), /* @__PURE__ */ React.createElement("div", {
      className: "ml-2"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "relative text-lg font-semibold text-red-500"
    }, "\u20B1", product2.price))), /* @__PURE__ */ React.createElement("p", {
      className: "relative text-sm font-semibold text-gray-500"
    }, product2.brand)), /* @__PURE__ */ React.createElement("a", {
      href: `/products/${product2.id}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "absolute inset-x-0 top-0  flex h-72 cursor-pointer items-end justify-end overflow-hidden rounded-lg p-4"
    }, /* @__PURE__ */ React.createElement("div", {
      "aria-hidden": "true",
      className: "absolute inset-x-0 bottom-0 h-36  bg-gradient-to-t from-neutral-500 to-white opacity-10  hover:opacity-5"
    })))), /* @__PURE__ */ React.createElement("div", {
      className: "mt-6"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "#",
      className: "relative flex items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-8 text-sm font-medium text-white hover:bg-red-400"
    }, "Add to cart", /* @__PURE__ */ React.createElement("span", {
      className: "sr-only"
    }))));
  }))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/manage-products.tsx
function Example3() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " bg-white px-4 py-5 pt-24 sm:px-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl font-extrabold leading-6 text-gray-900"
  }, "Manage Products"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-sm text-gray-500"
  }, "View, add, edit, or delete products.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Product"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Description"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Price"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Weight"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Stock"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Brand"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "relative px-6 py-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Edit")))), /* @__PURE__ */ React.createElement("tbody", {
    className: "divide-y divide-gray-200 bg-white"
  }, products.map((product2) => /* @__PURE__ */ React.createElement("tr", {
    key: product2.id
  }, /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-10 w-10 flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-10 w-10 rounded-md",
    src: product2.imageSrc,
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-medium text-gray-900"
  }, product2.name)))), /* @__PURE__ */ React.createElement("td", {
    className: "wrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, product2.description)), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, product2.price)), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, product2.weight)), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, "999")), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4 text-sm text-gray-900"
  }, product2.brand), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-red-500 hover:text-red-600"
  }, "Edit")))))))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/products/index.tsx
var products_exports = {};
__export(products_exports, {
  Brand: () => Brand,
  Category: () => Category,
  default: () => ProductsPage2,
  products: () => products2
});
init_react();
var Brand = /* @__PURE__ */ ((Brand2) => {
  Brand2["CAMILLE"] = "Camille";
  Brand2["BOUNTY_FRESH"] = "Bounty Fresh";
  return Brand2;
})(Brand || {});
var Category = /* @__PURE__ */ ((Category3) => {
  Category3["CHICKEN"] = "Chicken";
  Category3["PORK"] = "Pork";
  Category3["BEEF"] = "Beef";
  return Category3;
})(Category || {});
var products2 = [
  {
    id: 1,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 2,
    imageSrc: "/images/BF-chicken-breast-fillets-860g.jpeg",
    imageAlt: "BF-chicken-breast-fillets-860g",
    name: "Chicken Breasts Fillets",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 290,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 3,
    imageSrc: "/images/BF-chicken-breasts-860g.jpeg",
    imageAlt: "BF-chicken-breasts-860g",
    name: "Chicken Breasts",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 4,
    imageSrc: "/images/BF-chicken-leg-quarters-860g.jpeg",
    imageAlt: "BF-chicken-leg-quarters-860g",
    name: "Chicken Leg Quarters",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 5,
    imageSrc: "/images/BF-chicken-nuggets-200g.jpeg",
    imageAlt: "BF-chicken-nuggets-200g",
    name: "Chicken Nuggets",
    weight: "200g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 6,
    imageSrc: "/images/BF-chicken-popcorn-200g.jpeg",
    imageAlt: "BF-chicken-popcorn-200g",
    name: "Chicken Popcorn",
    weight: "200g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 7,
    imageSrc: "/images/BF-chicken-sticks-200g.jpeg",
    imageAlt: "BF-chicken-sticks-200g",
    name: "Chicken Sticks",
    weight: "200g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 8,
    imageSrc: "/images/BF-chicken-thighs-860g.jpeg",
    imageAlt: "BF-chicken-thighs-860g",
    name: "Chicken Thighs",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 9,
    imageSrc: "/images/BF-chicken-wings-860g.jpeg",
    imageAlt: "BF-chicken-wings-860g",
    name: "Chicken Wings",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 10,
    imageSrc: "/images/BF-drumstick-860g.jpeg",
    imageAlt: "BF-drumstick-860g",
    name: "Chicken Drumsticks",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 11,
    imageSrc: "/images/BF-everyday-chicken-piece.jpeg",
    imageAlt: "BF-everyday-chicken-piece",
    name: "Everyday Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 160,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 12,
    imageSrc: "/images/BF-family-feast-chicken.jpeg",
    imageAlt: "BF-family-feast-chicken",
    name: "Family Feast Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 280,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 13,
    imageSrc: "/images/BF-free-range-chicken.jpeg",
    imageAlt: "BF-free-range-chicken",
    name: "Free Range Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 14,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-pepper-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-pepper-550g",
    name: "Marinated Chicken Cut Ups (Pepper)",
    weight: "550g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 115,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 15,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-spicy-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-spicy-550g",
    name: "Marinated Chicken Cut Ups (Spicy)",
    weight: "550g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 115,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 16,
    imageSrc: "/images/BF-marinated-chicken-cut-ups-sweet-550g.jpeg",
    imageAlt: "BF-marinated-chicken-cut-ups-sweet-550g",
    name: "Marinated Chicken Cut Ups (Spicy)",
    weight: "550g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 115,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 17,
    imageSrc: "/images/BF-marinated-chicken-neck-500g.jpeg",
    imageAlt: "BF-marinated-chicken-neck-500g",
    name: "Marinated Chicken Neck",
    weight: "500g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 80,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 18,
    imageSrc: "/images/BF-premium-chicken.jpeg",
    imageAlt: "BF-premium-chicken",
    name: "Premium Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 19,
    imageSrc: "/images/BF-saucy-torikaraage-sweet-and-sour-450g.jpeg",
    imageAlt: "BF-saucy-torikaraage-sweet-and-sour-450g",
    name: "Saucy Torikaraage (Sweet and Sour)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 20,
    imageSrc: "/images/BF-saucy-torikaraage-teriyaki-450g.jpeg",
    imageAlt: "BF-saucy-torikaraage-teriyaki-450g",
    name: "Saucy Torikaraage (Sweet and Sour)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 21,
    imageSrc: "/images/BF-chicken-thigh-fillets-860g.jpeg",
    imageAlt: "BF-chicken-thigh-fillets-860g",
    name: "Chicken Thigh Fillets",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 290,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 22,
    imageSrc: "/images/BF-top-toriburger-cheese-and-chives-450g.jpeg",
    imageAlt: "BF-top-toriburger-cheese-and-chives-450g",
    name: "Top Toriburger (Cheese and Chives)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 23,
    imageSrc: "/images/BF-top-toriburger-classic-mayo-450g.jpeg",
    imageAlt: "BF-top-toriburger-classic-mayo-450g",
    name: "Top Toriburger (Classic Mayo)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 200,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 24,
    imageSrc: "/images/BF-top-torikatsu-cheese-and-chives-450g.jpeg",
    imageAlt: "BF-top-torikatsu-cheese-and-chives-450g",
    name: "Top Torikatsu (Cheese and Chives)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 25,
    imageSrc: "/images/BF-top-torikatsu-classic-mayo-450g.jpeg",
    imageAlt: "BF-top-torikatsu-classic-mayo-450g",
    name: "Top Torikatsu (Classic Mayo)",
    weight: "450g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 220,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 26,
    imageSrc: "/images/BF-young-and-tender-chicken.jpeg",
    imageAlt: "BF-young-and-tender-chicken",
    name: "Young and Tender Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 190,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 27,
    imageSrc: "/images/BF-chicken-breaded-skin-350g.jpeg",
    imageAlt: "BF-chicken-breaded-skin-350g",
    name: "Chicken Breaded Skin",
    weight: "350g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 41,
    imageSrc: "/images/Camille-beef-cubes-500g.jpeg",
    imageAlt: "Camille-beef-cubes-500g",
    name: "Beef Cubes",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 42,
    imageSrc: "/images/Camille-beef-new-york-steak-500g.jpeg",
    imageAlt: "Camille-beef-new-york-steak-500g",
    name: "Beef New York Steak",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 43,
    imageSrc: "/images/Camille-beef-sakiyuki-500g.jpeg",
    imageAlt: "Camille-beef-sakiyuki-500g",
    name: "Beef Sakiyuki",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 44,
    imageSrc: "/images/Camille-beef-shanks-500g.jpeg",
    imageAlt: "Camille-beef-shanks-500g",
    name: "Beef Shanks",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 45,
    imageSrc: "/images/Camille-beef-strongranoff-500g.jpeg",
    imageAlt: "Camille-beef-strongranoff-500g",
    name: "Beef Strongranoff",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 46,
    imageSrc: "/images/Camille-ground-beef-500g.jpeg",
    imageAlt: "Camille-ground-beef-500g",
    name: "Ground Beef",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 47,
    imageSrc: "/images/Camille-ground-pork.jpeg",
    imageAlt: "Camille-ground-pork",
    name: "Ground Pork",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 48,
    imageSrc: "/images/Camille-pata-slice-500g.jpeg",
    imageAlt: "Camille-pata-slice-500g",
    name: "Pata Slice",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 49,
    imageSrc: "/images/Camille-pork-adobo-cut-500g.jpeg",
    imageAlt: "Camille-pork-adobo-cut-500g",
    name: "Pork Adobo Cut",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 50,
    imageSrc: "/images/Camille-pork-bacon-cut-500g.jpeg",
    imageAlt: "Camille-pork-bacon-cut-500g",
    name: "Pork Bacon Cut",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 51,
    imageSrc: "/images/Camille-pork-belly-slice-500g.jpeg",
    imageAlt: "Camille-pork-belly-slice-500g",
    name: "Pork Belly Slice",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 52,
    imageSrc: "/images/Camille-pork-sinigang-cut-500g.jpeg",
    imageAlt: "Camille-pork-sinigang-cut-500g",
    name: "Pork Sinigang Cut",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 53,
    imageSrc: "/images/Camille-porkchop-500g.jpeg",
    imageAlt: "Camille-porkchop-500g",
    name: "Pork Chop",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Pork" /* PORK */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  }
];
var returnTitle2 = ({
  onlyCategory
}) => {
  if (onlyCategory === null) {
    return "All Products";
  } else if (onlyCategory === "Chicken" /* CHICKEN */) {
    return "Chicken Products";
  } else if (onlyCategory === "Pork" /* PORK */) {
    return "Pork Products";
  } else if (onlyCategory === "Beef" /* BEEF */) {
    return "Beef Products";
  } else {
    return "All Products";
  }
};
function ProductsPage2({
  onlyCategory
}) {
  return /* @__PURE__ */ React.createElement("main", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, returnTitle2({ onlyCategory })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  }, products2.sort((a, b) => b.id - a.id).map((product2) => {
    if (onlyCategory === "Chicken" /* CHICKEN */ && product2.category !== "Chicken" /* CHICKEN */)
      return;
    else if (onlyCategory === "Beef" /* BEEF */ && product2.category !== "Beef" /* BEEF */)
      return;
    else if (onlyCategory === "Pork" /* PORK */ && product2.category !== "Pork" /* PORK */)
      return;
    return /* @__PURE__ */ React.createElement("div", {
      key: product2.id
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative h-72 w-full overflow-hidden rounded-lg"
    }, /* @__PURE__ */ React.createElement("img", {
      src: product2.imageSrc,
      alt: product2.imageAlt,
      className: "h-full w-full object-cover object-center"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "relative mt-4 h-16"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex justify-between "
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "text-md font-medium text-gray-900 hover:text-red-500"
    }, /* @__PURE__ */ React.createElement("a", {
      href: `/products/${product2.id}`
    }, product2.name)), /* @__PURE__ */ React.createElement("div", {
      className: "ml-2"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "relative text-lg font-semibold text-red-500"
    }, "\u20B1", product2.price))), /* @__PURE__ */ React.createElement("p", {
      className: "relative text-sm font-semibold text-gray-500"
    }, product2.brand)), /* @__PURE__ */ React.createElement("a", {
      href: `/products/${product2.id}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "absolute inset-x-0 top-0  flex h-72 cursor-pointer items-end justify-end overflow-hidden rounded-lg p-4"
    }, /* @__PURE__ */ React.createElement("div", {
      "aria-hidden": "true",
      className: "absolute inset-x-0 bottom-0 h-36  bg-gradient-to-t from-neutral-500 to-white opacity-10  hover:opacity-5"
    })))), /* @__PURE__ */ React.createElement("div", {
      className: "mt-6"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "#",
      className: "relative flex items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-8 text-sm font-medium text-white hover:bg-red-400"
    }, "Add to cart", /* @__PURE__ */ React.createElement("span", {
      className: "sr-only"
    }))));
  }))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/manage-orders.tsx
var manage_orders_exports = {};
__export(manage_orders_exports, {
  default: () => Example4
});
init_react();
var people = [
  {
    name: "Lorem Ipsum",
    id: "123-456",
    title: "Beef Cubes",
    department: "Optimization",
    role: "01-12-2022",
    email: "lorem.ipsum@example.com",
    number: "0912-123-1234",
    address: "House #123, Sample Subdivision"
  },
  {
    name: "Lorem Ipsum",
    id: "123-456",
    title: "Beef Cubes",
    department: "Optimization",
    role: "01-12-2022",
    email: "lorem.ipsum@example.com",
    number: "0912-123-1234",
    address: "House #123, Sample Subdivision"
  },
  {
    name: "Lorem Ipsum",
    id: "123-456",
    title: "Beef Cubes",
    department: "Optimization",
    role: "01-12-2022",
    email: "lorem.ipsum@example.com",
    number: "0912-123-1234",
    address: "House #123, Sample Subdivision"
  },
  {
    name: "Lorem Ipsum",
    id: "123-456",
    title: "Beef Cubes",
    department: "Optimization",
    role: "01-12-2022",
    email: "lorem.ipsum@example.com",
    number: "0912-123-1234",
    address: "House #123, Sample Subdivision"
  },
  {
    name: "Lorem Ipsum",
    id: "123-456",
    title: "Beef Cubes",
    department: "Optimization",
    role: "01-12-2022",
    email: "lorem.ipsum@example.com",
    number: "0912-123-1234",
    address: "House #123, Sample Subdivision"
  },
  {
    name: "Lorem Ipsum",
    id: "123-456",
    title: "Beef Cubes",
    department: "Optimization",
    role: "01-12-2022",
    email: "lorem.ipsum@example.com",
    number: "0912-123-1234",
    address: "House #123, Sample Subdivision"
  }
];
function Example4() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " bg-white px-4 py-5 pt-24 sm:px-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl font-extrabold leading-6 text-gray-900"
  }, "Manage Orders"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-sm text-gray-500"
  }, "View, edit, or delete orders.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Order Id"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Customer"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Address"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Order Items"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Status"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Date"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "relative px-6 py-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Action")))), /* @__PURE__ */ React.createElement("tbody", {
    className: "divide-y divide-gray-200 bg-white"
  }, people.map((person) => /* @__PURE__ */ React.createElement("tr", {
    key: person.email
  }, /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-medium text-gray-900"
  }, person.id))), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-medium text-gray-900"
  }, person.name), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-500"
  }, person.email), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-500"
  }, person.number)))), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-medium text-gray-900"
  }, person.address))), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, "1x ", person.title), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, "2x ", person.title), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, "3x ", person.title)), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
  }, "Completed")), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4 text-sm text-gray-500"
  }, person.role), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-red-500 hover:text-red-600"
  }, "Edit")))))))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/order-history.tsx
var order_history_exports = {};
__export(order_history_exports, {
  default: () => Example5
});
init_react();
var import_remix6 = __toESM(require_remix());
var orders = [
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    invoiceHref: "#",
    total: "$238.00",
    products: [
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      }
    ]
  },
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    invoiceHref: "#",
    total: "$238.00",
    products: [
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      }
    ]
  },
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    invoiceHref: "#",
    total: "$238.00",
    products: [
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      }
    ]
  },
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    invoiceHref: "#",
    total: "$238.00",
    products: [
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      },
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
      }
    ]
  }
];
function Example5() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:pb-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
  }, "Order history"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "Check the status of recent orders, manage returns, and download invoices.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "sr-only"
  }, "Recent orders"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-20"
  }, orders.map((order) => /* @__PURE__ */ React.createElement("div", {
    key: order.number
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "sr-only"
  }, "Order placed on", " ", /* @__PURE__ */ React.createElement("time", {
    dateTime: order.datetime
  }, order.date)), /* @__PURE__ */ React.createElement("div", {
    className: "rounded-lg bg-gray-50 py-6 px-4 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8"
  }, /* @__PURE__ */ React.createElement("dl", {
    className: "flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between sm:block"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "font-medium text-gray-900"
  }, "Date placed"), /* @__PURE__ */ React.createElement("dd", {
    className: "sm:mt-1"
  }, /* @__PURE__ */ React.createElement("time", {
    dateTime: order.datetime
  }, order.date))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between pt-6 sm:block sm:pt-0"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "font-medium text-gray-900"
  }, "Order number"), /* @__PURE__ */ React.createElement("dd", {
    className: "sm:mt-1"
  }, order.number)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0"
  }, /* @__PURE__ */ React.createElement("dt", null, "Total amount"), /* @__PURE__ */ React.createElement("dd", {
    className: "sm:mt-1"
  }, order.total))), /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: order.invoiceHref,
    className: "mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
  }, "View Invoice", /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "for order ", order.number))), /* @__PURE__ */ React.createElement("table", {
    className: "mt-4 w-full text-gray-500 sm:mt-6"
  }, /* @__PURE__ */ React.createElement("caption", {
    className: "sr-only"
  }, "Products"), /* @__PURE__ */ React.createElement("thead", {
    className: "sr-only text-left text-sm text-gray-500 sm:not-sr-only"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3"
  }, "Product"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
  }, "Price"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "hidden py-3 pr-8 font-normal sm:table-cell"
  }, "Status"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "w-0 py-3 text-right font-normal"
  }, "Info"))), /* @__PURE__ */ React.createElement("tbody", {
    className: "divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t"
  }, order.products.map((product2) => /* @__PURE__ */ React.createElement("tr", {
    key: product2.id
  }, /* @__PURE__ */ React.createElement("td", {
    className: "py-6 pr-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product2.imageSrc,
    alt: product2.imageAlt,
    className: "mr-6 h-16 w-16 rounded object-cover object-center"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "font-medium text-gray-900"
  }, product2.name), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 sm:hidden"
  }, product2.price)))), /* @__PURE__ */ React.createElement("td", {
    className: "hidden py-6 pr-8 sm:table-cell"
  }, product2.price), /* @__PURE__ */ React.createElement("td", {
    className: "hidden py-6 pr-8 sm:table-cell"
  }, product2.status), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap py-6 text-right font-medium"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: product2.href,
    className: "text-indigo-600"
  }, "View", /* @__PURE__ */ React.createElement("span", {
    className: "hidden lg:inline"
  }, " Product"), /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, ", ", product2.name)))))))))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/products/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => Example6
});
init_react();
var import_react3 = require("react");
var import_react4 = require("@headlessui/react");
var import_outline2 = require("@heroicons/react/outline");
var import_remix7 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/Quantity.tsx
init_react();
var import_solid2 = require("@heroicons/react/solid");
function Quantity() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative inline-flex rounded-md shadow-sm"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Previous"), /* @__PURE__ */ React.createElement(import_solid2.MinusSmIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "quantity",
    className: "sr-only"
  }, "Quantity"), /* @__PURE__ */ React.createElement("input", {
    name: "quantity",
    id: "quantity",
    className: "flex w-16 border border-gray-300 px-2 text-center shadow-sm  sm:text-sm",
    placeholder: "1"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Next"), /* @__PURE__ */ React.createElement(import_solid2.PlusSmIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/products/$id.tsx
var product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" }
  ],
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright."
    }
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700"
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500"
    }
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Storage Information",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
      ]
    },
    {
      name: "Delivery Information",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
      ]
    },
    {
      name: "Promos",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
      ]
    }
  ]
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example6() {
  const [selectedColor, setSelectedColor] = (0, import_react3.useState)(product.colors[0]);
  const { id } = (0, import_remix7.useParams)();
  const prod3 = products.find((p) => p.id === Number(id));
  (0, import_tiny_invariant.default)(prod3, "error");
  const breads = [
    { label: "All Products", route: "/products" },
    { label: prod3.category, route: `/${prod3.category.toLowerCase()}` }
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: "mx-auto mt-8 mb-8 max-w-7xl lg:mt-0"
  }, /* @__PURE__ */ React.createElement("ol", {
    role: "list",
    className: "flex items-center"
  }, breads.map((breadcrumb) => /* @__PURE__ */ React.createElement("li", {
    key: breadcrumb.label
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: breadcrumb.route,
    className: " text-sm font-medium text-gray-900 hover:text-red-600"
  }, breadcrumb.label), /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    width: "24",
    height: "24",
    fill: "none",
    className: "mx-2 flex-none text-gray-300"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.75 8.75l3.5 3.25-3.5 3.25",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /* @__PURE__ */ React.createElement("li", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-current": "page",
    className: "font-medium text-red-400 hover:text-red-600"
  }, prod3.name)))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col-reverse"
  }, /* @__PURE__ */ React.createElement("img", {
    src: prod3.imageSrc,
    alt: prod3.imageAlt,
    className: "h-full w-full object-cover object-center sm:rounded-lg"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-extrabold tracking-tight text-gray-900"
  }, prod3.name), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "sr-only"
  }, "Product information"), /* @__PURE__ */ React.createElement("p", {
    className: "text-3xl font-semibold text-red-500"
  }, "\u20B1", prod3.price, " ")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "sr-only"
  }, "Description"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-base font-medium text-gray-900"
  }, prod3.weight ? `${prod3.weight} per quantity` : null), /* @__PURE__ */ React.createElement("p", {
    className: "space-y-6 text-base text-gray-700"
  }, prod3.description)), /* @__PURE__ */ React.createElement("form", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-md mb-2 font-medium text-gray-900"
  }, "Quantity"), /* @__PURE__ */ React.createElement(Quantity, null)), /* @__PURE__ */ React.createElement("div", {
    className: "sm:flex-col1 mt-10 flex"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-500 py-3 px-8 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
  }, "Add to cart"))), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "details-heading",
    className: "mt-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "details-heading",
    className: "sr-only"
  }, "Additional details"), /* @__PURE__ */ React.createElement("div", {
    className: "divide-y divide-gray-200 border-t"
  }, product.details.map((detail) => /* @__PURE__ */ React.createElement(import_react4.Disclosure, {
    as: "div",
    key: detail.name
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement(import_react4.Disclosure.Button, {
    className: "group relative flex w-full items-center justify-between py-6 text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: classNames(open ? "text-red-500 group-hover:text-red-600" : "text-gray-900", "text-sm font-medium")
  }, detail.name), /* @__PURE__ */ React.createElement("span", {
    className: "ml-6 flex items-center"
  }, open ? /* @__PURE__ */ React.createElement(import_outline2.MinusSmIcon, {
    className: "block h-6 w-6 text-red-500 group-hover:text-red-600",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(import_outline2.PlusSmIcon, {
    className: "block h-6 w-6 text-gray-400 group-hover:text-gray-500",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React.createElement(import_react4.Disclosure.Panel, {
    as: "div",
    className: "prose prose-sm pb-6"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list"
  }, detail.items.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item
  }, item)))))))))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => Example7
});
init_react();
var import_react5 = require("react");
var import_react6 = require("@headlessui/react");
var import_solid4 = require("@heroicons/react/solid");
var import_outline3 = require("@heroicons/react/outline");

// app/routes/cart.tsx
init_react();
var import_solid3 = require("@heroicons/react/solid");
var prod = [
  {
    id: 18,
    imageSrc: "/images/BF-premium-chicken.jpeg",
    imageAlt: "BF-premium-chicken",
    name: "Premium Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 41,
    imageSrc: "/images/Camille-beef-cubes-500g.jpeg",
    imageAlt: "Camille-beef-cubes-500g",
    name: "Beef Cubes",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  }
];

// route:/Users/jerichocalibuso/sp-app/app/routes/checkout.tsx
var paymentMethods = [
  { id: "gcash", title: "GCash", imageSrc: "/images/gcash-logo.png" },
  { id: "card", title: "Credit or debit card" },
  { id: "grabpay", title: "GrabPay", imageSrc: "/images/grabpay-logo.png" },
  { id: "paymaya", title: "PayMaya", imageSrc: "/images/paymaya-logo.png" },
  { id: "cod", title: "Cash on delivery" }
];
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example7() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = (0, import_react5.useState)(paymentMethods[0]);
  const products3 = prod;
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl px-4 pt-24 pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, "Checkout"), /* @__PURE__ */ React.createElement("h2", {
    className: "sr-only"
  }, "Checkout"), /* @__PURE__ */ React.createElement("form", {
    className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-medium text-gray-900"
  }, "Contact information"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "phone-number",
    className: "block text-sm font-medium text-gray-700"
  }, "Phone number"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "tel",
    id: "phone-number",
    name: "phone-number",
    autoComplete: "tel",
    className: "block w-full rounded-md border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 border-t border-gray-200 pt-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-medium text-gray-900"
  }, "Delivery information"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "first-name",
    className: "block text-sm font-medium text-gray-700"
  }, "First name"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "first-name",
    name: "first-name",
    autoComplete: "given-name",
    className: "block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "last-name",
    className: "block text-sm font-medium text-gray-700"
  }, "Last name"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "last-name",
    name: "last-name",
    autoComplete: "family-name",
    className: "block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "address",
    className: "block text-sm font-medium text-gray-700"
  }, "Address"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "address",
    id: "address",
    autoComplete: "street-address",
    className: "block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "city",
    className: "block text-sm font-medium text-gray-700"
  }, "City / Municipality"), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-1"
  }, /* @__PURE__ */ React.createElement("select", {
    name: "city",
    id: "city",
    autoComplete: "address-level2",
    className: "leading block w-full appearance-none rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "h-4 w-4 fill-current",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  }))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "region",
    className: "block text-sm font-medium text-gray-700"
  }, "Province"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "region",
    id: "region",
    value: "Cavite",
    disabled: true,
    autoComplete: "address-level1",
    className: "block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border disabled:text-gray-500  sm:text-sm"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 border-t border-gray-200 pt-5"
  }, /* @__PURE__ */ React.createElement(import_react6.RadioGroup, {
    value: selectedPaymentMethod,
    onChange: setSelectedPaymentMethod
  }, /* @__PURE__ */ React.createElement(import_react6.RadioGroup.Label, {
    className: "text-lg font-medium text-gray-900"
  }, "Payment method"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
  }, paymentMethods.map((paymentMethod) => /* @__PURE__ */ React.createElement(import_react6.RadioGroup.Option, {
    key: paymentMethod.id,
    value: paymentMethod,
    className: ({ checked, active }) => classNames2(checked ? "border-transparent" : "border-gray-300", active ? "ring-2 ring-green-500" : "", "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none")
  }, ({ checked, active }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, paymentMethod.id === "card" && /* @__PURE__ */ React.createElement(import_solid4.CreditCardIcon, {
    className: " mr-2 w-10 text-green-500"
  }), paymentMethod.id === "cod" && /* @__PURE__ */ React.createElement(import_outline3.CashIcon, {
    className: " mr-2 w-8 text-green-500"
  }), /* @__PURE__ */ React.createElement(import_react6.RadioGroup.Label, {
    as: "span",
    className: "flex text-base font-medium text-gray-900"
  }, (paymentMethod == null ? void 0 : paymentMethod.imageSrc) ? /* @__PURE__ */ React.createElement("img", {
    src: paymentMethod.imageSrc,
    alt: paymentMethod.id,
    className: "w-24"
  }) : paymentMethod.title))), checked ? /* @__PURE__ */ React.createElement(import_solid4.CheckCircleIcon, {
    className: "h-5 w-5 text-green-500",
    "aria-hidden": "true"
  }) : null, /* @__PURE__ */ React.createElement("div", {
    className: classNames2(active ? "border" : "border-2", checked ? "border-green-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"),
    "aria-hidden": "true"
  })))))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 lg:mt-0"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-medium text-gray-900"
  }, "Order summary"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 rounded-lg border border-gray-200 bg-white shadow-sm"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "sr-only"
  }, "Items in your cart"), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "divide-y divide-gray-200"
  }, products3.map((product2) => /* @__PURE__ */ React.createElement("li", {
    key: product2.id,
    className: "flex py-6 px-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product2.imageSrc,
    alt: product2.imageAlt,
    className: "w-40 rounded-md"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-6 flex flex-1 flex-col pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-lg"
  }, /* @__PURE__ */ React.createElement("a", {
    href: `/products/${product2.id}`,
    className: "font-medium text-gray-700 hover:text-red-800"
  }, product2.name)), /* @__PURE__ */ React.createElement("p", {
    className: "text-md mt-1 text-red-500"
  }, "\u20B1", product2.price), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 "
  }, /* @__PURE__ */ React.createElement(Quantity, null))), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 flow-root flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-red-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Remove"), /* @__PURE__ */ React.createElement(import_solid4.TrashIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 items-end justify-between pt-2"
  }))))), /* @__PURE__ */ React.createElement("dl", {
    className: "space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm"
  }, "Subtotal"), /* @__PURE__ */ React.createElement("dd", {
    className: "text-sm font-medium text-gray-900"
  }, "\u20B11000")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm"
  }, "Delivery fee"), /* @__PURE__ */ React.createElement("dd", {
    className: "text-sm font-medium text-gray-900  line-through"
  }, "\u20B150")), /* @__PURE__ */ React.createElement("p", {
    className: "text-right text-sm font-medium text-gray-900"
  }, "Free delivery promo applied"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between border-t border-gray-200 pt-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-base font-medium"
  }, "Total amount"), /* @__PURE__ */ React.createElement("dd", {
    className: "text-base font-medium text-red-500"
  }, "\u20B11000"))), /* @__PURE__ */ React.createElement("div", {
    className: "border-t border-gray-200 py-6 px-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "w-full rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
  }, "Confirm order")))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/chicken.tsx
var chicken_exports = {};
__export(chicken_exports, {
  default: () => ChickenPage
});
init_react();
function ChickenPage() {
  return /* @__PURE__ */ React.createElement(ProductsPage, {
    onlyCategory: "Chicken" /* CHICKEN */
  });
}

// route:/Users/jerichocalibuso/sp-app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexPage
});
init_react();
var import_react7 = require("react");
var import_remix8 = __toESM(require_remix());
var trendingProducts = [
  {
    id: 2,
    imageSrc: "/images/BF-chicken-breast-fillets-860g.jpeg",
    imageAlt: "BF-chicken-breast-fillets-860g",
    name: "Chicken Breasts Fillets",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!"
  },
  {
    id: 3,
    imageSrc: "/images/BF-chicken-breasts-860g.jpeg",
    imageAlt: "BF-chicken-breasts-860g",
    name: "Chicken Breasts",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!"
  },
  {
    id: 4,
    imageSrc: "/images/BF-chicken-leg-quarters-860g.jpeg",
    imageAlt: "BF-chicken-leg-quarters-860g",
    name: "Chicken Leg Quarters",
    weight: "860g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 180,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!"
  },
  {
    id: 5,
    imageSrc: "/images/BF-chicken-nuggets-200g.jpeg",
    imageAlt: "BF-chicken-nuggets-200g",
    name: "Chicken Nuggets",
    weight: "200g",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 100,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!"
  }
];
var categories = [
  {
    name: "Chicken",
    imageSrc: "/images/category-chicken2.jpg",
    imageAlt: "category-chicken",
    href: "/chicken"
  },
  {
    name: "Pork",
    imageSrc: "/images/category-pork2.jpg",
    imageAlt: "category-pork",
    href: "/pork"
  },
  {
    name: "Beef",
    imageSrc: "/images/category-beef2.jpg",
    imageAlt: "category-beef",
    href: "/beef"
  }
];
var testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis autem, impedit dignissimos quidem cumque libero ea quam porro tempore.",
    attribution: "Sherrilyn Reyes, Camella Lessandra"
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis autem, impedit dignissimos quidem cumque libero ea quam porro tempore.",
    attribution: "Jason Orqueza, Parklane Country Homes"
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis autem, impedit dignissimos quidem cumque libero ea quam porro tempore.",
    attribution: "Evan Angelo Monreal, Lumina Homes"
  }
];
function IndexPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border-b border-gray-200 lg:border-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute hidden h-full w-1/2 bg-gray-50 lg:block"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-gray-50 lg:bg-transparent"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl py-24 md:pt-40 lg:max-w-none lg:py-64"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:pr-16"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
  }, "Quality meats at your fingertips"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-xl text-gray-600"
  }, "Choose from our wide selection of freshly prepared meats straight to your door."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/products",
    className: "inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-red-700 "
  }, "Start shopping")))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-48 w-full justify-center sm:h-80 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/hero-fresh-meat.jpg",
    alt: "hero-fresh-meat",
    className: "h-full w-full object-cover object-center"
  })))), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "trending-heading",
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:py-32 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between px-4 sm:px-6 lg:px-0"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "trending-heading",
    className: "text-3xl font-extrabold tracking-tight text-gray-900"
  }, "Bestsellers"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/products",
    className: "hidden text-sm font-semibold text-red-600 hover:text-red-500 sm:block"
  }, "See all products", /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, " \u2192"))), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-full overflow-x-auto"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
  }, trendingProducts.map((product2) => /* @__PURE__ */ React.createElement("li", {
    key: product2.id,
    className: "inline-flex w-64 flex-col text-center lg:w-auto "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "group relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product2.imageSrc,
    alt: product2.imageAlt,
    className: "h-full w-full object-cover object-center group-hover:opacity-75"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mt-1 font-semibold text-gray-900 hover:text-red-600"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: `/products/${product2.id}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-0 "
  }), product2.name)), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-red-500 hover:text-red-400"
  }, "\u20B1", product2.price)))))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-12 px-4 sm:hidden"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "#",
    className: "text-sm font-semibold text-red-600 hover:text-red-500"
  }, "See all products", /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, " \u2192"))))), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "categories-heading",
    className: "bg-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "categories-heading",
    className: "text-3xl font-extrabold text-gray-900"
  }, "Categories"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
  }, categories.map((category) => /* @__PURE__ */ React.createElement("div", {
    key: category.name,
    className: "group relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64"
  }, /* @__PURE__ */ React.createElement("img", {
    src: category.imageSrc,
    alt: category.imageAlt,
    className: "h-full w-full object-cover object-center"
  })), /* @__PURE__ */ React.createElement("h3", {
    className: "mt-6 text-lg font-semibold text-gray-900 hover:text-red-600"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: category.href
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-0"
  }), category.name)))))))), /* @__PURE__ */ React.createElement("div", {
    className: "relative overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 mx-auto max-w-full overflow-hidden"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/sale-delivery.jpeg",
    alt: "",
    className: "h-full w-full object-cover object-center"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 bg-white bg-opacity-60"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-white via-white"
  })), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "sale-heading",
    className: "relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl lg:max-w-none"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "sale-heading",
    className: "text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
  }, "Free delivery for orders worth", " ", /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600"
  }, "\u20B1500"), " and above*"), /* @__PURE__ */ React.createElement("p", {
    className: "mx-auto mt-4 max-w-xl text-xl text-gray-600"
  }, "*within the 3.3 km radius of Parklane Country Homes"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/products",
    className: "hover:pointer mt-6 inline-block w-full rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-red-700 sm:w-auto"
  }, "Start shopping"))), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "testimonial-heading",
    className: "relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl lg:max-w-none"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "testimonial-heading",
    className: "mt-2 text-3xl font-extrabold tracking-tight text-gray-900"
  }, "What are people saying?"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
  }, testimonials.map((testimonial) => /* @__PURE__ */ React.createElement("blockquote", {
    key: testimonial.id,
    className: "sm:flex lg:block"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 18,
    viewBox: "0 0 24 18",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    className: "flex-shrink-0 text-red-600"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg text-gray-600"
  }, testimonial.quote), /* @__PURE__ */ React.createElement("cite", {
    className: "mt-4 block font-semibold not-italic text-gray-900"
  }, testimonial.attribution))))))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Example8
});
init_react();
var import_react8 = require("@remix-run/react");

// app/services/auth.server.ts
init_react();
var import_client2 = require("@prisma/client");
var import_remix_auth = require("remix-auth");

// app/services/session.server.ts
init_react();
var import_remix9 = __toESM(require_remix());
var sessionStorage = (0, import_remix9.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["s3cr3t"],
    secure: false
  }
});
var { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
var import_remix_auth_form = require("remix-auth-form");
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/services/auth.server.ts
var authenticator = new import_remix_auth.Authenticator(sessionStorage);
authenticator.use(new import_remix_auth_form.FormStrategy(async ({ form, context }) => {
  const username = form.get("username");
  const password = form.get("password");
  (0, import_tiny_invariant2.default)(typeof username === "string", "username must be a string");
  (0, import_tiny_invariant2.default)(username.length > 0, "username must not be empty");
  (0, import_tiny_invariant2.default)(typeof password === "string", "password must be a string");
  (0, import_tiny_invariant2.default)(password.length > 0, "password must not be empty");
  const hashedPassword = await import_bcryptjs.default.hash(password, 10);
  const user = await db.user.upsert({
    where: {
      username
    },
    update: {},
    create: {
      username,
      password: hashedPassword,
      role: import_client2.Role.CUSTOMER
    }
  });
  return user;
}), "user-pass");

// route:/Users/jerichocalibuso/sp-app/app/routes/login.tsx
var action = async ({ request }) => {
  await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login"
  });
  return null;
};
function Example8() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-full pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto w-full max-w-sm lg:w-96"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-3xl font-extrabold text-gray-900"
  }, "Sign in to your account"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm text-gray-600"
  }, "Or", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-red-600 hover:text-red-500"
  }, "sign up for an account"))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm font-medium text-gray-700"
  }, "Sign in with"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 grid grid-cols-2 gap-3"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Sign in with Facebook"), /* @__PURE__ */ React.createElement("svg", {
    className: "h-5 w-5",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Sign in with Google"), /* @__PURE__ */ React.createElement("svg", {
    className: "h-5 w-5",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
  }), " "))))), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 flex items-center",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full border-t border-gray-300"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative flex justify-center text-sm"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bg-white px-2 text-gray-500"
  }, "Or continue with")))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement(import_react8.Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username",
    className: "block text-sm font-medium text-gray-700"
  }, "Username"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "username",
    name: "username",
    type: "username",
    autoComplete: "username",
    required: true,
    className: "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-red-600 hover:text-red-500"
  }, "Forgot your password?"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
  }, "Sign in"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "relative hidden w-0 flex-1 lg:block"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "absolute inset-0 h-full w-full object-cover",
    src: "/images/hero-fresh-meat2.jpg",
    alt: "fresh chicken pork meat and beef"
  }))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/sales.tsx
var sales_exports = {};
__export(sales_exports, {
  default: () => Example9
});
init_react();
var import_react9 = require("react");
var import_outline4 = require("@heroicons/react/outline");
var import_solid5 = require("@heroicons/react/solid");
var cards = [
  {
    name: "Total Gross Sales",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase"
  },
  {
    name: "Average Order Amount",
    stat: "1123",
    previousStat: "774",
    change: "145%",
    changeType: "increase"
  },
  {
    name: "Average Order Completion Rate",
    stat: "90%",
    previousStat: "95%",
    change: "5%",
    changeType: "decrease"
  }
];
var transactions = [
  {
    id: 1,
    name: "123-456",
    href: "#",
    amount: "\u20B11,000",
    status: "Completed",
    date: "January 11, 2022",
    datetime: "2022-01-11"
  },
  {
    id: 1,
    name: "123-456",
    href: "#",
    amount: "\u20B11,000",
    status: "Completed",
    date: "January 11, 2022",
    datetime: "2022-01-11"
  },
  {
    id: 1,
    name: "123-456",
    href: "#",
    amount: "\u20B11,000",
    status: "Completed",
    date: "January 11, 2022",
    datetime: "2022-01-11"
  },
  {
    id: 1,
    name: "123-456",
    href: "#",
    amount: "\u20B11,000",
    status: "Completed",
    date: "January 11, 2022",
    datetime: "2022-01-11"
  },
  {
    id: 1,
    name: "123-456",
    href: "#",
    amount: "\u20B11,000",
    status: "Completed",
    date: "January 11, 2022",
    datetime: "2022-01-11"
  },
  {
    id: 1,
    name: "123-456",
    href: "#",
    amount: "\u20B11,000",
    status: "Completed",
    date: "January 11, 2022",
    datetime: "2022-01-11"
  },
  {
    id: 1,
    name: "123-456",
    href: "#",
    amount: "\u20B11,000",
    status: "Completed",
    date: "January 11, 2022",
    datetime: "2022-01-11"
  }
];
function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example9() {
  const [sidebarOpen, setSidebarOpen] = (0, import_react9.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " bg-white px-4 py-5 pt-24 sm:px-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl font-extrabold leading-6 text-gray-900"
  }, "Sales Dashboard"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-sm text-gray-500"
  }, "Analyze sales from completed orders.")), /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "flex-1 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-bold leading-6 text-gray-900"
  }, "Overview"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 flex justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-52 w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x"
  }, cards.map((card) => /* @__PURE__ */ React.createElement("div", {
    key: card.name,
    className: " px-4 py-5 sm:p-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-base font-normal text-gray-900"
  }, card.name), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 flex items-baseline justify-between md:block lg:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-baseline text-2xl font-semibold text-gray-900"
  }, card.stat, /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 text-sm font-medium text-gray-500"
  }, "from ", card.previousStat)), /* @__PURE__ */ React.createElement("div", {
    className: classNames3(card.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0")
  }, card.changeType === "increase" ? /* @__PURE__ */ React.createElement(import_outline4.ArrowSmUpIcon, {
    className: "-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(import_solid5.ArrowSmDownIcon, {
    className: "-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, card.changeType === "increase" ? "Increased" : "Decreased", " ", "by"), card.change)))))), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-8 px-4 text-xl font-bold leading-6 text-gray-900 sm:px-6 lg:px-8"
  }, "Completed orders"), /* @__PURE__ */ React.createElement("div", {
    className: "shadow sm:hidden"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
  }, transactions.map((transaction) => /* @__PURE__ */ React.createElement("li", {
    key: transaction.id
  }, /* @__PURE__ */ React.createElement("a", {
    href: transaction.href,
    className: "block bg-white px-4 py-4 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex items-center space-x-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex flex-1 space-x-2 truncate"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex flex-col truncate text-sm text-gray-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "truncate"
  }, transaction.name), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-medium text-gray-900"
  }, transaction.amount), " "), /* @__PURE__ */ React.createElement("time", {
    dateTime: transaction.datetime
  }, transaction.date)))))))), /* @__PURE__ */ React.createElement("nav", {
    className: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3",
    "aria-label": "Pagination"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 justify-between"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
  }, "Previous"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
  }, "Next")))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Order Id"), /* @__PURE__ */ React.createElement("th", {
    className: "bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Amount"), /* @__PURE__ */ React.createElement("th", {
    className: "hidden bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:block"
  }, "Status"), /* @__PURE__ */ React.createElement("th", {
    className: "bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
  }, "Date"))), /* @__PURE__ */ React.createElement("tbody", {
    className: "divide-y divide-gray-200 bg-white"
  }, transactions.map((transaction) => /* @__PURE__ */ React.createElement("tr", {
    key: transaction.id,
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("td", {
    className: "w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("a", {
    href: transaction.href,
    className: "group inline-flex space-x-2 truncate text-sm"
  }, /* @__PURE__ */ React.createElement(import_solid5.CashIcon, {
    className: "h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "truncate text-gray-500 group-hover:text-gray-900"
  }, transaction.name)))), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-medium text-gray-900"
  }, transaction.amount, " ")), /* @__PURE__ */ React.createElement("td", {
    className: "hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: classNames3("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize")
  }, transaction.status)), /* @__PURE__ */ React.createElement("td", {
    className: "whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500"
  }, /* @__PURE__ */ React.createElement("time", {
    dateTime: transaction.datetime
  }, transaction.date)))))), /* @__PURE__ */ React.createElement("nav", {
    className: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6",
    "aria-label": "Pagination"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-700"
  }, "Showing ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "1"), " to", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "10"), " of", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "20"), " results")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 justify-between sm:justify-end"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
  }, "Previous"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
  }, "Next")))))))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/beef.tsx
var beef_exports = {};
__export(beef_exports, {
  default: () => ChickenPage2
});
init_react();
function ChickenPage2() {
  return /* @__PURE__ */ React.createElement(ProductsPage, {
    onlyCategory: "Beef" /* BEEF */
  });
}

// route:/Users/jerichocalibuso/sp-app/app/routes/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Example10,
  prod: () => prod2
});
init_react();
var import_solid6 = require("@heroicons/react/solid");
var import_remix10 = __toESM(require_remix());
var prod2 = [
  {
    id: 18,
    imageSrc: "/images/BF-premium-chicken.jpeg",
    imageAlt: "BF-premium-chicken",
    name: "Premium Chicken",
    weight: "",
    brand: "Bounty Fresh" /* BOUNTY_FRESH */,
    category: "Chicken" /* CHICKEN */,
    price: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  },
  {
    id: 41,
    imageSrc: "/images/Camille-beef-cubes-500g.jpeg",
    imageAlt: "Camille-beef-cubes-500g",
    name: "Beef Cubes",
    weight: "500g",
    brand: "Camille" /* CAMILLE */,
    category: "Beef" /* BEEF */,
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus."
  }
];
function Example10() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl px-4 pt-24 pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, "Shopping Cart"), /* @__PURE__ */ React.createElement("form", {
    className: "mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
  }, /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "cart-heading",
    className: "lg:col-span-7"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "cart-heading",
    className: "sr-only"
  }, "Items in your shopping cart"), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "divide-y divide-gray-200 border-t border-b border-gray-200"
  }, prod2.map((product2, productIdx) => /* @__PURE__ */ React.createElement("li", {
    key: product2.id,
    className: "flex pt-6 pb-3 sm:pt-10 sm:pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product2.imageSrc,
    alt: product2.imageAlt,
    className: "h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "justify-betweensm:ml-6 ml-4 flex flex-1 flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-lg sm:text-xl"
  }, /* @__PURE__ */ React.createElement("a", {
    href: `products/${product2.id}`,
    className: "font-medium text-gray-900 hover:text-red-500"
  }, product2.name))), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-base font-medium text-red-500 sm:text-lg"
  }, "\u20B1", product2.price), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement(Quantity, null))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 sm:mt-0 sm:pr-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-0 right-0"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-m-2 inline-flex p-2 pt-2.5 text-gray-400 hover:text-red-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Remove"), /* @__PURE__ */ React.createElement(import_solid6.TrashIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })))))))))), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "summary-heading",
    className: "mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "summary-heading",
    className: "text-lg font-medium text-gray-900"
  }, "Order summary"), /* @__PURE__ */ React.createElement("dl", {
    className: "mt-6 space-y-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm text-gray-600"
  }, "Subtotal"), /* @__PURE__ */ React.createElement("dd", {
    className: "text-sm font-medium text-gray-900"
  }, "\u20B11000")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between border-t border-gray-200 pt-4"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "flex items-center text-sm text-gray-600"
  }, /* @__PURE__ */ React.createElement("span", null, "Delivery fee"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Delivery fee"), /* @__PURE__ */ React.createElement(import_solid6.QuestionMarkCircleIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("dd", {
    className: "text-right text-sm font-medium text-gray-900 "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "line-through"
  }, "\u20B150"))), /* @__PURE__ */ React.createElement("p", {
    className: "text-right text-sm font-medium text-gray-900"
  }, "Free delivery promo applied"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between border-t border-gray-200 pt-4"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-base font-medium text-gray-900"
  }, "Total amount"), /* @__PURE__ */ React.createElement("dd", {
    className: "text-base font-medium text-red-500"
  }, "\u20B11000"))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/checkout"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "w-full rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
  }, "Checkout")))))));
}

// route:/Users/jerichocalibuso/sp-app/app/routes/pork.tsx
var pork_exports = {};
__export(pork_exports, {
  default: () => ChickenPage3
});
init_react();
function ChickenPage3() {
  return /* @__PURE__ */ React.createElement(ProductsPage, {
    onlyCategory: "Pork" /* PORK */
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "0aa0c686", "entry": { "module": "/build/entry.client-FEJ5CBGZ.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-GB2TY6JV.js", "/build/_shared/chunk-LOJYUFPY.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YS4WKYJZ.js", "imports": ["/build/_shared/chunk-LIGQLKHA.js", "/build/_shared/chunk-6NXT52CW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/assigned-orders": { "id": "routes/assigned-orders", "parentId": "root", "path": "assigned-orders", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/assigned-orders-UWD4SU5M.js", "imports": ["/build/_shared/chunk-DYE43TOO.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/beef": { "id": "routes/beef", "parentId": "root", "path": "beef", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/beef-WTAA3CCK.js", "imports": ["/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/cart": { "id": "routes/cart", "parentId": "root", "path": "cart", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/cart-I3MBLJDU.js", "imports": ["/build/_shared/chunk-WR3QS2FE.js", "/build/_shared/chunk-Z766LFRC.js", "/build/_shared/chunk-DYE43TOO.js", "/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/checkout": { "id": "routes/checkout", "parentId": "root", "path": "checkout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/checkout-2NU5BRTW.js", "imports": ["/build/_shared/chunk-WR3QS2FE.js", "/build/_shared/chunk-Z766LFRC.js", "/build/_shared/chunk-DYE43TOO.js", "/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/chicken": { "id": "routes/chicken", "parentId": "root", "path": "chicken", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/chicken-PW6MKRZ5.js", "imports": ["/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-PDHUCZUS.js", "imports": ["/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-JDKUZZVW.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/manage-orders": { "id": "routes/manage-orders", "parentId": "root", "path": "manage-orders", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/manage-orders-MBLPQBP4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/manage-products": { "id": "routes/manage-products", "parentId": "root", "path": "manage-products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/manage-products-EQUYJ54S.js", "imports": ["/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/order-history": { "id": "routes/order-history", "parentId": "root", "path": "order-history", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/order-history-DXHWOOAC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pork": { "id": "routes/pork", "parentId": "root", "path": "pork", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pork-DJNJEMG5.js", "imports": ["/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products/$id": { "id": "routes/products/$id", "parentId": "root", "path": "products/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products/$id-J7NWL6MY.js", "imports": ["/build/_shared/chunk-Z766LFRC.js", "/build/_shared/chunk-DYE43TOO.js", "/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products/index": { "id": "routes/products/index", "parentId": "root", "path": "products", "index": true, "caseSensitive": void 0, "module": "/build/routes/products/index-AT6V5SDF.js", "imports": ["/build/_shared/chunk-I7ZISI3E.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sales": { "id": "routes/sales", "parentId": "root", "path": "sales", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sales-O5QV2T7L.js", "imports": ["/build/_shared/chunk-DYE43TOO.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-0AA0C686.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/assigned-orders": {
    id: "routes/assigned-orders",
    parentId: "root",
    path: "assigned-orders",
    index: void 0,
    caseSensitive: void 0,
    module: assigned_orders_exports
  },
  "routes/manage-products": {
    id: "routes/manage-products",
    parentId: "root",
    path: "manage-products",
    index: void 0,
    caseSensitive: void 0,
    module: manage_products_exports
  },
  "routes/products/index": {
    id: "routes/products/index",
    parentId: "root",
    path: "products",
    index: true,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/manage-orders": {
    id: "routes/manage-orders",
    parentId: "root",
    path: "manage-orders",
    index: void 0,
    caseSensitive: void 0,
    module: manage_orders_exports
  },
  "routes/order-history": {
    id: "routes/order-history",
    parentId: "root",
    path: "order-history",
    index: void 0,
    caseSensitive: void 0,
    module: order_history_exports
  },
  "routes/products/$id": {
    id: "routes/products/$id",
    parentId: "root",
    path: "products/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/chicken": {
    id: "routes/chicken",
    parentId: "root",
    path: "chicken",
    index: void 0,
    caseSensitive: void 0,
    module: chicken_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/sales": {
    id: "routes/sales",
    parentId: "root",
    path: "sales",
    index: void 0,
    caseSensitive: void 0,
    module: sales_exports
  },
  "routes/beef": {
    id: "routes/beef",
    parentId: "root",
    path: "beef",
    index: void 0,
    caseSensitive: void 0,
    module: beef_exports
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  },
  "routes/pork": {
    id: "routes/pork",
    parentId: "root",
    path: "pork",
    index: void 0,
    caseSensitive: void 0,
    module: pork_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Vycm9yLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvYXNzaWduZWQtb3JkZXJzLnRzeCIsICJyb3V0ZTovVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL21hbmFnZS1wcm9kdWN0cy50c3giLCAiLi4vYXBwL3JvdXRlcy9wcm9kdWN0cy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9wcm9kdWN0cy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9tYW5hZ2Utb3JkZXJzLnRzeCIsICJyb3V0ZTovVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL29yZGVyLWhpc3RvcnkudHN4IiwgInJvdXRlOi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvcHJvZHVjdHMvJGlkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9RdWFudGl0eS50c3giLCAicm91dGU6L1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9jaGVja291dC50c3giLCAiLi4vYXBwL3JvdXRlcy9jYXJ0LnRzeCIsICJyb3V0ZTovVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL2NoaWNrZW4udHN4IiwgInJvdXRlOi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgIi4uL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZlci50cyIsICIuLi9hcHAvc2VydmljZXMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL3NhbGVzLnRzeCIsICJyb3V0ZTovVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL2JlZWYudHN4IiwgInJvdXRlOi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvY2FydC50c3giLCAicm91dGU6L1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9wb3JrLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL2Fzc2lnbmVkLW9yZGVycy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9tYW5hZ2UtcHJvZHVjdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvcHJvZHVjdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvbWFuYWdlLW9yZGVycy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9vcmRlci1oaXN0b3J5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL3Byb2R1Y3RzLyRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9jaGVja291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9jaGlja2VuLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL2plcmljaG9jYWxpYnVzby9zcC1hcHAvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9qZXJpY2hvY2FsaWJ1c28vc3AtYXBwL2FwcC9yb3V0ZXMvc2FsZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL2JlZWYudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL2NhcnQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvVXNlcnMvamVyaWNob2NhbGlidXNvL3NwLWFwcC9hcHAvcm91dGVzL3BvcmsudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9hc3NpZ25lZC1vcmRlcnNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fzc2lnbmVkLW9yZGVyc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhc3NpZ25lZC1vcmRlcnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL21hbmFnZS1wcm9kdWN0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWFuYWdlLXByb2R1Y3RzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1hbmFnZS1wcm9kdWN0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvZHVjdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2R1Y3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2R1Y3RzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWFuYWdlLW9yZGVyc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWFuYWdlLW9yZGVyc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtYW5hZ2Utb3JkZXJzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9vcmRlci1oaXN0b3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9vcmRlci1oaXN0b3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm9yZGVyLWhpc3RvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzLyRpZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvZHVjdHMvJGlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2R1Y3RzLzppZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hlY2tvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NoZWNrb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoZWNrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9jaGlja2VuXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGlja2VuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoaWNrZW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL3NhbGVzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zYWxlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzYWxlc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2JlZWZcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2JlZWZcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmVlZlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL2NhcnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2FydFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL3BvcmtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BvcmtcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9ya1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUNhdGNoLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4vY29tcG9uZW50cy9FcnJvcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3RlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICAgIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9zdmcnLCBocmVmOiAnL2ltYWdlcy9sb2dvLnBuZycgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ0NhbWlsbGUgTWVhdCBTaG9wJyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8RXJyb3IgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gPExpdmVSZWxvYWQgLz4gOiBudWxsfVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGlhbG9nLCBQb3BvdmVyLCBUYWIsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7XG4gIE1lbnVJY29uLFxuICBTZWFyY2hJY29uLFxuICBTaG9wcGluZ0NhcnRJY29uLFxuICBVc2VySWNvbixcbiAgWEljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuY29uc3QgY3VycmVuY2llcyA9IFsnQ0FEZHMnLCAnVVNEJywgJ0FVRCcsICdFVVInLCAnR0JQJ11cbmNvbnN0IG5hdmlnYXRpb24gPSB7XG4gIHBhZ2VzOiBbXG4gICAgeyBuYW1lOiAnQWxsIFByb2R1Y3RzJywgaHJlZjogJy9wcm9kdWN0cycgfSxcbiAgICB7IG5hbWU6ICdDaGlja2VuJywgaHJlZjogJy9jaGlja2VuJyB9LFxuICAgIHsgbmFtZTogJ1BvcmsnLCBocmVmOiAnL3BvcmsnIH0sXG4gICAgeyBuYW1lOiAnQmVlZicsIGhyZWY6ICdiZWVmJyB9LFxuICBdLFxufVxuXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcbiAgY29uc3QgW21vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e21vYmlsZU1lbnVPcGVufSBhcz17RnJhZ21lbnR9PlxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgYXM9J2RpdidcbiAgICAgICAgICBjbGFzc05hbWU9J2ZpeGVkIGluc2V0LTAgei01MCBmbGV4IGxnOmhpZGRlbidcbiAgICAgICAgICBvbkNsb3NlPXtzZXRNb2JpbGVNZW51T3Blbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICBlbnRlcj0ndHJhbnNpdGlvbi1vcGFjaXR5IGVhc2UtbGluZWFyIGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICAgIGVudGVyRnJvbT0nb3BhY2l0eS0wJ1xuICAgICAgICAgICAgZW50ZXJUbz0nb3BhY2l0eS0xMDAnXG4gICAgICAgICAgICBsZWF2ZT0ndHJhbnNpdGlvbi1vcGFjaXR5IGVhc2UtbGluZWFyIGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICAgIGxlYXZlRnJvbT0nb3BhY2l0eS0xMDAnXG4gICAgICAgICAgICBsZWF2ZVRvPSdvcGFjaXR5LTAnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT0nZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1JyAvPlxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cblxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICBlbnRlcj0ndHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtJ1xuICAgICAgICAgICAgZW50ZXJGcm9tPSctdHJhbnNsYXRlLXgtZnVsbCdcbiAgICAgICAgICAgIGVudGVyVG89J3RyYW5zbGF0ZS14LTAnXG4gICAgICAgICAgICBsZWF2ZT0ndHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtJ1xuICAgICAgICAgICAgbGVhdmVGcm9tPSd0cmFuc2xhdGUteC0wJ1xuICAgICAgICAgICAgbGVhdmVUbz0nLXRyYW5zbGF0ZS14LWZ1bGwnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggdy1mdWxsIG1heC13LXhzIGZsZXgtY29sIG92ZXJmbG93LXktYXV0byBiZy13aGl0ZSBwYi0xMiBzaGFkb3cteGwnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBweC00IHB0LTUgcGItMi41Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9Jy1tLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgcC0yIHRleHQtZ3JheS00MDAnXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVNZW51T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5DbG9zZSBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT0naC02IHctNicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBMaW5rcyAqL31cbiAgICAgICAgICAgICAgPFRhYi5Hcm91cCBhcz0nZGl2JyBjbGFzc05hbWU9J210LTInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXItYiBib3JkZXItZ3JheS0yMDAnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxUYWIuUGFuZWxzIGFzPXtGcmFnbWVudH0+PC9UYWIuUGFuZWxzPlxuICAgICAgICAgICAgICA8L1RhYi5Hcm91cD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS02IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBweS02IHB4LTQnPlxuICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLnBhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdmbG93LXJvb3QnPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIHRvPXtwYWdlLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSctbS0yIGJsb2NrIHAtMiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTYgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB5LTYgcHgtNCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zsb3ctcm9vdCc+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0bz0nIydcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSctbS0yIGJsb2NrIHAtMiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYW4gYWNjb3VudFxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbG93LXJvb3QnPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdG89JyMnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nLW0tMiBibG9jayBwLTIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS02IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBweS02IHB4LTQnPlxuICAgICAgICAgICAgICAgIHsvKiBDdXJyZW5jeSBzZWxlY3RvciAqL31cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbW9iaWxlLWN1cnJlbmN5JyBjbGFzc05hbWU9J3NyLW9ubHknPlxuICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbmN5XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncm91cCByZWxhdGl2ZSAtbWwtMiByb3VuZGVkLW1kIGJvcmRlci10cmFuc3BhcmVudCBmb2N1cy13aXRoaW46cmluZy0yIGZvY3VzLXdpdGhpbjpyaW5nLXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nbW9iaWxlLWN1cnJlbmN5J1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY3VycmVuY3knXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLW5vbmUgcHktMC41IHBsLTIgcHItNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZ3JvdXAtaG92ZXI6dGV4dC1yZWQtNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcCgoY3VycmVuY3kpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2N1cnJlbmN5fT57Y3VycmVuY3l9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLTUgdy01IHRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScxLjUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTYgOGw0IDQgNC00J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgICA8L1RyYW5zaXRpb24uUm9vdD5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgPG5hdiBhcmlhLWxhYmVsPSdUb3AnPlxuICAgICAgICAgIHsvKiBTZWNvbmRhcnkgbmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei00MCBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgIHsvKiBMb2dvIChsZyspICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPkNhbWlsbGUgTWVhdCBTaG9wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC04IHctYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9sb2dvLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nQ2FtaWxsZSBNZWF0IFNob3AgTG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBoLWZ1bGwgbGc6ZmxleCc+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBNZWdhIG1lbnVzICovfVxuICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5Hcm91cCBjbGFzc05hbWU9J21sLTgnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTgnPlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ucGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYWdlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LXJlZC02MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSBhbmQgc2VhcmNoIChsZy0pICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xIGl0ZW1zLWNlbnRlciBsZzpoaWRkZW4nPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nLW1sLTIgcm91bmRlZC1tZCBiZy13aGl0ZSBwLTIgdGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudU9wZW4odHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Nb2JpbGVNZW51T3BlbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9J2gtNiB3LTYnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogU2VhcmNoICovfVxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIHRvPScjJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtMiBwLTIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXJlZC02MDAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlNlYXJjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9J2gtNiB3LTYnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIExvZ28gKGxnLSkgKi99XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPSdsZzpoaWRkZW4nPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPkNhbWlsbGUgTWVhdCBTaG9wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy9sb2dvLnBuZycgYWx0PScnIGNsYXNzTmFtZT0naC04IHctYXV0bycgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBsZzptbC04Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBsZzpmbGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nIydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9Jy1tLTIgcC0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1yZWQtNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5TZWFyY2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC02IHctNidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89JyMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSctbS0yIHAtMiB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtcmVkLTYwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+QWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gY2xhc3NOYW1lPSdoLTYgdy02JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteC00IGgtNiB3LXB4IGJnLWdyYXktMjAwIGxnOm14LTYnXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zsb3ctcm9vdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL2NhcnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JvdXAgLW0tMiBmbGV4IGl0ZW1zLWNlbnRlciBwLTInXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLTYgdy02IGZsZXgtc2hyaW5rLTAgdGV4dC1ncmF5LTQwMCBncm91cC1ob3Zlcjp0ZXh0LXJlZC02MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgZ3JvdXAtaG92ZXI6dGV4dC1yZWQtNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyBpbiBjYXJ0LCB2aWV3IGJhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTYgZmxleCBtaW4taC1mdWxsIGZsZXgtY29sIGJnLXdoaXRlIHB0LTE2IHBiLTEyJz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdteC1hdXRvIGZsZXggdy1mdWxsIG1heC13LTd4bCBmbGV4LWdyb3cgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtNCBzbTpweC02IGxnOnB4LTgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPExpbmsgdG89Jy8nIGNsYXNzTmFtZT0naW5saW5lLWZsZXgnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPkNhbWlsbGUgTWVhdCBTaG9wPC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLTEyIHctYXV0bydcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbG9nby5wbmcnXG4gICAgICAgICAgICAgICAgYWx0PSdDYW1pbGxlIE1lYXQgU2hvcCBMb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0xNic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXJlZC02MDAnPlxuICAgICAgICAgICAgICAgIDQwNCBlcnJvclxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J210LTIgdGV4dC00eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTV4bCc+XG4gICAgICAgICAgICAgICAgUGFnZSBub3QgZm91bmQuXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMiB0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICAgU29ycnksIHdlIGNvdWxkblx1MjAxOXQgZmluZCB0aGUgcGFnZSB5b3VcdTIwMTlyZSBsb29raW5nIGZvci5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNic+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPScvJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1yZWQtNjAwIGhvdmVyOnRleHQtcmVkLTUwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHbyBiYWNrIGhvbWU8c3BhbiBhcmlhLWhpZGRlbj0ndHJ1ZSc+ICZyYXJyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J214LWF1dG8gdy1mdWxsIG1heC13LTd4bCBmbGV4LXNocmluay0wIHB4LTQgc206cHgtNiBsZzpweC04Jz5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTQnPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTYwMCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGFjdCBTdXBwb3J0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBib3JkZXItbCBib3JkZXItZ3JheS0zMDAnXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS02MDAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN0YXR1c1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgYm9yZGVyLWwgYm9yZGVyLWdyYXktMzAwJ1xuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNjAwJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IGZvb3Rlck5hdmlnYXRpb24gPSB7XG4gIHByb2R1Y3RzOiBbXG4gICAgeyBuYW1lOiAnQWxsIFByb2R1Y3RzJywgaHJlZjogJy9wcm9kdWN0cycgfSxcbiAgICB7IG5hbWU6ICdDaGlja2VuJywgaHJlZjogJy9jaGlja2VuJyB9LFxuICAgIHsgbmFtZTogJ1BvcmsnLCBocmVmOiAnL3BvcmsnIH0sXG4gICAgeyBuYW1lOiAnQmVlZicsIGhyZWY6ICcvYmVlZicgfSxcbiAgXSxcbiAgY3VzdG9tZXJTZXJ2aWNlOiBbXG4gICAgeyBuYW1lOiAnQ29udGFjdCcsIGhyZWY6ICcjZm9vdGVyJyB9LFxuICAgIHsgbmFtZTogJ1NoaXBwaW5nJywgaHJlZjogJyNmb290ZXInIH0sXG4gICAgeyBuYW1lOiAnUmV0dXJucycsIGhyZWY6ICcjZm9vdGVyJyB9LFxuICAgIHsgbmFtZTogJ1dhcnJhbnR5JywgaHJlZjogJyNmb290ZXInIH0sXG4gIF0sXG4gIGNvbXBhbnk6IFtcbiAgICB7IG5hbWU6ICdXaG8gd2UgYXJlJywgaHJlZjogJyNmb290ZXInIH0sXG4gICAgeyBuYW1lOiAnQ2FyZWVycycsIGhyZWY6ICcjZm9vdGVyJyB9LFxuICAgIHsgbmFtZTogJ1Rlcm1zICYgQ29uZGl0aW9ucycsIGhyZWY6ICcjZm9vdGVyJyB9LFxuICAgIHsgbmFtZTogJ1ByaXZhY3knLCBocmVmOiAnI2Zvb3RlcicgfSxcbiAgXSxcbiAgbGVnYWw6IFtcbiAgICB7IG5hbWU6ICdUZXJtcyBvZiBTZXJ2aWNlJywgaHJlZjogJyNmb290ZXInIH0sXG4gICAgeyBuYW1lOiAnUmV0dXJuIFBvbGljeScsIGhyZWY6ICcjZm9vdGVyJyB9LFxuICAgIHsgbmFtZTogJ1ByaXZhY3kgUG9saWN5JywgaHJlZjogJyNmb290ZXInIH0sXG4gICAgeyBuYW1lOiAnRGVsaXZlcnkgUG9saWN5JywgaHJlZjogJyNmb290ZXInIH0sXG4gIF0sXG4gIGJvdHRvbUxpbmtzOiBbXG4gICAgeyBuYW1lOiAnUHJpdmFjeScsIGhyZWY6ICcjZm9vdGVyJyB9LFxuICAgIHsgbmFtZTogJ1Rlcm1zJywgaHJlZjogJyNmb290ZXInIH0sXG4gIF0sXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBhcmlhLWxhYmVsbGVkYnk9J2Zvb3Rlci1oZWFkaW5nJyBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgIDxoMiBpZD0nZm9vdGVyJyBjbGFzc05hbWU9J3NyLW9ubHknPlxuICAgICAgICBGb290ZXJcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTpweC02IGxnOnB4LTgnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtMTYgcGItMjAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOmZsZXggbWQ6anVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2xvZ28ucG5nJ1xuICAgICAgICAgICAgICAgIGFsdD0nQ2FtaWxsZSBNZWF0IFNob3AgTG9nbydcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LWF1dG8nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpmbGV4IG1kOmp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1tZCBtdC0yIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICBDYW1pbGxlIE1lYXQgU2hvcFxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG10LTE2IG1heC13LTV4bCB4bDpncmlkIHhsOmdyaWQtY29scy0yIHhsOmdhcC04Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgZ2FwLTggeGw6Y29sLXNwYW4tMic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMTIgbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtOCBtZDpzcGFjZS15LTAnPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dWwgcm9sZT0nbGlzdCcgY2xhc3NOYW1lPSdtdC02IHNwYWNlLXktNic+XG4gICAgICAgICAgICAgICAgICAgICAge2Zvb3Rlck5hdmlnYXRpb24ucHJvZHVjdHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT0ndGV4dC1zbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lciBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCByb2xlPSdsaXN0JyBjbGFzc05hbWU9J210LTYgc3BhY2UteS02Jz5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2aWdhdGlvbi5jdXN0b21lclNlcnZpY2UubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT0ndGV4dC1zbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMTIgbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtOCBtZDpzcGFjZS15LTAnPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCByb2xlPSdsaXN0JyBjbGFzc05hbWU9J210LTYgc3BhY2UteS02Jz5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2aWdhdGlvbi5jb21wYW55Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9J3RleHQtc20nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5MZWdhbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCByb2xlPSdsaXN0JyBjbGFzc05hbWU9J210LTYgc3BhY2UteS02Jz5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2aWdhdGlvbi5sZWdhbC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPSd0ZXh0LXNtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcmVkLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTEwIG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1kOnRleHQtbGVmdCc+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBBbGwgUmlnaHRzIFJlc2VydmVkXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtZDptdC0wJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtOCc+XG4gICAgICAgICAgICAgIHtmb290ZXJOYXZpZ2F0aW9uLmJvdHRvbUxpbmtzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIHRvPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiIsICIvKiBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArICovXG5pbXBvcnQge1xuICBDYWxlbmRhckljb24sXG4gIExvY2F0aW9uTWFya2VySWNvbixcbiAgVXNlcnNJY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuXG5jb25zdCBwb3NpdGlvbnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ09yZGVyIDEyMy00NTYnLFxuICAgIHR5cGU6ICdQYWNrYWdpbmcnLFxuICAgIGxvY2F0aW9uOiAnUGhhc2UgMSBCbG9jayAyIExvdCAzLCBQYXJrbGFuZSBDb3VudHJ5IEhvbWVzJyxcbiAgICBkZXBhcnRtZW50OiAnRXZhbiBNb25yZWFsJyxcbiAgICBjbG9zZURhdGU6ICcyMDIyLTAxLTA3JyxcbiAgICBjbG9zZURhdGVGdWxsOiAnSmFudWFyeSA3LCAyMDIyJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnT3JkZXIgMTIzLTQ1NycsXG4gICAgdHlwZTogJ0ZvciBEZWxpdmVyeScsXG4gICAgbG9jYXRpb246ICdIb3VzZSAjMTIsIFNhcHBoaXJlIFN0cmVldCwgQ2FtZWxsYSBMZXNzYW5kcmEnLFxuICAgIGRlcGFydG1lbnQ6ICdTYW1hbnRoYSBMdWd0dScsXG4gICAgY2xvc2VEYXRlOiAnMjAyMi0wMS0wNycsXG4gICAgY2xvc2VEYXRlRnVsbDogJ0phbnVhcnkgNywgMjAyMicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ09yZGVyIDEyMy00NTknLFxuICAgIHR5cGU6ICdDb21wbGV0ZWQnLFxuICAgIGxvY2F0aW9uOiAnQmxvY2sgNzYgTG90IDUsIEx1bWluYSBIb21lcycsXG4gICAgZGVwYXJ0bWVudDogJ0pvc2h1YSBMb3BleicsXG4gICAgY2xvc2VEYXRlOiAnMjAyMi0wMS0xNCcsXG4gICAgY2xvc2VEYXRlRnVsbDogJ0phbnVhcnkgMTQsIDIwMjInLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdPcmRlciAxMjMtMDA1JyxcbiAgICB0eXBlOiAnQ29tcGxldGVkJyxcbiAgICBsb2NhdGlvbjogJ0Jsb2NrIDc2IExvdCA1LCBMdW1pbmEgSG9tZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdKb3NodWEgTG9wZXonLFxuICAgIGNsb3NlRGF0ZTogJzIwMjItMDEtMTQnLFxuICAgIGNsb3NlRGF0ZUZ1bGw6ICdKYW51YXJ5IDE0LCAyMDIyJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnT3JkZXIgMTIzLTAwNCcsXG4gICAgdHlwZTogJ0NvbXBsZXRlZCcsXG4gICAgbG9jYXRpb246ICdCbG9jayA3NiBMb3QgNSwgTHVtaW5hIEhvbWVzJyxcbiAgICBkZXBhcnRtZW50OiAnSm9zaHVhIExvcGV6JyxcbiAgICBjbG9zZURhdGU6ICcyMDIyLTAxLTE0JyxcbiAgICBjbG9zZURhdGVGdWxsOiAnSmFudWFyeSAxNCwgMjAyMicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ09yZGVyIDEyMy0wMDMnLFxuICAgIHR5cGU6ICdDb21wbGV0ZWQnLFxuICAgIGxvY2F0aW9uOiAnQmxvY2sgNzYgTG90IDUsIEx1bWluYSBIb21lcycsXG4gICAgZGVwYXJ0bWVudDogJ0pvc2h1YSBMb3BleicsXG4gICAgY2xvc2VEYXRlOiAnMjAyMi0wMS0xNCcsXG4gICAgY2xvc2VEYXRlRnVsbDogJ0phbnVhcnkgMTQsIDIwMjInLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdPcmRlciAxMjMtMDAyJyxcbiAgICB0eXBlOiAnQ29tcGxldGVkJyxcbiAgICBsb2NhdGlvbjogJ0Jsb2NrIDc2IExvdCA1LCBMdW1pbmEgSG9tZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdKb3NodWEgTG9wZXonLFxuICAgIGNsb3NlRGF0ZTogJzIwMjItMDEtMTQnLFxuICAgIGNsb3NlRGF0ZUZ1bGw6ICdKYW51YXJ5IDE0LCAyMDIyJyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBweC00IHB5LTUgcHQtMjQgc206cHgtNic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICBBc3NnaW5lZCBPcmRlcnNcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdtdC0zIHRleHQtc20gdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgTGlzdCBvZiBhbGwgYXNzZ2luZWQgb3JkZXJzIHRvIHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHNoYWRvdyBzbTpyb3VuZGVkLW1kJz5cbiAgICAgICAgPHVsIHJvbGU9J2xpc3QnIGNsYXNzTmFtZT0nZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwJz5cbiAgICAgICAgICB7cG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc2l0aW9uLmlkfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSdibG9jayBob3ZlcjpiZy1ncmF5LTUwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtNCBweS00IHNtOnB4LTYnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndHJ1bmNhdGUgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTIgZmxleCBmbGV4LXNocmluay0wJz5cbiAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnR5cGUgPT09ICdQYWNrYWdpbmcnICYmICdiZy1yZWQtMTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50eXBlID09PSAnRm9yIERlbGl2ZXJ5JyAmJiAnYmcteWVsbG93LTEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gJHtwb3NpdGlvbi50eXBlID09PSAnQ29tcGxldGVkJyAmJiAnYmctZ3JlZW4tMTAwJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4LTIgdGV4dC14cyBmb250LXNlbWlib2xkIGxlYWRpbmctNSBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbi50eXBlID09PSAnUGFja2FnaW5nJyAmJiAndGV4dC1yZWQtOTAwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbi50eXBlID09PSAnRm9yIERlbGl2ZXJ5JyAmJiAndGV4dC15ZWxsb3ctOTAwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbi50eXBlID09PSAnQ29tcGxldGVkJyAmJiAndGV4dC1ncmVlbi05MDAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yIHNtOmZsZXggc206anVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOmZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci0xLjUgaC01IHctNSBmbGV4LXNocmluay0wIHRleHQtZ3JheS00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi5kZXBhcnRtZW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOm10LTAgc206bWwtMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25NYXJrZXJJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItMS41IGgtNSB3LTUgZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpb24ubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOm10LTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItMS41IGgtNSB3LTUgZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi50eXBlID09PSAnQ29tcGxldGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdEZWxpdmVyZWQgb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1BsYWNlZCBvbid9eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtwb3NpdGlvbi5jbG9zZURhdGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpb24uY2xvc2VEYXRlRnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIiwgIi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cblxuaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tICcuL3Byb2R1Y3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLXdoaXRlIHB4LTQgcHktNSBwdC0yNCBzbTpweC02Jz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1leHRyYWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgIE1hbmFnZSBQcm9kdWN0c1xuICAgICAgICA8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9J210LTMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICBWaWV3LCBhZGQsIGVkaXQsIG9yIGRlbGV0ZSBwcm9kdWN0cy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBweC00Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9Jy1teS0yIG92ZXJmbG93LXgtYXV0byBzbTotbXgtNiBsZzotbXgtOCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lubGluZS1ibG9jayBtaW4tdy1mdWxsIHB5LTIgYWxpZ24tbWlkZGxlIHNtOnB4LTYgbGc6cHgtOCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBzaGFkb3cgc206cm91bmRlZC1sZyc+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J21pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdiZy1ncmF5LTUwJz5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9J2NvbCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT0nY29sJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9J2NvbCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPSdjb2wnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBXZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9J2NvbCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFN0b2NrXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPSdjb2wnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBCcmFuZFxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJyBjbGFzc05hbWU9J3JlbGF0aXZlIHB4LTYgcHktMyc+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5FZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J2RpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBiZy13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwIHB4LTYgcHktNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0xMCB3LTEwIGZsZXgtc2hyaW5rLTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtbWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3dyYXAgcHgtNiBweS00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC53ZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS05MDAnPjk5OTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00IHRleHQtc20gdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5icmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwIHB4LTYgcHktNCB0ZXh0LXJpZ2h0IHRleHQtc20gZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSd0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGVudW0gQnJhbmQge1xuICBDQU1JTExFID0gJ0NhbWlsbGUnLFxuICBCT1VOVFlfRlJFU0ggPSAnQm91bnR5IEZyZXNoJyxcbn1cblxuZXhwb3J0IGVudW0gQ2F0ZWdvcnkge1xuICBDSElDS0VOID0gJ0NoaWNrZW4nLFxuICBQT1JLID0gJ1BvcmsnLFxuICBCRUVGID0gJ0JlZWYnLFxufVxuXG5leHBvcnQgdHlwZSBQcm9kdWN0ID0ge1xuICBpZDogbnVtYmVyXG4gIG5hbWU6IHN0cmluZ1xuICBicmFuZDogQnJhbmRcbiAgY2F0ZWdvcnk6IENhdGVnb3J5XG4gIGltYWdlU3JjOiBzdHJpbmdcbiAgaW1hZ2VBbHQ6IHN0cmluZ1xuICBwcmljZTogbnVtYmVyXG4gIHdlaWdodDogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtY2hpY2tlbi1icmVhZGVkLXNraW4tMzUwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4tYnJlYWRlZC1za2luLTM1MGcnLFxuICAgIG5hbWU6ICdDaGlja2VuIEJyZWFkZWQgU2tpbicsXG4gICAgd2VpZ2h0OiAnMzUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tYnJlYXN0LWZpbGxldHMtODYwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4tYnJlYXN0LWZpbGxldHMtODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gQnJlYXN0cyBGaWxsZXRzJyxcbiAgICB3ZWlnaHQ6ICc4NjBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyOTAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtY2hpY2tlbi1icmVhc3RzLTg2MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLWJyZWFzdHMtODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gQnJlYXN0cycsXG4gICAgd2VpZ2h0OiAnODYwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTgwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tbGVnLXF1YXJ0ZXJzLTg2MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLWxlZy1xdWFydGVycy04NjBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBMZWcgUXVhcnRlcnMnLFxuICAgIHdlaWdodDogJzg2MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDE4MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLW51Z2dldHMtMjAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4tbnVnZ2V0cy0yMDBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBOdWdnZXRzJyxcbiAgICB3ZWlnaHQ6ICcyMDBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtY2hpY2tlbi1wb3Bjb3JuLTIwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLXBvcGNvcm4tMjAwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gUG9wY29ybicsXG4gICAgd2VpZ2h0OiAnMjAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tc3RpY2tzLTIwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLXN0aWNrcy0yMDBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBTdGlja3MnLFxuICAgIHdlaWdodDogJzIwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLXRoaWdocy04NjBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi10aGlnaHMtODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gVGhpZ2hzJyxcbiAgICB3ZWlnaHQ6ICc4NjBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxODAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtY2hpY2tlbi13aW5ncy04NjBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi13aW5ncy04NjBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBXaW5ncycsXG4gICAgd2VpZ2h0OiAnODYwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTgwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1kcnVtc3RpY2stODYwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWRydW1zdGljay04NjBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBEcnVtc3RpY2tzJyxcbiAgICB3ZWlnaHQ6ICc4NjBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxODAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG5cbiAge1xuICAgIGlkOiAxMSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtZXZlcnlkYXktY2hpY2tlbi1waWVjZS5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWV2ZXJ5ZGF5LWNoaWNrZW4tcGllY2UnLFxuICAgIG5hbWU6ICdFdmVyeWRheSBDaGlja2VuJyxcbiAgICB3ZWlnaHQ6ICcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDE2MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMixcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtZmFtaWx5LWZlYXN0LWNoaWNrZW4uanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1mYW1pbHktZmVhc3QtY2hpY2tlbicsXG4gICAgbmFtZTogJ0ZhbWlseSBGZWFzdCBDaGlja2VuJyxcbiAgICB3ZWlnaHQ6ICcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDI4MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtZnJlZS1yYW5nZS1jaGlja2VuLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtZnJlZS1yYW5nZS1jaGlja2VuJyxcbiAgICBuYW1lOiAnRnJlZSBSYW5nZSBDaGlja2VuJyxcbiAgICB3ZWlnaHQ6ICcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDI1MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxNCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtbWFyaW5hdGVkLWNoaWNrZW4tY3V0LXVwcy1wZXBwZXItNTUwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLW1hcmluYXRlZC1jaGlja2VuLWN1dC11cHMtcGVwcGVyLTU1MGcnLFxuICAgIG5hbWU6ICdNYXJpbmF0ZWQgQ2hpY2tlbiBDdXQgVXBzIChQZXBwZXIpJyxcbiAgICB3ZWlnaHQ6ICc1NTBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxMTUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTUsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLW1hcmluYXRlZC1jaGlja2VuLWN1dC11cHMtc3BpY3ktNTUwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLW1hcmluYXRlZC1jaGlja2VuLWN1dC11cHMtc3BpY3ktNTUwZycsXG4gICAgbmFtZTogJ01hcmluYXRlZCBDaGlja2VuIEN1dCBVcHMgKFNwaWN5KScsXG4gICAgd2VpZ2h0OiAnNTUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTE1LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDE2LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1tYXJpbmF0ZWQtY2hpY2tlbi1jdXQtdXBzLXN3ZWV0LTU1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1tYXJpbmF0ZWQtY2hpY2tlbi1jdXQtdXBzLXN3ZWV0LTU1MGcnLFxuICAgIG5hbWU6ICdNYXJpbmF0ZWQgQ2hpY2tlbiBDdXQgVXBzIChTcGljeSknLFxuICAgIHdlaWdodDogJzU1MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDExNSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxNyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtbWFyaW5hdGVkLWNoaWNrZW4tbmVjay01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtbWFyaW5hdGVkLWNoaWNrZW4tbmVjay01MDBnJyxcbiAgICBuYW1lOiAnTWFyaW5hdGVkIENoaWNrZW4gTmVjaycsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogODAsXG5cbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxOCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtcHJlbWl1bS1jaGlja2VuLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtcHJlbWl1bS1jaGlja2VuJyxcbiAgICBuYW1lOiAnUHJlbWl1bSBDaGlja2VuJyxcbiAgICB3ZWlnaHQ6ICcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDI1MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxOSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtc2F1Y3ktdG9yaWthcmFhZ2Utc3dlZXQtYW5kLXNvdXItNDUwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLXNhdWN5LXRvcmlrYXJhYWdlLXN3ZWV0LWFuZC1zb3VyLTQ1MGcnLFxuICAgIG5hbWU6ICdTYXVjeSBUb3Jpa2FyYWFnZSAoU3dlZXQgYW5kIFNvdXIpJyxcbiAgICB3ZWlnaHQ6ICc0NTBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyMjAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMjAsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLXNhdWN5LXRvcmlrYXJhYWdlLXRlcml5YWtpLTQ1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1zYXVjeS10b3Jpa2FyYWFnZS10ZXJpeWFraS00NTBnJyxcbiAgICBuYW1lOiAnU2F1Y3kgVG9yaWthcmFhZ2UgKFN3ZWV0IGFuZCBTb3VyKScsXG4gICAgd2VpZ2h0OiAnNDUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMjIwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuXG4gIHtcbiAgICBpZDogMjEsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tdGhpZ2gtZmlsbGV0cy04NjBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi10aGlnaC1maWxsZXRzLTg2MGcnLFxuICAgIG5hbWU6ICdDaGlja2VuIFRoaWdoIEZpbGxldHMnLFxuICAgIHdlaWdodDogJzg2MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDI5MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyMixcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtdG9wLXRvcmlidXJnZXItY2hlZXNlLWFuZC1jaGl2ZXMtNDUwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLXRvcC10b3JpYnVyZ2VyLWNoZWVzZS1hbmQtY2hpdmVzLTQ1MGcnLFxuICAgIG5hbWU6ICdUb3AgVG9yaWJ1cmdlciAoQ2hlZXNlIGFuZCBDaGl2ZXMpJyxcbiAgICB3ZWlnaHQ6ICc0NTBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMjMsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLXRvcC10b3JpYnVyZ2VyLWNsYXNzaWMtbWF5by00NTBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtdG9wLXRvcmlidXJnZXItY2xhc3NpYy1tYXlvLTQ1MGcnLFxuICAgIG5hbWU6ICdUb3AgVG9yaWJ1cmdlciAoQ2xhc3NpYyBNYXlvKScsXG4gICAgd2VpZ2h0OiAnNDUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMjAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDI0LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi10b3AtdG9yaWthdHN1LWNoZWVzZS1hbmQtY2hpdmVzLTQ1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi10b3AtdG9yaWthdHN1LWNoZWVzZS1hbmQtY2hpdmVzLTQ1MGcnLFxuICAgIG5hbWU6ICdUb3AgVG9yaWthdHN1IChDaGVlc2UgYW5kIENoaXZlcyknLFxuICAgIHdlaWdodDogJzQ1MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDIyMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyNSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtdG9wLXRvcmlrYXRzdS1jbGFzc2ljLW1heW8tNDUwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLXRvcC10b3Jpa2F0c3UtY2xhc3NpYy1tYXlvLTQ1MGcnLFxuICAgIG5hbWU6ICdUb3AgVG9yaWthdHN1IChDbGFzc2ljIE1heW8pJyxcbiAgICB3ZWlnaHQ6ICc0NTBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyMjAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMjYsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLXlvdW5nLWFuZC10ZW5kZXItY2hpY2tlbi5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLXlvdW5nLWFuZC10ZW5kZXItY2hpY2tlbicsXG4gICAgbmFtZTogJ1lvdW5nIGFuZCBUZW5kZXIgQ2hpY2tlbicsXG4gICAgd2VpZ2h0OiAnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxOTAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMjcsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tYnJlYWRlZC1za2luLTM1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLWJyZWFkZWQtc2tpbi0zNTBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBCcmVhZGVkIFNraW4nLFxuICAgIHdlaWdodDogJzM1MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0MSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1iZWVmLWN1YmVzLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLWJlZWYtY3ViZXMtNTAwZycsXG4gICAgbmFtZTogJ0JlZWYgQ3ViZXMnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5CRUVGLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDIsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtYmVlZi1uZXcteW9yay1zdGVhay01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1iZWVmLW5ldy15b3JrLXN0ZWFrLTUwMGcnLFxuICAgIG5hbWU6ICdCZWVmIE5ldyBZb3JrIFN0ZWFrJyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQkVFRixcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQzLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLWJlZWYtc2FraXl1a2ktNTAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0NhbWlsbGUtYmVlZi1zYWtpeXVraS01MDBnJyxcbiAgICBuYW1lOiAnQmVlZiBTYWtpeXVraScsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkJFRUYsXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0NCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1iZWVmLXNoYW5rcy01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1iZWVmLXNoYW5rcy01MDBnJyxcbiAgICBuYW1lOiAnQmVlZiBTaGFua3MnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5CRUVGLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDUsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtYmVlZi1zdHJvbmdyYW5vZmYtNTAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0NhbWlsbGUtYmVlZi1zdHJvbmdyYW5vZmYtNTAwZycsXG4gICAgbmFtZTogJ0JlZWYgU3Ryb25ncmFub2ZmJyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQkVFRixcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQ2LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLWdyb3VuZC1iZWVmLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLWdyb3VuZC1iZWVmLTUwMGcnLFxuICAgIG5hbWU6ICdHcm91bmQgQmVlZicsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkJFRUYsXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0NyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1ncm91bmQtcG9yay5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0NhbWlsbGUtZ3JvdW5kLXBvcmsnLFxuICAgIG5hbWU6ICdHcm91bmQgUG9yaycsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LlBPUkssXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0OCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1wYXRhLXNsaWNlLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLXBhdGEtc2xpY2UtNTAwZycsXG4gICAgbmFtZTogJ1BhdGEgU2xpY2UnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5QT1JLLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDksXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtcG9yay1hZG9iby1jdXQtNTAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0NhbWlsbGUtcG9yay1hZG9iby1jdXQtNTAwZycsXG4gICAgbmFtZTogJ1BvcmsgQWRvYm8gQ3V0JyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuUE9SSyxcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDUwLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLXBvcmstYmFjb24tY3V0LTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLXBvcmstYmFjb24tY3V0LTUwMGcnLFxuICAgIG5hbWU6ICdQb3JrIEJhY29uIEN1dCcsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LlBPUkssXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1MSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1wb3JrLWJlbGx5LXNsaWNlLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLXBvcmstYmVsbHktc2xpY2UtNTAwZycsXG4gICAgbmFtZTogJ1BvcmsgQmVsbHkgU2xpY2UnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5QT1JLLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNTIsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtcG9yay1zaW5pZ2FuZy1jdXQtNTAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0NhbWlsbGUtcG9yay1zaW5pZ2FuZy1jdXQtNTAwZycsXG4gICAgbmFtZTogJ1BvcmsgU2luaWdhbmcgQ3V0JyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuUE9SSyxcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDUzLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLXBvcmtjaG9wLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLXBvcmtjaG9wLTUwMGcnLFxuICAgIG5hbWU6ICdQb3JrIENob3AnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5QT1JLLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG5dXG5cbmNvbnN0IHJldHVyblRpdGxlID0gKHtcbiAgb25seUNhdGVnb3J5LFxufToge1xuICBvbmx5Q2F0ZWdvcnk6IENhdGVnb3J5IHwgbnVsbFxufSk6IHN0cmluZyA9PiB7XG4gIGlmIChvbmx5Q2F0ZWdvcnkgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ0FsbCBQcm9kdWN0cydcbiAgfSBlbHNlIGlmIChvbmx5Q2F0ZWdvcnkgPT09IENhdGVnb3J5LkNISUNLRU4pIHtcbiAgICByZXR1cm4gJ0NoaWNrZW4gUHJvZHVjdHMnXG4gIH0gZWxzZSBpZiAob25seUNhdGVnb3J5ID09PSBDYXRlZ29yeS5QT1JLKSB7XG4gICAgcmV0dXJuICdQb3JrIFByb2R1Y3RzJ1xuICB9IGVsc2UgaWYgKG9ubHlDYXRlZ29yeSA9PT0gQ2F0ZWdvcnkuQkVFRikge1xuICAgIHJldHVybiAnQmVlZiBQcm9kdWN0cydcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ0FsbCBQcm9kdWN0cydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1BhZ2Uoe1xuICBvbmx5Q2F0ZWdvcnksXG59OiB7XG4gIG9ubHlDYXRlZ29yeTogQ2F0ZWdvcnkgfCBudWxsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtYXgtdy0yeGwgcHktMjQgcHgtNCBzbTpweC02IGxnOm1heC13LTd4bCBsZzpweC04Jz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bCc+XG4gICAgICAgICAge3JldHVyblRpdGxlKHsgb25seUNhdGVnb3J5IH0pfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC04IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTIgc206Z3JpZC1jb2xzLTIgc206Z2FwLXgtNiBsZzpncmlkLWNvbHMtNCB4bDpnYXAteC04Jz5cbiAgICAgICAgICB7cHJvZHVjdHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmlkIC0gYS5pZClcbiAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG9ubHlDYXRlZ29yeSA9PT0gQ2F0ZWdvcnkuQ0hJQ0tFTiAmJlxuICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkgIT09IENhdGVnb3J5LkNISUNLRU5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBvbmx5Q2F0ZWdvcnkgPT09IENhdGVnb3J5LkJFRUYgJiZcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5ICE9PSBDYXRlZ29yeS5CRUVGXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgb25seUNhdGVnb3J5ID09PSBDYXRlZ29yeS5QT1JLICYmXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeSAhPT0gQ2F0ZWdvcnkuUE9SS1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtNzIgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBtdC00IGgtMTYnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1tZCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGhvdmVyOnRleHQtcmVkLTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZWxhdGl2ZSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTIwQjF7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZWxhdGl2ZSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5icmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgaW5zZXQteC0wIHRvcC0wICBmbGV4IGgtNzIgY3Vyc29yLXBvaW50ZXIgaXRlbXMtZW5kIGp1c3RpZnktZW5kIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHAtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBoLTM2ICBiZy1ncmFkaWVudC10by10IGZyb20tbmV1dHJhbC01MDAgdG8td2hpdGUgb3BhY2l0eS0xMCAgaG92ZXI6b3BhY2l0eS01J1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogQUREIEtJTE9TIElOUFVUICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTYnPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctcmVkLTUwMCBweS0yIHB4LTggdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXJlZC00MDAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBlbnVtIEJyYW5kIHtcbiAgQ0FNSUxMRSA9ICdDYW1pbGxlJyxcbiAgQk9VTlRZX0ZSRVNIID0gJ0JvdW50eSBGcmVzaCcsXG59XG5cbmV4cG9ydCBlbnVtIENhdGVnb3J5IHtcbiAgQ0hJQ0tFTiA9ICdDaGlja2VuJyxcbiAgUE9SSyA9ICdQb3JrJyxcbiAgQkVFRiA9ICdCZWVmJyxcbn1cblxuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHtcbiAgaWQ6IG51bWJlclxuICBuYW1lOiBzdHJpbmdcbiAgYnJhbmQ6IEJyYW5kXG4gIGNhdGVnb3J5OiBDYXRlZ29yeVxuICBpbWFnZVNyYzogc3RyaW5nXG4gIGltYWdlQWx0OiBzdHJpbmdcbiAgcHJpY2U6IG51bWJlclxuICB3ZWlnaHQ6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0czogUHJvZHVjdFtdID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tYnJlYWRlZC1za2luLTM1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLWJyZWFkZWQtc2tpbi0zNTBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBCcmVhZGVkIFNraW4nLFxuICAgIHdlaWdodDogJzM1MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLWJyZWFzdC1maWxsZXRzLTg2MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLWJyZWFzdC1maWxsZXRzLTg2MGcnLFxuICAgIG5hbWU6ICdDaGlja2VuIEJyZWFzdHMgRmlsbGV0cycsXG4gICAgd2VpZ2h0OiAnODYwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMjkwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tYnJlYXN0cy04NjBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi1icmVhc3RzLTg2MGcnLFxuICAgIG5hbWU6ICdDaGlja2VuIEJyZWFzdHMnLFxuICAgIHdlaWdodDogJzg2MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDE4MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLWxlZy1xdWFydGVycy04NjBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi1sZWctcXVhcnRlcnMtODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gTGVnIFF1YXJ0ZXJzJyxcbiAgICB3ZWlnaHQ6ICc4NjBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxODAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtY2hpY2tlbi1udWdnZXRzLTIwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLW51Z2dldHMtMjAwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gTnVnZ2V0cycsXG4gICAgd2VpZ2h0OiAnMjAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tcG9wY29ybi0yMDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi1wb3Bjb3JuLTIwMGcnLFxuICAgIG5hbWU6ICdDaGlja2VuIFBvcGNvcm4nLFxuICAgIHdlaWdodDogJzIwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLXN0aWNrcy0yMDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi1zdGlja3MtMjAwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gU3RpY2tzJyxcbiAgICB3ZWlnaHQ6ICcyMDBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtY2hpY2tlbi10aGlnaHMtODYwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4tdGhpZ2hzLTg2MGcnLFxuICAgIG5hbWU6ICdDaGlja2VuIFRoaWdocycsXG4gICAgd2VpZ2h0OiAnODYwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTgwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDksXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4td2luZ3MtODYwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4td2luZ3MtODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gV2luZ3MnLFxuICAgIHdlaWdodDogJzg2MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDE4MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtZHJ1bXN0aWNrLTg2MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1kcnVtc3RpY2stODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gRHJ1bXN0aWNrcycsXG4gICAgd2VpZ2h0OiAnODYwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTgwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuXG4gIHtcbiAgICBpZDogMTEsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWV2ZXJ5ZGF5LWNoaWNrZW4tcGllY2UuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1ldmVyeWRheS1jaGlja2VuLXBpZWNlJyxcbiAgICBuYW1lOiAnRXZlcnlkYXkgQ2hpY2tlbicsXG4gICAgd2VpZ2h0OiAnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxNjAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTIsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWZhbWlseS1mZWFzdC1jaGlja2VuLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtZmFtaWx5LWZlYXN0LWNoaWNrZW4nLFxuICAgIG5hbWU6ICdGYW1pbHkgRmVhc3QgQ2hpY2tlbicsXG4gICAgd2VpZ2h0OiAnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyODAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTMsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWZyZWUtcmFuZ2UtY2hpY2tlbi5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWZyZWUtcmFuZ2UtY2hpY2tlbicsXG4gICAgbmFtZTogJ0ZyZWUgUmFuZ2UgQ2hpY2tlbicsXG4gICAgd2VpZ2h0OiAnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyNTAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTQsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLW1hcmluYXRlZC1jaGlja2VuLWN1dC11cHMtcGVwcGVyLTU1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1tYXJpbmF0ZWQtY2hpY2tlbi1jdXQtdXBzLXBlcHBlci01NTBnJyxcbiAgICBuYW1lOiAnTWFyaW5hdGVkIENoaWNrZW4gQ3V0IFVwcyAoUGVwcGVyKScsXG4gICAgd2VpZ2h0OiAnNTUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTE1LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDE1LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1tYXJpbmF0ZWQtY2hpY2tlbi1jdXQtdXBzLXNwaWN5LTU1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1tYXJpbmF0ZWQtY2hpY2tlbi1jdXQtdXBzLXNwaWN5LTU1MGcnLFxuICAgIG5hbWU6ICdNYXJpbmF0ZWQgQ2hpY2tlbiBDdXQgVXBzIChTcGljeSknLFxuICAgIHdlaWdodDogJzU1MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDExNSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxNixcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtbWFyaW5hdGVkLWNoaWNrZW4tY3V0LXVwcy1zd2VldC01NTBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtbWFyaW5hdGVkLWNoaWNrZW4tY3V0LXVwcy1zd2VldC01NTBnJyxcbiAgICBuYW1lOiAnTWFyaW5hdGVkIENoaWNrZW4gQ3V0IFVwcyAoU3BpY3kpJyxcbiAgICB3ZWlnaHQ6ICc1NTBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxMTUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTcsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLW1hcmluYXRlZC1jaGlja2VuLW5lY2stNTAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLW1hcmluYXRlZC1jaGlja2VuLW5lY2stNTAwZycsXG4gICAgbmFtZTogJ01hcmluYXRlZCBDaGlja2VuIE5lY2snLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDgwLFxuXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTgsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLXByZW1pdW0tY2hpY2tlbi5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLXByZW1pdW0tY2hpY2tlbicsXG4gICAgbmFtZTogJ1ByZW1pdW0gQ2hpY2tlbicsXG4gICAgd2VpZ2h0OiAnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyNTAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTksXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLXNhdWN5LXRvcmlrYXJhYWdlLXN3ZWV0LWFuZC1zb3VyLTQ1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1zYXVjeS10b3Jpa2FyYWFnZS1zd2VldC1hbmQtc291ci00NTBnJyxcbiAgICBuYW1lOiAnU2F1Y3kgVG9yaWthcmFhZ2UgKFN3ZWV0IGFuZCBTb3VyKScsXG4gICAgd2VpZ2h0OiAnNDUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMjIwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIwLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1zYXVjeS10b3Jpa2FyYWFnZS10ZXJpeWFraS00NTBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtc2F1Y3ktdG9yaWthcmFhZ2UtdGVyaXlha2ktNDUwZycsXG4gICAgbmFtZTogJ1NhdWN5IFRvcmlrYXJhYWdlIChTd2VldCBhbmQgU291ciknLFxuICAgIHdlaWdodDogJzQ1MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDIyMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcblxuICB7XG4gICAgaWQ6IDIxLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLXRoaWdoLWZpbGxldHMtODYwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4tdGhpZ2gtZmlsbGV0cy04NjBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBUaGlnaCBGaWxsZXRzJyxcbiAgICB3ZWlnaHQ6ICc4NjBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyOTAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMjIsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLXRvcC10b3JpYnVyZ2VyLWNoZWVzZS1hbmQtY2hpdmVzLTQ1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi10b3AtdG9yaWJ1cmdlci1jaGVlc2UtYW5kLWNoaXZlcy00NTBnJyxcbiAgICBuYW1lOiAnVG9wIFRvcmlidXJnZXIgKENoZWVzZSBhbmQgQ2hpdmVzKScsXG4gICAgd2VpZ2h0OiAnNDUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMjAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIzLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi10b3AtdG9yaWJ1cmdlci1jbGFzc2ljLW1heW8tNDUwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLXRvcC10b3JpYnVyZ2VyLWNsYXNzaWMtbWF5by00NTBnJyxcbiAgICBuYW1lOiAnVG9wIFRvcmlidXJnZXIgKENsYXNzaWMgTWF5byknLFxuICAgIHdlaWdodDogJzQ1MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDIwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyNCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtdG9wLXRvcmlrYXRzdS1jaGVlc2UtYW5kLWNoaXZlcy00NTBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtdG9wLXRvcmlrYXRzdS1jaGVlc2UtYW5kLWNoaXZlcy00NTBnJyxcbiAgICBuYW1lOiAnVG9wIFRvcmlrYXRzdSAoQ2hlZXNlIGFuZCBDaGl2ZXMpJyxcbiAgICB3ZWlnaHQ6ICc0NTBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAyMjAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMjUsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLXRvcC10b3Jpa2F0c3UtY2xhc3NpYy1tYXlvLTQ1MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi10b3AtdG9yaWthdHN1LWNsYXNzaWMtbWF5by00NTBnJyxcbiAgICBuYW1lOiAnVG9wIFRvcmlrYXRzdSAoQ2xhc3NpYyBNYXlvKScsXG4gICAgd2VpZ2h0OiAnNDUwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMjIwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDI2LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi15b3VuZy1hbmQtdGVuZGVyLWNoaWNrZW4uanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi15b3VuZy1hbmQtdGVuZGVyLWNoaWNrZW4nLFxuICAgIG5hbWU6ICdZb3VuZyBhbmQgVGVuZGVyIENoaWNrZW4nLFxuICAgIHdlaWdodDogJycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTkwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDI3LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLWJyZWFkZWQtc2tpbi0zNTBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtY2hpY2tlbi1icmVhZGVkLXNraW4tMzUwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gQnJlYWRlZCBTa2luJyxcbiAgICB3ZWlnaHQ6ICczNTBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDEsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtYmVlZi1jdWJlcy01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1iZWVmLWN1YmVzLTUwMGcnLFxuICAgIG5hbWU6ICdCZWVmIEN1YmVzJyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQkVFRixcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQyLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLWJlZWYtbmV3LXlvcmstc3RlYWstNTAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0NhbWlsbGUtYmVlZi1uZXcteW9yay1zdGVhay01MDBnJyxcbiAgICBuYW1lOiAnQmVlZiBOZXcgWW9yayBTdGVhaycsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkJFRUYsXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0MyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1iZWVmLXNha2l5dWtpLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLWJlZWYtc2FraXl1a2ktNTAwZycsXG4gICAgbmFtZTogJ0JlZWYgU2FraXl1a2knLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5CRUVGLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDQsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtYmVlZi1zaGFua3MtNTAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0NhbWlsbGUtYmVlZi1zaGFua3MtNTAwZycsXG4gICAgbmFtZTogJ0JlZWYgU2hhbmtzJyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQkVFRixcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQ1LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLWJlZWYtc3Ryb25ncmFub2ZmLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLWJlZWYtc3Ryb25ncmFub2ZmLTUwMGcnLFxuICAgIG5hbWU6ICdCZWVmIFN0cm9uZ3Jhbm9mZicsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkJFRUYsXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0NixcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1ncm91bmQtYmVlZi01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1ncm91bmQtYmVlZi01MDBnJyxcbiAgICBuYW1lOiAnR3JvdW5kIEJlZWYnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5CRUVGLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDcsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtZ3JvdW5kLXBvcmsuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLWdyb3VuZC1wb3JrJyxcbiAgICBuYW1lOiAnR3JvdW5kIFBvcmsnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5QT1JLLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDgsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtcGF0YS1zbGljZS01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1wYXRhLXNsaWNlLTUwMGcnLFxuICAgIG5hbWU6ICdQYXRhIFNsaWNlJyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuUE9SSyxcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQ5LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLXBvcmstYWRvYm8tY3V0LTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLXBvcmstYWRvYm8tY3V0LTUwMGcnLFxuICAgIG5hbWU6ICdQb3JrIEFkb2JvIEN1dCcsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LlBPUkssXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1MCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1wb3JrLWJhY29uLWN1dC01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1wb3JrLWJhY29uLWN1dC01MDBnJyxcbiAgICBuYW1lOiAnUG9yayBCYWNvbiBDdXQnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5QT1JLLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNTEsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0NhbWlsbGUtcG9yay1iZWxseS1zbGljZS01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1wb3JrLWJlbGx5LXNsaWNlLTUwMGcnLFxuICAgIG5hbWU6ICdQb3JrIEJlbGx5IFNsaWNlJyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuUE9SSyxcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDUyLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9DYW1pbGxlLXBvcmstc2luaWdhbmctY3V0LTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLXBvcmstc2luaWdhbmctY3V0LTUwMGcnLFxuICAgIG5hbWU6ICdQb3JrIFNpbmlnYW5nIEN1dCcsXG4gICAgd2VpZ2h0OiAnNTAwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkNBTUlMTEUsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LlBPUkssXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1MyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1wb3JrY2hvcC01MDBnLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQ2FtaWxsZS1wb3JrY2hvcC01MDBnJyxcbiAgICBuYW1lOiAnUG9yayBDaG9wJyxcbiAgICB3ZWlnaHQ6ICc1MDBnJyxcbiAgICBicmFuZDogQnJhbmQuQ0FNSUxMRSxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuUE9SSyxcbiAgICBwcmljZTogMTAwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlhcyBjdW1xdWUgbmloaWwgYXRxdWUgcXVhZSBpbnZlbnRvcmUuIEFsaXF1YW0gY3VwaWRpdGF0ZSByZXB1ZGlhbmRhZSBzdXNjaXBpdCBjb3Jwb3JpcyBuYXR1cy4nLFxuICB9LFxuXVxuXG5jb25zdCByZXR1cm5UaXRsZSA9ICh7XG4gIG9ubHlDYXRlZ29yeSxcbn06IHtcbiAgb25seUNhdGVnb3J5OiBDYXRlZ29yeSB8IG51bGxcbn0pOiBzdHJpbmcgPT4ge1xuICBpZiAob25seUNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdBbGwgUHJvZHVjdHMnXG4gIH0gZWxzZSBpZiAob25seUNhdGVnb3J5ID09PSBDYXRlZ29yeS5DSElDS0VOKSB7XG4gICAgcmV0dXJuICdDaGlja2VuIFByb2R1Y3RzJ1xuICB9IGVsc2UgaWYgKG9ubHlDYXRlZ29yeSA9PT0gQ2F0ZWdvcnkuUE9SSykge1xuICAgIHJldHVybiAnUG9yayBQcm9kdWN0cydcbiAgfSBlbHNlIGlmIChvbmx5Q2F0ZWdvcnkgPT09IENhdGVnb3J5LkJFRUYpIHtcbiAgICByZXR1cm4gJ0JlZWYgUHJvZHVjdHMnXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdBbGwgUHJvZHVjdHMnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKHtcbiAgb25seUNhdGVnb3J5LFxufToge1xuICBvbmx5Q2F0ZWdvcnk6IENhdGVnb3J5IHwgbnVsbFxufSkge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gbWF4LXctMnhsIHB5LTI0IHB4LTQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOCc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC00eGwnPlxuICAgICAgICAgIHtyZXR1cm5UaXRsZSh7IG9ubHlDYXRlZ29yeSB9KX1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtOCBncmlkIGdyaWQtY29scy0xIGdhcC15LTEyIHNtOmdyaWQtY29scy0yIHNtOmdhcC14LTYgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOCc+XG4gICAgICAgICAge3Byb2R1Y3RzXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5pZCAtIGEuaWQpXG4gICAgICAgICAgICAubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBvbmx5Q2F0ZWdvcnkgPT09IENhdGVnb3J5LkNISUNLRU4gJiZcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5ICE9PSBDYXRlZ29yeS5DSElDS0VOXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgb25seUNhdGVnb3J5ID09PSBDYXRlZ29yeS5CRUVGICYmXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeSAhPT0gQ2F0ZWdvcnkuQkVFRlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIG9ubHlDYXRlZ29yeSA9PT0gQ2F0ZWdvcnkuUE9SSyAmJlxuICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkgIT09IENhdGVnb3J5LlBPUktcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLTcyIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LmltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgbXQtNCBoLTE2Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBob3Zlcjp0ZXh0LXJlZC01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncmVsYXRpdmUgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtcmVkLTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHUyMEIxe3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncmVsYXRpdmUgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYnJhbmR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LXgtMCB0b3AtMCAgZmxleCBoLTcyIGN1cnNvci1wb2ludGVyIGl0ZW1zLWVuZCBqdXN0aWZ5LWVuZCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBwLTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC14LTAgYm90dG9tLTAgaC0zNiAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLW5ldXRyYWwtNTAwIHRvLXdoaXRlIG9wYWNpdHktMTAgIGhvdmVyOm9wYWNpdHktNSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIEFERCBLSUxPUyBJTlBVVCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02Jz5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXJlZC01MDAgcHktMiBweC04IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1yZWQtNDAwJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnQ8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIiwgIi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cbmNvbnN0IHBlb3BsZSA9IFtcbiAge1xuICAgIG5hbWU6ICdMb3JlbSBJcHN1bScsXG4gICAgaWQ6ICcxMjMtNDU2JyxcbiAgICB0aXRsZTogJ0JlZWYgQ3ViZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdPcHRpbWl6YXRpb24nLFxuICAgIHJvbGU6ICcwMS0xMi0yMDIyJyxcbiAgICBlbWFpbDogJ2xvcmVtLmlwc3VtQGV4YW1wbGUuY29tJyxcbiAgICBudW1iZXI6ICcwOTEyLTEyMy0xMjM0JyxcbiAgICBhZGRyZXNzOiAnSG91c2UgIzEyMywgU2FtcGxlIFN1YmRpdmlzaW9uJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMb3JlbSBJcHN1bScsXG4gICAgaWQ6ICcxMjMtNDU2JyxcbiAgICB0aXRsZTogJ0JlZWYgQ3ViZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdPcHRpbWl6YXRpb24nLFxuICAgIHJvbGU6ICcwMS0xMi0yMDIyJyxcbiAgICBlbWFpbDogJ2xvcmVtLmlwc3VtQGV4YW1wbGUuY29tJyxcbiAgICBudW1iZXI6ICcwOTEyLTEyMy0xMjM0JyxcbiAgICBhZGRyZXNzOiAnSG91c2UgIzEyMywgU2FtcGxlIFN1YmRpdmlzaW9uJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMb3JlbSBJcHN1bScsXG4gICAgaWQ6ICcxMjMtNDU2JyxcbiAgICB0aXRsZTogJ0JlZWYgQ3ViZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdPcHRpbWl6YXRpb24nLFxuICAgIHJvbGU6ICcwMS0xMi0yMDIyJyxcbiAgICBlbWFpbDogJ2xvcmVtLmlwc3VtQGV4YW1wbGUuY29tJyxcbiAgICBudW1iZXI6ICcwOTEyLTEyMy0xMjM0JyxcbiAgICBhZGRyZXNzOiAnSG91c2UgIzEyMywgU2FtcGxlIFN1YmRpdmlzaW9uJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMb3JlbSBJcHN1bScsXG4gICAgaWQ6ICcxMjMtNDU2JyxcbiAgICB0aXRsZTogJ0JlZWYgQ3ViZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdPcHRpbWl6YXRpb24nLFxuICAgIHJvbGU6ICcwMS0xMi0yMDIyJyxcbiAgICBlbWFpbDogJ2xvcmVtLmlwc3VtQGV4YW1wbGUuY29tJyxcbiAgICBudW1iZXI6ICcwOTEyLTEyMy0xMjM0JyxcbiAgICBhZGRyZXNzOiAnSG91c2UgIzEyMywgU2FtcGxlIFN1YmRpdmlzaW9uJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMb3JlbSBJcHN1bScsXG4gICAgaWQ6ICcxMjMtNDU2JyxcbiAgICB0aXRsZTogJ0JlZWYgQ3ViZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdPcHRpbWl6YXRpb24nLFxuICAgIHJvbGU6ICcwMS0xMi0yMDIyJyxcbiAgICBlbWFpbDogJ2xvcmVtLmlwc3VtQGV4YW1wbGUuY29tJyxcbiAgICBudW1iZXI6ICcwOTEyLTEyMy0xMjM0JyxcbiAgICBhZGRyZXNzOiAnSG91c2UgIzEyMywgU2FtcGxlIFN1YmRpdmlzaW9uJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMb3JlbSBJcHN1bScsXG4gICAgaWQ6ICcxMjMtNDU2JyxcbiAgICB0aXRsZTogJ0JlZWYgQ3ViZXMnLFxuICAgIGRlcGFydG1lbnQ6ICdPcHRpbWl6YXRpb24nLFxuICAgIHJvbGU6ICcwMS0xMi0yMDIyJyxcbiAgICBlbWFpbDogJ2xvcmVtLmlwc3VtQGV4YW1wbGUuY29tJyxcbiAgICBudW1iZXI6ICcwOTEyLTEyMy0xMjM0JyxcbiAgICBhZGRyZXNzOiAnSG91c2UgIzEyMywgU2FtcGxlIFN1YmRpdmlzaW9uJyxcbiAgfSxcbiAgLy8gTW9yZSBwZW9wbGUuLi5cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBiZy13aGl0ZSBweC00IHB5LTUgcHQtMjQgc206cHgtNic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICBNYW5hZ2UgT3JkZXJzXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDAnPlxuICAgICAgICAgIFZpZXcsIGVkaXQsIG9yIGRlbGV0ZSBvcmRlcnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcHgtNCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSctbXktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LTgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBweS0yIGFsaWduLW1pZGRsZSBzbTpweC02IGxnOnB4LTgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93LWhpZGRlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgc2hhZG93IHNtOnJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSdtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCc+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0nYmctZ3JheS01MCc+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPSdjb2wnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBPcmRlciBJZFxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT0nY29sJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9J2NvbCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9J2NvbCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIE9yZGVyIEl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPSdjb2wnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9J2NvbCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERhdGVcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnIGNsYXNzTmFtZT0ncmVsYXRpdmUgcHgtNiBweS0zJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPkFjdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgICAge3Blb3BsZS5tYXAoKHBlcnNvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwZXJzb24uZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwIHB4LTYgcHktNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb24ubnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4ICc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb24uYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwIHB4LTYgcHktNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgMXgge3BlcnNvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJ4IHtwZXJzb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAzeCB7cGVyc29uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLW5vd3JhcCBweC02IHB5LTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtZmxleCByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMTAwIHB4LTIgdGV4dC14cyBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyZWVuLTgwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00IHRleHQtc20gdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLW5vd3JhcCBweC02IHB5LTQgdGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0ndGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTYwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG4vKiBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArICovXG5jb25zdCBvcmRlcnMgPSBbXG4gIHtcbiAgICBudW1iZXI6IFwiV1U4ODE5MTExMVwiLFxuICAgIGRhdGU6IFwiSmFudWFyeSAyMiwgMjAyMVwiLFxuICAgIGRhdGV0aW1lOiBcIjIwMjEtMDEtMjJcIixcbiAgICBpbnZvaWNlSHJlZjogXCIjXCIsXG4gICAgdG90YWw6IFwiJDIzOC4wMFwiLFxuICAgIHByb2R1Y3RzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICAvLyBNb3JlIHByb2R1Y3RzLi4uXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG51bWJlcjogXCJXVTg4MTkxMTExXCIsXG4gICAgZGF0ZTogXCJKYW51YXJ5IDIyLCAyMDIxXCIsXG4gICAgZGF0ZXRpbWU6IFwiMjAyMS0wMS0yMlwiLFxuICAgIGludm9pY2VIcmVmOiBcIiNcIixcbiAgICB0b3RhbDogXCIkMjM4LjAwXCIsXG4gICAgcHJvZHVjdHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwiTWFjaGluZWQgUGVuIGFuZCBQZW5jaWwgU2V0XCIsXG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBwcmljZTogXCIkNzAuMDBcIixcbiAgICAgICAgc3RhdHVzOiBcIkRlbGl2ZXJlZCBKYW4gMjUsIDIwMjFcIixcbiAgICAgICAgaW1hZ2VTcmM6XG4gICAgICAgICAgXCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL29yZGVyLWhpc3RvcnktcGFnZS0wMi1wcm9kdWN0LTAxLmpwZ1wiLFxuICAgICAgICBpbWFnZUFsdDpcbiAgICAgICAgICBcIkRldGFpbCBvZiBtZWNoYW5pY2FsIHBlbmNpbCB0aXAgd2l0aCBtYWNoaW5lZCBibGFjayBzdGVlbCBzaGFmdCBhbmQgY2hyb21lIGxlYWQgdGlwLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwiTWFjaGluZWQgUGVuIGFuZCBQZW5jaWwgU2V0XCIsXG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBwcmljZTogXCIkNzAuMDBcIixcbiAgICAgICAgc3RhdHVzOiBcIkRlbGl2ZXJlZCBKYW4gMjUsIDIwMjFcIixcbiAgICAgICAgaW1hZ2VTcmM6XG4gICAgICAgICAgXCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL29yZGVyLWhpc3RvcnktcGFnZS0wMi1wcm9kdWN0LTAxLmpwZ1wiLFxuICAgICAgICBpbWFnZUFsdDpcbiAgICAgICAgICBcIkRldGFpbCBvZiBtZWNoYW5pY2FsIHBlbmNpbCB0aXAgd2l0aCBtYWNoaW5lZCBibGFjayBzdGVlbCBzaGFmdCBhbmQgY2hyb21lIGxlYWQgdGlwLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwiTWFjaGluZWQgUGVuIGFuZCBQZW5jaWwgU2V0XCIsXG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBwcmljZTogXCIkNzAuMDBcIixcbiAgICAgICAgc3RhdHVzOiBcIkRlbGl2ZXJlZCBKYW4gMjUsIDIwMjFcIixcbiAgICAgICAgaW1hZ2VTcmM6XG4gICAgICAgICAgXCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL29yZGVyLWhpc3RvcnktcGFnZS0wMi1wcm9kdWN0LTAxLmpwZ1wiLFxuICAgICAgICBpbWFnZUFsdDpcbiAgICAgICAgICBcIkRldGFpbCBvZiBtZWNoYW5pY2FsIHBlbmNpbCB0aXAgd2l0aCBtYWNoaW5lZCBibGFjayBzdGVlbCBzaGFmdCBhbmQgY2hyb21lIGxlYWQgdGlwLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwiTWFjaGluZWQgUGVuIGFuZCBQZW5jaWwgU2V0XCIsXG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBwcmljZTogXCIkNzAuMDBcIixcbiAgICAgICAgc3RhdHVzOiBcIkRlbGl2ZXJlZCBKYW4gMjUsIDIwMjFcIixcbiAgICAgICAgaW1hZ2VTcmM6XG4gICAgICAgICAgXCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL29yZGVyLWhpc3RvcnktcGFnZS0wMi1wcm9kdWN0LTAxLmpwZ1wiLFxuICAgICAgICBpbWFnZUFsdDpcbiAgICAgICAgICBcIkRldGFpbCBvZiBtZWNoYW5pY2FsIHBlbmNpbCB0aXAgd2l0aCBtYWNoaW5lZCBibGFjayBzdGVlbCBzaGFmdCBhbmQgY2hyb21lIGxlYWQgdGlwLlwiLFxuICAgICAgfSxcbiAgICAgIC8vIE1vcmUgcHJvZHVjdHMuLi5cbiAgICBdLFxuICB9LFxuICB7XG4gICAgbnVtYmVyOiBcIldVODgxOTExMTFcIixcbiAgICBkYXRlOiBcIkphbnVhcnkgMjIsIDIwMjFcIixcbiAgICBkYXRldGltZTogXCIyMDIxLTAxLTIyXCIsXG4gICAgaW52b2ljZUhyZWY6IFwiI1wiLFxuICAgIHRvdGFsOiBcIiQyMzguMDBcIixcbiAgICBwcm9kdWN0czogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJNYWNoaW5lZCBQZW4gYW5kIFBlbmNpbCBTZXRcIixcbiAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgIHByaWNlOiBcIiQ3MC4wMFwiLFxuICAgICAgICBzdGF0dXM6IFwiRGVsaXZlcmVkIEphbiAyNSwgMjAyMVwiLFxuICAgICAgICBpbWFnZVNyYzpcbiAgICAgICAgICBcImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvb3JkZXItaGlzdG9yeS1wYWdlLTAyLXByb2R1Y3QtMDEuanBnXCIsXG4gICAgICAgIGltYWdlQWx0OlxuICAgICAgICAgIFwiRGV0YWlsIG9mIG1lY2hhbmljYWwgcGVuY2lsIHRpcCB3aXRoIG1hY2hpbmVkIGJsYWNrIHN0ZWVsIHNoYWZ0IGFuZCBjaHJvbWUgbGVhZCB0aXAuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJNYWNoaW5lZCBQZW4gYW5kIFBlbmNpbCBTZXRcIixcbiAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgIHByaWNlOiBcIiQ3MC4wMFwiLFxuICAgICAgICBzdGF0dXM6IFwiRGVsaXZlcmVkIEphbiAyNSwgMjAyMVwiLFxuICAgICAgICBpbWFnZVNyYzpcbiAgICAgICAgICBcImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvb3JkZXItaGlzdG9yeS1wYWdlLTAyLXByb2R1Y3QtMDEuanBnXCIsXG4gICAgICAgIGltYWdlQWx0OlxuICAgICAgICAgIFwiRGV0YWlsIG9mIG1lY2hhbmljYWwgcGVuY2lsIHRpcCB3aXRoIG1hY2hpbmVkIGJsYWNrIHN0ZWVsIHNoYWZ0IGFuZCBjaHJvbWUgbGVhZCB0aXAuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJNYWNoaW5lZCBQZW4gYW5kIFBlbmNpbCBTZXRcIixcbiAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgIHByaWNlOiBcIiQ3MC4wMFwiLFxuICAgICAgICBzdGF0dXM6IFwiRGVsaXZlcmVkIEphbiAyNSwgMjAyMVwiLFxuICAgICAgICBpbWFnZVNyYzpcbiAgICAgICAgICBcImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvb3JkZXItaGlzdG9yeS1wYWdlLTAyLXByb2R1Y3QtMDEuanBnXCIsXG4gICAgICAgIGltYWdlQWx0OlxuICAgICAgICAgIFwiRGV0YWlsIG9mIG1lY2hhbmljYWwgcGVuY2lsIHRpcCB3aXRoIG1hY2hpbmVkIGJsYWNrIHN0ZWVsIHNoYWZ0IGFuZCBjaHJvbWUgbGVhZCB0aXAuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJNYWNoaW5lZCBQZW4gYW5kIFBlbmNpbCBTZXRcIixcbiAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgIHByaWNlOiBcIiQ3MC4wMFwiLFxuICAgICAgICBzdGF0dXM6IFwiRGVsaXZlcmVkIEphbiAyNSwgMjAyMVwiLFxuICAgICAgICBpbWFnZVNyYzpcbiAgICAgICAgICBcImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvb3JkZXItaGlzdG9yeS1wYWdlLTAyLXByb2R1Y3QtMDEuanBnXCIsXG4gICAgICAgIGltYWdlQWx0OlxuICAgICAgICAgIFwiRGV0YWlsIG9mIG1lY2hhbmljYWwgcGVuY2lsIHRpcCB3aXRoIG1hY2hpbmVkIGJsYWNrIHN0ZWVsIHNoYWZ0IGFuZCBjaHJvbWUgbGVhZCB0aXAuXCIsXG4gICAgICB9LFxuICAgICAgLy8gTW9yZSBwcm9kdWN0cy4uLlxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBudW1iZXI6IFwiV1U4ODE5MTExMVwiLFxuICAgIGRhdGU6IFwiSmFudWFyeSAyMiwgMjAyMVwiLFxuICAgIGRhdGV0aW1lOiBcIjIwMjEtMDEtMjJcIixcbiAgICBpbnZvaWNlSHJlZjogXCIjXCIsXG4gICAgdG90YWw6IFwiJDIzOC4wMFwiLFxuICAgIHByb2R1Y3RzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIk1hY2hpbmVkIFBlbiBhbmQgUGVuY2lsIFNldFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgcHJpY2U6IFwiJDcwLjAwXCIsXG4gICAgICAgIHN0YXR1czogXCJEZWxpdmVyZWQgSmFuIDI1LCAyMDIxXCIsXG4gICAgICAgIGltYWdlU3JjOlxuICAgICAgICAgIFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9vcmRlci1oaXN0b3J5LXBhZ2UtMDItcHJvZHVjdC0wMS5qcGdcIixcbiAgICAgICAgaW1hZ2VBbHQ6XG4gICAgICAgICAgXCJEZXRhaWwgb2YgbWVjaGFuaWNhbCBwZW5jaWwgdGlwIHdpdGggbWFjaGluZWQgYmxhY2sgc3RlZWwgc2hhZnQgYW5kIGNocm9tZSBsZWFkIHRpcC5cIixcbiAgICAgIH0sXG4gICAgICAvLyBNb3JlIHByb2R1Y3RzLi4uXG4gICAgXSxcbiAgfSxcbiAgLy8gTW9yZSBvcmRlcnMuLi5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweS0xNiBweC00IHNtOnB4LTYgbGc6cHgtOCBsZzpwYi0yNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhsXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC0zeGxcIj5cbiAgICAgICAgICAgIE9yZGVyIGhpc3RvcnlcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICBDaGVjayB0aGUgc3RhdHVzIG9mIHJlY2VudCBvcmRlcnMsIG1hbmFnZSByZXR1cm5zLCBhbmQgZG93bmxvYWRcbiAgICAgICAgICAgIGludm9pY2VzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UmVjZW50IG9yZGVyczwvaDI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMjBcIj5cbiAgICAgICAgICAgIHtvcmRlcnMubWFwKChvcmRlcikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17b3JkZXIubnVtYmVyfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3Itb25seVwiPlxuICAgICAgICAgICAgICAgICAgT3JkZXIgcGxhY2VkIG9ue1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e29yZGVyLmRhdGV0aW1lfT57b3JkZXIuZGF0ZX08L3RpbWU+XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1ncmF5LTUwIHB5LTYgcHgtNCBzbTpmbGV4IHNtOml0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4gc206c3BhY2UteC02IHNtOnB4LTYgbGc6c3BhY2UteC04XCI+XG4gICAgICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwiZmxleC1hdXRvIHNwYWNlLXktNiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIHNtOmdyaWQgc206Z3JpZC1jb2xzLTMgc206Z2FwLXgtNiBzbTpzcGFjZS15LTAgc206ZGl2aWRlLXktMCBsZzp3LTEvMiBsZzpmbGV4LW5vbmUgbGc6Z2FwLXgtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHNtOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5EYXRlIHBsYWNlZDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cInNtOm10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtvcmRlci5kYXRldGltZX0+e29yZGVyLmRhdGV9PC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB0LTYgc206YmxvY2sgc206cHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBPcmRlciBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJzbTptdC0xXCI+e29yZGVyLm51bWJlcn08L2RkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwdC02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgc206YmxvY2sgc206cHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkdD5Ub3RhbCBhbW91bnQ8L2R0PlxuICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJzbTptdC0xXCI+e29yZGVyLnRvdGFsfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRvPXtvcmRlci5pbnZvaWNlSHJlZn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB5LTIgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgc2hhZG93LXNtIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMiBzbTptdC0wIHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgSW52b2ljZVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Zm9yIG9yZGVyIHtvcmRlci5udW1iZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHRleHQtZ3JheS01MDAgc206bXQtNlwiPlxuICAgICAgICAgICAgICAgICAgPGNhcHRpb24gY2xhc3NOYW1lPVwic3Itb25seVwiPlByb2R1Y3RzPC9jYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInNyLW9ubHkgdGV4dC1sZWZ0IHRleHQtc20gdGV4dC1ncmF5LTUwMCBzbTpub3Qtc3Itb25seVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHByLTggZm9udC1ub3JtYWwgc206dy0yLzUgbGc6dy0xLzNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHctMS81IHB5LTMgcHItOCBmb250LW5vcm1hbCBzbTp0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmljZVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gcHktMyBwci04IGZvbnQtbm9ybWFsIHNtOnRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTAgcHktMyB0ZXh0LXJpZ2h0IGZvbnQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCB0ZXh0LXNtIHNtOmJvcmRlci10XCI+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS02IHByLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTYgaC0xNiB3LTE2IHJvdW5kZWQgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJoaWRkZW4gcHktNiBwci04IHNtOnRhYmxlLWNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImhpZGRlbiBweS02IHByLTggc206dGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB5LTYgdGV4dC1yaWdodCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17cHJvZHVjdC5ocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZVwiPiBQcm9kdWN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4sIHtwcm9kdWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIi8qXG4gIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgXG4gIFxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgc29tZSBjaGFuZ2VzIHRvIHlvdXIgY29uZmlnOlxuICBcbiAgYGBgXG4gIC8vIHRhaWx3aW5kLmNvbmZpZy5qc1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyAuLi5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyAuLi5cbiAgICAgIHJlcXVpcmUoJ0B0YWlsd2luZGNzcy90eXBvZ3JhcGh5JyksXG4gICAgICByZXF1aXJlKCdAdGFpbHdpbmRjc3MvYXNwZWN0LXJhdGlvJyksXG4gICAgXSxcbiAgfVxuICBgYGBcbiovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGlzY2xvc3VyZSwgUmFkaW9Hcm91cCwgVGFiIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgeyBNaW51c0ljb24sIFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcbmltcG9ydCB7XG4gIEhlYXJ0SWNvbixcbiAgTWludXNTbUljb24sXG4gIFBsdXNJY29uLFxuICBQbHVzU21JY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSAnLidcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IFF1YW50aXR5IH0gZnJvbSAnfi9jb21wb25lbnRzL1F1YW50aXR5J1xuXG5leHBvcnQgdHlwZSBCcmVhZGNydW1iID0ge1xuICBsYWJlbDogc3RyaW5nXG4gIHJvdXRlPzogc3RyaW5nXG59XG5cbmNvbnN0IHByb2R1Y3QgPSB7XG4gIG5hbWU6ICdaaXAgVG90ZSBCYXNrZXQnLFxuICBwcmljZTogJyQxNDAnLFxuICByYXRpbmc6IDQsXG4gIGJyZWFkY3J1bWJzOiBbXG4gICAgeyBpZDogMSwgbmFtZTogJ1dvbWVuJywgaHJlZjogJyMnIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0Nsb3RoaW5nJywgaHJlZjogJyMnIH0sXG4gIF0sXG4gIGltYWdlczogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0FuZ2xlZCB2aWV3JyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvcHJvZHVjdC1wYWdlLTAzLXByb2R1Y3QtMDEuanBnJyxcbiAgICAgIGFsdDogJ0FuZ2xlZCBmcm9udCB2aWV3IHdpdGggYmFnIHppcHBlZCBhbmQgaGFuZGxlcyB1cHJpZ2h0LicsXG4gICAgfSxcbiAgICAvLyBNb3JlIGltYWdlcy4uLlxuICBdLFxuICBjb2xvcnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnV2FzaGVkIEJsYWNrJyxcbiAgICAgIGJnQ29sb3I6ICdiZy1ncmF5LTcwMCcsXG4gICAgICBzZWxlY3RlZENvbG9yOiAncmluZy1ncmF5LTcwMCcsXG4gICAgfSxcbiAgICB7IG5hbWU6ICdXaGl0ZScsIGJnQ29sb3I6ICdiZy13aGl0ZScsIHNlbGVjdGVkQ29sb3I6ICdyaW5nLWdyYXktNDAwJyB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXYXNoZWQgR3JheScsXG4gICAgICBiZ0NvbG9yOiAnYmctZ3JheS01MDAnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJ3JpbmctZ3JheS01MDAnLFxuICAgIH0sXG4gIF0sXG4gIGRlc2NyaXB0aW9uOiBgXG4gICAgPHA+VGhlIFppcCBUb3RlIEJhc2tldCBpcyB0aGUgcGVyZmVjdCBtaWRwb2ludCBiZXR3ZWVuIHNob3BwaW5nIHRvdGUgYW5kIGNvbWZ5IGJhY2twYWNrLiBXaXRoIGNvbnZlcnRpYmxlIHN0cmFwcywgeW91IGNhbiBoYW5kIGNhcnJ5LCBzaG91bGQgc2xpbmcsIG9yIGJhY2twYWNrIHRoaXMgY29udmVuaWVudCBhbmQgc3BhY2lvdXMgYmFnLiBUaGUgemlwIHRvcCBhbmQgZHVyYWJsZSBjYW52YXMgY29uc3RydWN0aW9uIGtlZXBzIHlvdXIgZ29vZHMgcHJvdGVjdGVkIGZvciBhbGwtZGF5IHVzZS48L3A+XG4gIGAsXG4gIGRldGFpbHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU3RvcmFnZSBJbmZvcm1hdGlvbicsXG4gICAgICBpdGVtczogW1xuICAgICAgICAnTXVsdGlwbGUgc3RyYXAgY29uZmlndXJhdGlvbnMnLFxuICAgICAgICAnU3BhY2lvdXMgaW50ZXJpb3Igd2l0aCB0b3AgemlwJyxcbiAgICAgICAgJ0xlYXRoZXIgaGFuZGxlIGFuZCB0YWJzJyxcbiAgICAgICAgJ0ludGVyaW9yIGRpdmlkZXJzJyxcbiAgICAgICAgJ1N0YWlubGVzcyBzdHJhcCBsb29wcycsXG4gICAgICAgICdEb3VibGUgc3RpdGNoZWQgY29uc3RydWN0aW9uJyxcbiAgICAgICAgJ1dhdGVyLXJlc2lzdGFudCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0RlbGl2ZXJ5IEluZm9ybWF0aW9uJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgICdNdWx0aXBsZSBzdHJhcCBjb25maWd1cmF0aW9ucycsXG4gICAgICAgICdTcGFjaW91cyBpbnRlcmlvciB3aXRoIHRvcCB6aXAnLFxuICAgICAgICAnTGVhdGhlciBoYW5kbGUgYW5kIHRhYnMnLFxuICAgICAgICAnSW50ZXJpb3IgZGl2aWRlcnMnLFxuICAgICAgICAnU3RhaW5sZXNzIHN0cmFwIGxvb3BzJyxcbiAgICAgICAgJ0RvdWJsZSBzdGl0Y2hlZCBjb25zdHJ1Y3Rpb24nLFxuICAgICAgICAnV2F0ZXItcmVzaXN0YW50JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUHJvbW9zJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgICdNdWx0aXBsZSBzdHJhcCBjb25maWd1cmF0aW9ucycsXG4gICAgICAgICdTcGFjaW91cyBpbnRlcmlvciB3aXRoIHRvcCB6aXAnLFxuICAgICAgICAnTGVhdGhlciBoYW5kbGUgYW5kIHRhYnMnLFxuICAgICAgICAnSW50ZXJpb3IgZGl2aWRlcnMnLFxuICAgICAgICAnU3RhaW5sZXNzIHN0cmFwIGxvb3BzJyxcbiAgICAgICAgJ0RvdWJsZSBzdGl0Y2hlZCBjb25zdHJ1Y3Rpb24nLFxuICAgICAgICAnV2F0ZXItcmVzaXN0YW50JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAvLyBNb3JlIHNlY3Rpb25zLi4uXG4gIF0sXG59XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3NlczogYW55KSB7XG4gIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ29sb3IsIHNldFNlbGVjdGVkQ29sb3JdID0gdXNlU3RhdGUocHJvZHVjdC5jb2xvcnNbMF0pXG5cbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgcHJvZCA9IHByb2R1Y3RzLmZpbmQoKHApID0+IHAuaWQgPT09IE51bWJlcihpZCkpXG4gIGludmFyaWFudChwcm9kLCAnZXJyb3InKVxuXG4gIGNvbnN0IGJyZWFkczogQnJlYWRjcnVtYltdID0gW1xuICAgIHsgbGFiZWw6ICdBbGwgUHJvZHVjdHMnLCByb3V0ZTogJy9wcm9kdWN0cycgfSxcbiAgICB7IGxhYmVsOiBwcm9kLmNhdGVnb3J5LCByb3V0ZTogYC8ke3Byb2QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKX1gIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtYXgtdy0yeGwgcHktMTYgcHgtNCBzbTpweS0yNCBzbTpweC02IGxnOm1heC13LTd4bCBsZzpweC04Jz5cbiAgICAgICAgPG5hdlxuICAgICAgICAgIGFyaWEtbGFiZWw9J0JyZWFkY3J1bWInXG4gICAgICAgICAgY2xhc3NOYW1lPSdteC1hdXRvIG10LTggbWItOCBtYXgtdy03eGwgbGc6bXQtMCdcbiAgICAgICAgPlxuICAgICAgICAgIDxvbCByb2xlPSdsaXN0JyBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIHticmVhZHMubWFwKChicmVhZGNydW1iKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2JyZWFkY3J1bWIubGFiZWx9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXticmVhZGNydW1iLnJvdXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9JyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1yZWQtNjAwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YnJlYWRjcnVtYi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteC0yIGZsZXgtbm9uZSB0ZXh0LWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9J00xMC43NSA4Ljc1bDMuNSAzLjI1LTMuNSAzLjI1J1xuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScxLjUnXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RleHQtc20nPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PSdwYWdlJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gdGV4dC1yZWQtNDAwIGhvdmVyOnRleHQtcmVkLTYwMCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9kLm5hbWV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOml0ZW1zLXN0YXJ0IGxnOmdhcC14LTgnPlxuICAgICAgICAgIHsvKiBJbWFnZSBnYWxsZXJ5ICovfVxuICAgICAgICAgIHsvKiA8VGFiLkdyb3VwIGFzPSdkaXYnIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbC1yZXZlcnNlJz4gKi99XG4gICAgICAgICAgey8qIEltYWdlIHNlbGVjdG9yICovfVxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtdC02IGhpZGRlbiB3LWZ1bGwgbWF4LXctMnhsIHNtOmJsb2NrIGxnOm1heC13LW5vbmUnPlxuICAgICAgICAgICAgICA8VGFiLkxpc3QgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IGdhcC02Jz5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlLmlkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggaC0yNCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy13aGl0ZSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGZvY3VzOnJpbmctb2Zmc2V0LTQnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBzZWxlY3RlZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+e2ltYWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA/ICdyaW5nLWluZGlnby01MDAnIDogJ3JpbmctdHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgcm91bmRlZC1tZCByaW5nLTIgcmluZy1vZmZzZXQtMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGFiLkxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICB7LyogPFRhYi5QYW5lbHMgY2xhc3NOYW1lPSdhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsJz48L1RhYi5QYW5lbHM+XG4gICAgICAgICAgPC9UYWIuR3JvdXA+ICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wtcmV2ZXJzZSc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17cHJvZC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgYWx0PXtwcm9kLmltYWdlQWx0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgc206cm91bmRlZC1sZydcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUHJvZHVjdCBpbmZvICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCBweC00IHNtOm10LTE2IHNtOnB4LTAgbGc6bXQtMCc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAge3Byb2QubmFtZX1cbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0zJz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc3Itb25seSc+UHJvZHVjdCBpbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXJlZC01MDAnPlxuICAgICAgICAgICAgICAgIFx1MjBCMXtwcm9kLnByaWNlfXsnICd9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNic+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3NyLW9ubHknPkRlc2NyaXB0aW9uPC9oMz5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgIHtwcm9kLndlaWdodCA/IGAke3Byb2Qud2VpZ2h0fSBwZXIgcXVhbnRpdHlgIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3NwYWNlLXktNiB0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICAgICAge3Byb2QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J210LTYnPlxuICAgICAgICAgICAgICB7LyogUXVhbnRpdHkgKi99XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1tZCBtYi0yIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgUXVhbnRpdHlcbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgPFF1YW50aXR5IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpmbGV4LWNvbDEgbXQtMTAgZmxleCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IG1heC13LXhzIGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXJlZC01MDAgcHktMyBweC04IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXJlZC02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJlZC00MDAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTUwIHNtOnctZnVsbCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPHNlY3Rpb24gYXJpYS1sYWJlbGxlZGJ5PSdkZXRhaWxzLWhlYWRpbmcnIGNsYXNzTmFtZT0nbXQtMTInPlxuICAgICAgICAgICAgICA8aDIgaWQ9J2RldGFpbHMtaGVhZGluZycgY2xhc3NOYW1lPSdzci1vbmx5Jz5cbiAgICAgICAgICAgICAgICBBZGRpdGlvbmFsIGRldGFpbHNcbiAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGJvcmRlci10Jz5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RGlzY2xvc3VyZSBhcz0nZGl2JyBrZXk9e2RldGFpbC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgeyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNjbG9zdXJlLkJ1dHRvbiBjbGFzc05hbWU9J2dyb3VwIHJlbGF0aXZlIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNiB0ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LXJlZC01MDAgZ3JvdXAtaG92ZXI6dGV4dC1yZWQtNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtZ3JheS05MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1zbSBmb250LW1lZGl1bSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTYgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51c1NtSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgaC02IHctNiB0ZXh0LXJlZC01MDAgZ3JvdXAtaG92ZXI6dGV4dC1yZWQtNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNTbUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIGgtNiB3LTYgdGV4dC1ncmF5LTQwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERpc2Nsb3N1cmUuUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J2RpdidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9zZSBwcm9zZS1zbSBwYi02J1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcm9sZT0nbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbC5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmUuUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTWludXNTbUljb24sIFBsdXNTbUljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuXG5leHBvcnQgZnVuY3Rpb24gUXVhbnRpdHkoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGlubGluZS1mbGV4IHJvdW5kZWQtbWQgc2hhZG93LXNtJz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICBjbGFzc05hbWU9J3JlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWwtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy13aGl0ZSBweC0yIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6ei0xMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsdWUtNTAwJ1xuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICA8TWludXNTbUljb24gY2xhc3NOYW1lPSdoLTUgdy01JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3F1YW50aXR5JyBjbGFzc05hbWU9J3NyLW9ubHknPlxuICAgICAgICBRdWFudGl0eVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBuYW1lPSdxdWFudGl0eSdcbiAgICAgICAgaWQ9J3F1YW50aXR5J1xuICAgICAgICBjbGFzc05hbWU9J2ZsZXggdy0xNiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTIgdGV4dC1jZW50ZXIgc2hhZG93LXNtICBzbTp0ZXh0LXNtJ1xuICAgICAgICBwbGFjZWhvbGRlcj0nMSdcbiAgICAgIC8+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICBjbGFzc05hbWU9J3JlbGF0aXZlIC1tbC1weCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1yLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgcHgtMiBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOnotMTAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1ibHVlLTUwMCdcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5OZXh0PC9zcGFuPlxuICAgICAgICA8UGx1c1NtSWNvbiBjbGFzc05hbWU9J2gtNSB3LTUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICIvKlxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArIFxuICBcbiAgVGhpcyBleGFtcGxlIHJlcXVpcmVzIHNvbWUgY2hhbmdlcyB0byB5b3VyIGNvbmZpZzpcbiAgXG4gIGBgYFxuICAvLyB0YWlsd2luZC5jb25maWcuanNcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gLi4uXG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gLi4uXG4gICAgICByZXF1aXJlKCdAdGFpbHdpbmRjc3MvZm9ybXMnKSxcbiAgICBdLFxuICB9XG4gIGBgYFxuKi9cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSYWRpb0dyb3VwIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQge1xuICBDaGVja0NpcmNsZUljb24sXG4gIENyZWRpdENhcmRJY29uLFxuICBUcmFzaEljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgeyBDYXNoSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCB7IHByb2QgfSBmcm9tICcuL2NhcnQnXG5pbXBvcnQgeyBRdWFudGl0eSB9IGZyb20gJ34vY29tcG9uZW50cy9RdWFudGl0eSdcblxuY29uc3QgcGF5bWVudE1ldGhvZHMgPSBbXG4gIHsgaWQ6ICdnY2FzaCcsIHRpdGxlOiAnR0Nhc2gnLCBpbWFnZVNyYzogJy9pbWFnZXMvZ2Nhc2gtbG9nby5wbmcnIH0sXG4gIHsgaWQ6ICdjYXJkJywgdGl0bGU6ICdDcmVkaXQgb3IgZGViaXQgY2FyZCcgfSxcbiAgeyBpZDogJ2dyYWJwYXknLCB0aXRsZTogJ0dyYWJQYXknLCBpbWFnZVNyYzogJy9pbWFnZXMvZ3JhYnBheS1sb2dvLnBuZycgfSxcbiAgeyBpZDogJ3BheW1heWEnLCB0aXRsZTogJ1BheU1heWEnLCBpbWFnZVNyYzogJy9pbWFnZXMvcGF5bWF5YS1sb2dvLnBuZycgfSxcbiAgeyBpZDogJ2NvZCcsIHRpdGxlOiAnQ2FzaCBvbiBkZWxpdmVyeScgfSxcbl1cblxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFBheW1lbnRNZXRob2QsIHNldFNlbGVjdGVkUGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZShcbiAgICBwYXltZW50TWV0aG9kc1swXVxuICApXG4gIGNvbnN0IHByb2R1Y3RzID0gcHJvZFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktNTAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gbWF4LXctMnhsIHB4LTQgcHQtMjQgcGItMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOCc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J21iLTYgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bCc+XG4gICAgICAgICAgQ2hlY2tvdXRcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nc3Itb25seSc+Q2hlY2tvdXQ8L2gyPlxuXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbGc6Z3JpZCBsZzpncmlkLWNvbHMtMiBsZzpnYXAteC0xMiB4bDpnYXAteC0xNic+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgQ29udGFjdCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J3Bob25lLW51bWJlcidcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBob25lIG51bWJlclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEnPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcbiAgICAgICAgICAgICAgICAgICAgaWQ9J3Bob25lLW51bWJlcidcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUtbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J3RlbCdcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1wLTMgZT0nZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkIGJvcmRlciBweS0yIHB4LTMgbGVhZGluZy10aWdodCB0ZXh0LWdyYXktNzAwIHNoYWRvdyBmb2N1czpvdXRsaW5lLW5vbmUnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHB5LTMgcHgtMyBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20nXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNSBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtNSc+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgRGVsaXZlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBncmlkIGdyaWQtY29scy0xIGdhcC15LTYgc206Z3JpZC1jb2xzLTIgc206Z2FwLXgtNCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdmaXJzdC1uYW1lJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRmlyc3QgbmFtZVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZmlyc3QtbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdmaXJzdC1uYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nZ2l2ZW4tbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTMwMCBwLTMgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J2xhc3QtbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExhc3QgbmFtZVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbGFzdC1uYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xhc3QtbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J2ZhbWlseS1uYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHAtMyBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20nXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpjb2wtc3Bhbi0yJz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdhZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkcmVzc1xuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgIGlkPSdhZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nc3RyZWV0LWFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS0zMDAgcC0zIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdjaXR5J1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2l0eSAvIE11bmljaXBhbGl0eVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBtdC0xJz5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NpdHknXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2NpdHknXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdhZGRyZXNzLWxldmVsMidcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xlYWRpbmcgYmxvY2sgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTMwMCBwLTMgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS03MDAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC00IHctNCBmaWxsLWN1cnJlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHonIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J3JlZ2lvbidcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFByb3ZpbmNlXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEnPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JlZ2lvbidcbiAgICAgICAgICAgICAgICAgICAgICBpZD0ncmVnaW9uJ1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdDYXZpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J2FkZHJlc3MtbGV2ZWwxJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHAtMyBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGRpc2FibGVkOmJvcmRlciBkaXNhYmxlZDp0ZXh0LWdyYXktNTAwICBzbTp0ZXh0LXNtJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBwdC01Jz5cbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZFBheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cC5MYWJlbCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgICBQYXltZW50IG1ldGhvZFxuICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cC5MYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktNiBzbTpncmlkLWNvbHMtMiBzbTpnYXAteC00Jz5cbiAgICAgICAgICAgICAgICAgIHtwYXltZW50TWV0aG9kcy5tYXAoKHBheW1lbnRNZXRob2QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAuT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwYXltZW50TWV0aG9kLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgY2hlY2tlZCwgYWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkID8gJ2JvcmRlci10cmFuc3BhcmVudCcgOiAnYm9yZGVyLWdyYXktMzAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ3JpbmctMiByaW5nLWdyZWVuLTUwMCcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlbGF0aXZlIGZsZXggY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyBib3JkZXIgYmctd2hpdGUgcC00IHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgeyh7IGNoZWNrZWQsIGFjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF5bWVudE1ldGhvZC5pZCA9PT0gJ2NhcmQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWRpdENhcmRJY29uIGNsYXNzTmFtZT0nIG1yLTIgdy0xMCB0ZXh0LWdyZWVuLTUwMCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF5bWVudE1ldGhvZC5pZCA9PT0gJ2NvZCcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FzaEljb24gY2xhc3NOYW1lPScgbXItMiB3LTggdGV4dC1ncmVlbi01MDAnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAuTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3NwYW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BheW1lbnRNZXRob2Q/LmltYWdlU3JjID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGF5bWVudE1ldGhvZC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cGF5bWVudE1ldGhvZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0yNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UmFkaW9Hcm91cC5EZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz0nc3BhbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC0xIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BheW1lbnRNZXRob2QudHVybmFyb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cC5EZXNjcmlwdGlvbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFJhZGlvR3JvdXAuRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3NwYW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXltZW50TWV0aG9kLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwLkRlc2NyaXB0aW9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja2VkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC01IHctNSB0ZXh0LWdyZWVuLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JvcmRlcicgOiAnYm9yZGVyLTInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItZ3JlZW4tNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgLWluc2V0LXB4IHJvdW5kZWQtbGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBQYXltZW50ICovfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE9yZGVyIHN1bW1hcnkgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUgbGc6bXQtMCc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPk9yZGVyIHN1bW1hcnk8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgc2hhZG93LXNtJz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc3Itb25seSc+SXRlbXMgaW4geW91ciBjYXJ0PC9oMz5cbiAgICAgICAgICAgICAgPHVsIHJvbGU9J2xpc3QnIGNsYXNzTmFtZT0nZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9J2ZsZXggcHktNiBweC00IHNtOnB4LTYnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1zaHJpbmstMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LmltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTQwIHJvdW5kZWQtbWQnXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTYgZmxleCBmbGV4LTEgZmxleC1jb2wgcHQtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pbi13LTAgZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1sZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1yZWQtODAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbWQgbXQtMSB0ZXh0LXJlZC01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjBCMXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yICc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1YW50aXR5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC00IGZsb3ctcm9vdCBmbGV4LXNocmluay0wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9Jy1tLTIuNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy13aGl0ZSBwLTIuNSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtcmVkLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+UmVtb3ZlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gY2xhc3NOYW1lPSdoLTUgdy01JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIHB0LTInPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9J3NwYWNlLXktNiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHktNiBweC00IHNtOnB4LTYnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT0ndGV4dC1zbSc+U3VidG90YWw8L2R0PlxuICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cdTIwQjExMDAwPC9kZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9J3RleHQtc20nPkRlbGl2ZXJ5IGZlZTwvZHQ+XG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgIGxpbmUtdGhyb3VnaCc+XG4gICAgICAgICAgICAgICAgICAgIFx1MjBCMTUwXG4gICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgRnJlZSBkZWxpdmVyeSBwcm9tbyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtNic+XG4gICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgZm9udC1tZWRpdW0nPlRvdGFsIGFtb3VudDwvZHQ+XG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1yZWQtNTAwJz5cdTIwQjExMDAwPC9kZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kbD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB5LTYgcHgtNCBzbTpweC02Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctcmVkLTUwMCBweS0zIHB4LTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLXJlZC02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJlZC01MDAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTUwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbmZpcm0gb3JkZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICIvKlxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArIFxuICBcbiAgVGhpcyBleGFtcGxlIHJlcXVpcmVzIHNvbWUgY2hhbmdlcyB0byB5b3VyIGNvbmZpZzpcbiAgXG4gIGBgYFxuICAvLyB0YWlsd2luZC5jb25maWcuanNcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gLi4uXG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gLi4uXG4gICAgICByZXF1aXJlKCdAdGFpbHdpbmRjc3MvZm9ybXMnKSxcbiAgICBdLFxuICB9XG4gIGBgYFxuKi9cbmltcG9ydCB7XG4gIENoZWNrSWNvbixcbiAgQ2xvY2tJY29uLFxuICBRdWVzdGlvbk1hcmtDaXJjbGVJY29uLFxuICBUcmFzaEljb24sXG4gIFhJY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgUXVhbnRpdHkgfSBmcm9tICd+L2NvbXBvbmVudHMvUXVhbnRpdHknXG5pbXBvcnQgeyBCcmFuZCwgQ2F0ZWdvcnksIFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3RzJ1xuXG5jb25zdCBwcm9kdWN0cyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdCYXNpYyBUZWUnLFxuICAgIGhyZWY6ICcjJyxcbiAgICBwcmljZTogJyQzMi4wMCcsXG4gICAgY29sb3I6ICdTaWVubmEnLFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgc2l6ZTogJ0xhcmdlJyxcbiAgICBpbWFnZVNyYzpcbiAgICAgICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL3Nob3BwaW5nLWNhcnQtcGFnZS0wMS1wcm9kdWN0LTAxLmpwZycsXG4gICAgaW1hZ2VBbHQ6IFwiRnJvbnQgb2YgbWVuJ3MgQmFzaWMgVGVlIGluIHNpZW5uYS5cIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdCYXNpYyBUZWUnLFxuICAgIGhyZWY6ICcjJyxcbiAgICBwcmljZTogJyQzMi4wMCcsXG4gICAgY29sb3I6ICdCbGFjaycsXG4gICAgaW5TdG9jazogZmFsc2UsXG4gICAgbGVhZFRpbWU6ICczXHUyMDEzNCB3ZWVrcycsXG4gICAgc2l6ZTogJ0xhcmdlJyxcbiAgICBpbWFnZVNyYzpcbiAgICAgICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL3Nob3BwaW5nLWNhcnQtcGFnZS0wMS1wcm9kdWN0LTAyLmpwZycsXG4gICAgaW1hZ2VBbHQ6IFwiRnJvbnQgb2YgbWVuJ3MgQmFzaWMgVGVlIGluIGJsYWNrLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ05vbWFkIFR1bWJsZXInLFxuICAgIGhyZWY6ICcjJyxcbiAgICBwcmljZTogJyQzNS4wMCcsXG4gICAgY29sb3I6ICdXaGl0ZScsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbWFnZVNyYzpcbiAgICAgICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL3Nob3BwaW5nLWNhcnQtcGFnZS0wMS1wcm9kdWN0LTAzLmpwZycsXG4gICAgaW1hZ2VBbHQ6ICdJbnN1bGF0ZWQgYm90dGxlIHdpdGggd2hpdGUgYmFzZSBhbmQgYmxhY2sgc25hcCBsaWQuJyxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHByb2Q6IFByb2R1Y3RbXSA9IFtcbiAge1xuICAgIGlkOiAxOCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtcHJlbWl1bS1jaGlja2VuLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtcHJlbWl1bS1jaGlja2VuJyxcbiAgICBuYW1lOiAnUHJlbWl1bSBDaGlja2VuJyxcbiAgICB3ZWlnaHQ6ICcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDI1MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0MSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1iZWVmLWN1YmVzLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLWJlZWYtY3ViZXMtNTAwZycsXG4gICAgbmFtZTogJ0JlZWYgQ3ViZXMnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5CRUVGLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTJ4bCBweC00IHB0LTI0IHBiLTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LTgnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsJz5cbiAgICAgICAgICBTaG9wcGluZyBDYXJ0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXQtMTIgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMTIgbGc6aXRlbXMtc3RhcnQgbGc6Z2FwLXgtMTIgeGw6Z2FwLXgtMTYnPlxuICAgICAgICAgIDxzZWN0aW9uIGFyaWEtbGFiZWxsZWRieT0nY2FydC1oZWFkaW5nJyBjbGFzc05hbWU9J2xnOmNvbC1zcGFuLTcnPlxuICAgICAgICAgICAgPGgyIGlkPSdjYXJ0LWhlYWRpbmcnIGNsYXNzTmFtZT0nc3Itb25seSc+XG4gICAgICAgICAgICAgIEl0ZW1zIGluIHlvdXIgc2hvcHBpbmcgY2FydFxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgIHJvbGU9J2xpc3QnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb2QubWFwKChwcm9kdWN0LCBwcm9kdWN0SWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggcHQtNiBwYi0zIHNtOnB0LTEwIHNtOnBiLTUnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtc2hyaW5rLTAnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtMjQgdy0yNCByb3VuZGVkLW1kIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHNtOmgtNDggc206dy00OCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVzdGlmeS1iZXR3ZWVuc206bWwtNiBtbC00IGZsZXggZmxleC0xIGZsZXgtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHByLTkgc206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTpnYXAteC02IHNtOnByLTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWxnIHNtOnRleHQteGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1yZWQtNTAwIHNtOnRleHQtbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcdTIwQjF7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1YW50aXR5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IHNtOm10LTAgc206cHItOSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSctbS0yIGlubGluZS1mbGV4IHAtMiBwdC0yLjUgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlJlbW92ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIGNsYXNzTmFtZT0naC01IHctNScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIHsvKiBPcmRlciBzdW1tYXJ5ICovfVxuICAgICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3N1bW1hcnktaGVhZGluZydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtMTYgcm91bmRlZC1sZyBiZy1ncmF5LTUwIHB4LTQgcHktNiBzbTpwLTYgbGc6Y29sLXNwYW4tNSBsZzptdC0wIGxnOnAtOCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgaWQ9J3N1bW1hcnktaGVhZGluZydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE9yZGVyIHN1bW1hcnlcbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9J210LTYgc3BhY2UteS00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyYXktNjAwJz5TdWJ0b3RhbDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cdTIwQjExMDAwPC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB0LTQnPlxuICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxpdmVyeSBmZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTIgZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+RGVsaXZlcnkgZmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25NYXJrQ2lyY2xlSWNvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC01IHctNSdcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9J3RleHQtcmlnaHQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwICc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmUtdGhyb3VnaCc+XHUyMEIxNTA8L3A+XG4gICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgIEZyZWUgZGVsaXZlcnkgcHJvbW8gYXBwbGllZFxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtNCc+XG4gICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT0ndGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgVG90YWwgYW1vdW50XG4gICAgICAgICAgICAgICAgPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1yZWQtNTAwJz5cdTIwQjExMDAwPC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2RsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNic+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPScvY2hlY2tvdXQnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXJlZC01MDAgcHktMyBweC00IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1yZWQtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yZWQtNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS01MCc+XG4gICAgICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IFByb2R1Y3RzUGFnZSwgeyBDYXRlZ29yeSB9IGZyb20gXCIuL3Byb2R1Y3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoaWNrZW5QYWdlKCkge1xuICByZXR1cm4gPFByb2R1Y3RzUGFnZSBvbmx5Q2F0ZWdvcnk9e0NhdGVnb3J5LkNISUNLRU59IC8+O1xufVxuIiwgIi8qXG4gIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgXG4gIFxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgc29tZSBjaGFuZ2VzIHRvIHlvdXIgY29uZmlnOlxuICBcbiAgYGBgXG4gIC8vIHRhaWx3aW5kLmNvbmZpZy5qc1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyAuLi5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyAuLi5cbiAgICAgIHJlcXVpcmUoJ0B0YWlsd2luZGNzcy9mb3JtcycpLFxuICAgICAgcmVxdWlyZSgnQHRhaWx3aW5kY3NzL2FzcGVjdC1yYXRpbycpLFxuICAgIF0sXG4gIH1cbiAgYGBgXG4qL1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEaWFsb2csIFBvcG92ZXIsIFRhYiwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IHtcbiAgTWVudUljb24sXG4gIFNlYXJjaEljb24sXG4gIFNob3BwaW5nQ2FydEljb24sXG4gIFVzZXJJY29uLFxuICBYSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuaW1wb3J0IHsgQnJhbmQsIENhdGVnb3J5LCBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0cydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuY29uc3QgbmF2aWdhdGlvbiA9IHtcbiAgY2F0ZWdvcmllczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdQb3JrJyxcbiAgICAgIGZlYXR1cmVkOiBbXG4gICAgICAgIHsgbmFtZTogJ1NsZWVwJywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ1N3aW13ZWFyJywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ1VuZGVyd2VhcicsIGhyZWY6ICcjJyB9LFxuICAgICAgXSxcbiAgICAgIGNvbGxlY3Rpb246IFtcbiAgICAgICAgeyBuYW1lOiAnRXZlcnl0aGluZycsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdDb3JlJywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ05ldyBBcnJpdmFscycsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdTYWxlJywgaHJlZjogJyMnIH0sXG4gICAgICBdLFxuICAgICAgYnJhbmRzOiBbXG4gICAgICAgIHsgbmFtZTogJ0Z1bGwgTmVsc29uJywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ015IFdheScsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdSZS1BcnJhbmdlZCcsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdDb3VudGVyZmVpdCcsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdTaWduaWZpY2FudCBPdGhlcicsIGhyZWY6ICcjJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDaGlja2VuJyxcbiAgICAgIGZlYXR1cmVkOiBbXG4gICAgICAgIHsgbmFtZTogJ0Nhc3VhbCcsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdCb3hlcnMnLCBocmVmOiAnIycgfSxcbiAgICAgICAgeyBuYW1lOiAnT3V0ZG9vcicsIGhyZWY6ICcjJyB9LFxuICAgICAgXSxcbiAgICAgIGNvbGxlY3Rpb246IFtcbiAgICAgICAgeyBuYW1lOiAnRXZlcnl0aGluZycsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdDb3JlJywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ05ldyBBcnJpdmFscycsIGhyZWY6ICcjJyB9LFxuICAgICAgICB7IG5hbWU6ICdTYWxlJywgaHJlZjogJyMnIH0sXG4gICAgICBdLFxuICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICB7IG5hbWU6ICdBcnR3b3JrIFRlZXMnLCBocmVmOiAnIycgfSxcbiAgICAgICAgeyBuYW1lOiAnUGFudHMnLCBocmVmOiAnIycgfSxcbiAgICAgICAgeyBuYW1lOiAnQWNjZXNzb3JpZXMnLCBocmVmOiAnIycgfSxcbiAgICAgICAgeyBuYW1lOiAnQm94ZXJzJywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ0Jhc2ljIFRlZXMnLCBocmVmOiAnIycgfSxcbiAgICAgIF0sXG4gICAgICBicmFuZHM6IFtcbiAgICAgICAgeyBuYW1lOiAnU2lnbmlmaWNhbnQgT3RoZXInLCBocmVmOiAnIycgfSxcbiAgICAgICAgeyBuYW1lOiAnTXkgV2F5JywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ0NvdW50ZXJmZWl0JywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ1JlLUFycmFuZ2VkJywgaHJlZjogJyMnIH0sXG4gICAgICAgIHsgbmFtZTogJ0Z1bGwgTmVsc29uJywgaHJlZjogJyMnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIHBhZ2VzOiBbeyBuYW1lOiAnQmVlZicsIGhyZWY6ICcjJyB9XSxcbn1cblxuY29uc3QgdHJlbmRpbmdQcm9kdWN0czogUHJvZHVjdFtdID0gW1xuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tYnJlYXN0LWZpbGxldHMtODYwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4tYnJlYXN0LWZpbGxldHMtODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gQnJlYXN0cyBGaWxsZXRzJyxcbiAgICB3ZWlnaHQ6ICc4NjBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVwZWxsZW5kdXMgbmVtbyBpbGx1bSBkaWduaXNzaW1vcyBmdWdpdCBvYmNhZWNhdGkgdmVsIGJlYXRhZT8gTnVtcXVhbSBzaW1pbGlxdWUgdml0YWUgaW52ZW50b3JlIScsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtY2hpY2tlbi1icmVhc3RzLTg2MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLWJyZWFzdHMtODYwZycsXG4gICAgbmFtZTogJ0NoaWNrZW4gQnJlYXN0cycsXG4gICAgd2VpZ2h0OiAnODYwZycsXG4gICAgYnJhbmQ6IEJyYW5kLkJPVU5UWV9GUkVTSCxcbiAgICBjYXRlZ29yeTogQ2F0ZWdvcnkuQ0hJQ0tFTixcbiAgICBwcmljZTogMTgwLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcGVsbGVuZHVzIG5lbW8gaWxsdW0gZGlnbmlzc2ltb3MgZnVnaXQgb2JjYWVjYXRpIHZlbCBiZWF0YWU/IE51bXF1YW0gc2ltaWxpcXVlIHZpdGFlIGludmVudG9yZSEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL0JGLWNoaWNrZW4tbGVnLXF1YXJ0ZXJzLTg2MGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdCRi1jaGlja2VuLWxlZy1xdWFydGVycy04NjBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBMZWcgUXVhcnRlcnMnLFxuICAgIHdlaWdodDogJzg2MGcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDE4MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZXBlbGxlbmR1cyBuZW1vIGlsbHVtIGRpZ25pc3NpbW9zIGZ1Z2l0IG9iY2FlY2F0aSB2ZWwgYmVhdGFlPyBOdW1xdWFtIHNpbWlsaXF1ZSB2aXRhZSBpbnZlbnRvcmUhJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9CRi1jaGlja2VuLW51Z2dldHMtMjAwZy5qcGVnJyxcbiAgICBpbWFnZUFsdDogJ0JGLWNoaWNrZW4tbnVnZ2V0cy0yMDBnJyxcbiAgICBuYW1lOiAnQ2hpY2tlbiBOdWdnZXRzJyxcbiAgICB3ZWlnaHQ6ICcyMDBnJyxcbiAgICBicmFuZDogQnJhbmQuQk9VTlRZX0ZSRVNILFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5DSElDS0VOLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVwZWxsZW5kdXMgbmVtbyBpbGx1bSBkaWduaXNzaW1vcyBmdWdpdCBvYmNhZWNhdGkgdmVsIGJlYXRhZT8gTnVtcXVhbSBzaW1pbGlxdWUgdml0YWUgaW52ZW50b3JlIScsXG4gIH0sXG5dXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICB7XG4gICAgbmFtZTogJ0NoaWNrZW4nLFxuICAgIGltYWdlU3JjOiAnL2ltYWdlcy9jYXRlZ29yeS1jaGlja2VuMi5qcGcnLFxuICAgIGltYWdlQWx0OiAnY2F0ZWdvcnktY2hpY2tlbicsXG4gICAgaHJlZjogJy9jaGlja2VuJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQb3JrJyxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvY2F0ZWdvcnktcG9yazIuanBnJyxcbiAgICBpbWFnZUFsdDogJ2NhdGVnb3J5LXBvcmsnLFxuICAgIGhyZWY6ICcvcG9yaycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmVlZicsXG4gICAgaW1hZ2VTcmM6ICcvaW1hZ2VzL2NhdGVnb3J5LWJlZWYyLmpwZycsXG4gICAgaW1hZ2VBbHQ6ICdjYXRlZ29yeS1iZWVmJyxcbiAgICBocmVmOiAnL2JlZWYnLFxuICB9LFxuXVxuY29uc3QgdGVzdGltb25pYWxzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgcXVvdGU6XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9sbGl0aWEgbm9iaXMgYXV0ZW0sIGltcGVkaXQgZGlnbmlzc2ltb3MgcXVpZGVtIGN1bXF1ZSBsaWJlcm8gZWEgcXVhbSBwb3JybyB0ZW1wb3JlLicsXG4gICAgYXR0cmlidXRpb246ICdTaGVycmlseW4gUmV5ZXMsIENhbWVsbGEgTGVzc2FuZHJhJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHF1b3RlOlxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1vbGxpdGlhIG5vYmlzIGF1dGVtLCBpbXBlZGl0IGRpZ25pc3NpbW9zIHF1aWRlbSBjdW1xdWUgbGliZXJvIGVhIHF1YW0gcG9ycm8gdGVtcG9yZS4nLFxuICAgIGF0dHJpYnV0aW9uOiAnSmFzb24gT3JxdWV6YSwgUGFya2xhbmUgQ291bnRyeSBIb21lcycsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBxdW90ZTpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNb2xsaXRpYSBub2JpcyBhdXRlbSwgaW1wZWRpdCBkaWduaXNzaW1vcyBxdWlkZW0gY3VtcXVlIGxpYmVybyBlYSBxdWFtIHBvcnJvIHRlbXBvcmUuJyxcbiAgICBhdHRyaWJ1dGlvbjogJ0V2YW4gQW5nZWxvIE1vbnJlYWwsIEx1bWluYSBIb21lcycsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcbiAgY29uc3QgW21vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICA8bWFpbj5cbiAgICAgICAgey8qIEhlcm8gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBsZzpib3JkZXItMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgaGlkZGVuIGgtZnVsbCB3LTEvMiBiZy1ncmF5LTUwIGxnOmJsb2NrJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBiZy1ncmF5LTUwIGxnOmJnLXRyYW5zcGFyZW50Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOnB4LTgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTJ4bCBweS0yNCBtZDpwdC00MCBsZzptYXgtdy1ub25lIGxnOnB5LTY0Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpwci0xNic+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC01eGwgbGc6dGV4dC02eGwnPlxuICAgICAgICAgICAgICAgICAgICAgIFF1YWxpdHkgbWVhdHMgYXQgeW91ciBmaW5nZXJ0aXBzXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtNCB0ZXh0LXhsIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICAgICAgICAgIENob29zZSBmcm9tIG91ciB3aWRlIHNlbGVjdGlvbiBvZiBmcmVzaGx5IHByZXBhcmVkIG1lYXRzXG4gICAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHQgdG8geW91ciBkb29yLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9wcm9kdWN0cydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1yZWQtNjAwIHB5LTMgcHgtOCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXJlZC03MDAgJ1xuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IHNob3BwaW5nXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC00OCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgc206aC04MCBsZzphYnNvbHV0ZSBsZzp0b3AtMCBsZzpyaWdodC0wIGxnOmgtZnVsbCBsZzp3LTEvMic+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9eydpbWFnZXMvaGVyby1mcmVzaC1tZWF0LmpwZyd9XG4gICAgICAgICAgICAgICAgYWx0PSdoZXJvLWZyZXNoLW1lYXQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBCZXN0c2VsbGVycyAqL31cbiAgICAgICAgPHNlY3Rpb24gYXJpYS1sYWJlbGxlZGJ5PSd0cmVuZGluZy1oZWFkaW5nJyBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMTYgc206cHktMjQgbGc6bXgtYXV0byBsZzptYXgtdy03eGwgbGc6cHktMzIgbGc6cHgtOCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgc206cHgtNiBsZzpweC0wJz5cbiAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgaWQ9J3RyZW5kaW5nLWhlYWRpbmcnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQmVzdHNlbGxlcnNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz0nL3Byb2R1Y3RzJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naGlkZGVuIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtNTAwIHNtOmJsb2NrJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VlIGFsbCBwcm9kdWN0czxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4gJnJhcnI7PC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG10LTgnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIG92ZXJmbG93LXgtYXV0byc+XG4gICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICByb2xlPSdsaXN0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteC00IGlubGluZS1mbGV4IHNwYWNlLXgtOCBzbTpteC02IGxnOm14LTAgbGc6Z3JpZCBsZzpncmlkLWNvbHMtNCBsZzpnYXAteC04IGxnOnNwYWNlLXgtMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dHJlbmRpbmdQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggdy02NCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBsZzp3LWF1dG8gJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyb3VwIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbXQtMSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1yZWQtNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAgJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMSB0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTIwQjF7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTIgcHgtNCBzbTpoaWRkZW4nPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPScjJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtcmVkLTYwMCBob3Zlcjp0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZWUgYWxsIHByb2R1Y3RzPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnPiAmcmFycjs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIENhdGVnb3JpZXMgKi99XG4gICAgICAgIDxzZWN0aW9uIGFyaWEtbGFiZWxsZWRieT0nY2F0ZWdvcmllcy1oZWFkaW5nJyBjbGFzc05hbWU9J2JnLWdyYXktNTAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTd4bCBweC00IHNtOnB4LTYgbGc6cHgtOCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtYXgtdy0yeGwgcHktMTYgc206cHktMjQgbGc6bWF4LXctbm9uZSBsZzpweS0zMic+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGlkPSdjYXRlZ29yaWVzLWhlYWRpbmcnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02IHNwYWNlLXktMTIgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMyBsZzpnYXAteC02IGxnOnNwYWNlLXktMCc+XG4gICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Lm5hbWV9IGNsYXNzTmFtZT0nZ3JvdXAgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc206YXNwZWN0LXctMiBzbTphc3BlY3QtaC0xIGxnOmFzcGVjdC13LTEgbGc6YXNwZWN0LWgtMSByZWxhdGl2ZSBoLTgwIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy13aGl0ZSBncm91cC1ob3ZlcjpvcGFjaXR5LTc1IHNtOmgtNjQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2F0ZWdvcnkuaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NhdGVnb3J5LmltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtdC02IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIGhvdmVyOnRleHQtcmVkLTYwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2NhdGVnb3J5LmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogU2FsZSBhbmQgdGVzdGltb25pYWxzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgICB7LyogRGVjb3JhdGl2ZSBiYWNrZ3JvdW5kIGltYWdlIGFuZCBncmFkaWVudCAqL31cbiAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPSd0cnVlJyBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAgbXgtYXV0byBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9J2ltYWdlcy9zYWxlLWRlbGl2ZXJ5LmpwZWcnXG4gICAgICAgICAgICAgICAgYWx0PScnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgaW5zZXQtMCBiZy13aGl0ZSBiZy1vcGFjaXR5LTYwJyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHZpYS13aGl0ZScgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBTYWxlICovfVxuICAgICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3NhbGUtaGVhZGluZydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgbXgtYXV0byBmbGV4IG1heC13LTd4bCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtNCBwdC0zMiB0ZXh0LWNlbnRlciBzbTpweC02IGxnOnB4LTMyJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTJ4bCBsZzptYXgtdy1ub25lJz5cbiAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgaWQ9J3NhbGUtaGVhZGluZydcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC01eGwgbGc6dGV4dC02eGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBGcmVlIGRlbGl2ZXJ5IGZvciBvcmRlcnMgd29ydGh7JyAnfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1yZWQtNjAwJz5cdTIwQjE1MDA8L3NwYW4+IGFuZCBhYm92ZSpcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdteC1hdXRvIG10LTQgbWF4LXcteGwgdGV4dC14bCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAqd2l0aGluIHRoZSAzLjMga20gcmFkaXVzIG9mIFBhcmtsYW5lIENvdW50cnkgSG9tZXNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPScvcHJvZHVjdHMnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3Zlcjpwb2ludGVyIG10LTYgaW5saW5lLWJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctcmVkLTYwMCBweS0zIHB4LTggZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1yZWQtNzAwIHNtOnctYXV0bydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXJ0IHNob3BwaW5nXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIHsvKiBUZXN0aW1vbmlhbHMgKi99XG4gICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0ndGVzdGltb25pYWwtaGVhZGluZydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgbXgtYXV0byBtYXgtdy03eGwgcHktMjQgcHgtNCBzbTpweC02IGxnOnB5LTMyIGxnOnB4LTgnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gbWF4LXctMnhsIGxnOm1heC13LW5vbmUnPlxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBpZD0ndGVzdGltb25pYWwtaGVhZGluZydcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFdoYXQgYXJlIHBlb3BsZSBzYXlpbmc/XG4gICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTE2IHNwYWNlLXktMTYgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMyBsZzpnYXAteC04IGxnOnNwYWNlLXktMCc+XG4gICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBrZXk9e3Rlc3RpbW9uaWFsLmlkfSBjbGFzc05hbWU9J3NtOmZsZXggbGc6YmxvY2snPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTh9XG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDE4J1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgtc2hyaW5rLTAgdGV4dC1yZWQtNjAwJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00wIDE4aDguN3YtNS41NTVjLS4wMjQtMy45MDYgMS4xMTMtNi44NDEgMi44OTItOS42OEw2LjQ1MiAwQzMuMTg4IDIuNjQ0LS4wMjYgNy44NiAwIDEyLjQ2OVYxOHptMTIuNDA4IDBoOC43di01LjU1NUMyMS4wODMgOC41MzkgMjIuMjIgNS42MDQgMjQgMi43NjVMMTguODU5IDBjLTMuMjYzIDIuNjQ0LTYuNDc2IDcuODYtNi40NTEgMTIuNDY5VjE4eidcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTggc206bXQtMCBzbTptbC02IGxnOm10LTEwIGxnOm1sLTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGNpdGUgY2xhc3NOYW1lPSdtdC00IGJsb2NrIGZvbnQtc2VtaWJvbGQgbm90LWl0YWxpYyB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC5hdHRyaWJ1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2NpdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBGb3JtIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCdcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSdcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3NlcnZpY2VzL2F1dGguc2VydmVyJ1xuXG4vKlxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArIFxuICBcbiAgVGhpcyBleGFtcGxlIHJlcXVpcmVzIHNvbWUgY2hhbmdlcyB0byB5b3VyIGNvbmZpZzpcbiAgXG4gIGBgYFxuICAvLyB0YWlsd2luZC5jb25maWcuanNcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gLi4uXG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gLi4uXG4gICAgICByZXF1aXJlKCdAdGFpbHdpbmRjc3MvZm9ybXMnKSxcbiAgICBdLFxuICB9XG4gIGBgYFxuKi9cblxuLy8gLy8gU2Vjb25kLCB3ZSBuZWVkIHRvIGV4cG9ydCBhbiBhY3Rpb24gZnVuY3Rpb24sIGhlcmUgd2Ugd2lsbCB1c2UgdGhlXG4vLyAvLyBgYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUgbWV0aG9kYFxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIC8vIHdlIGNhbGwgdGhlIG1ldGhvZCB3aXRoIHRoZSBuYW1lIG9mIHRoZSBzdHJhdGVneSB3ZSB3YW50IHRvIHVzZSBhbmQgdGhlXG4gIC8vIHJlcXVlc3Qgb2JqZWN0LCBvcHRpb25hbGx5IHdlIHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIFVSTHMgd2Ugd2FudCB0aGUgdXNlclxuICAvLyB0byBiZSByZWRpcmVjdGVkIHRvIGFmdGVyIGEgc3VjY2VzcyBvciBhIGZhaWx1cmVcbiAgYXdhaXQgYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUoJ3VzZXItcGFzcycsIHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6ICcvJyxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxuICByZXR1cm4gbnVsbFxufVxuXG4vLyAvLyBGaW5hbGx5LCB3ZSBjYW4gZXhwb3J0IGEgbG9hZGVyIGZ1bmN0aW9uIHdoZXJlIHdlIGNoZWNrIGlmIHRoZSB1c2VyIGlzXG4vLyAvLyBhdXRoZW50aWNhdGVkIHdpdGggYGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkYCBhbmQgcmVkaXJlY3QgdG8gdGhlXG4vLyAvLyBkYXNoYm9hcmQgaWYgaXQgaXMgb3IgcmV0dXJuIG51bGwgaWYgaXQncyBub3Rcbi8vIGV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy8gICAvLyBJZiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQgcmVkaXJlY3QgdG8gL2Rhc2hib2FyZCBkaXJlY3RseVxuLy8gICByZXR1cm4gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuLy8gICAgIHN1Y2Nlc3NSZWRpcmVjdDogJy8nLFxuLy8gICB9KVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LypcbiAgICAgICAgVGhpcyBleGFtcGxlIHJlcXVpcmVzIHVwZGF0aW5nIHlvdXIgdGVtcGxhdGU6XG5cbiAgICAgICAgYGBgXG4gICAgICAgIDxodG1sIGNsYXNzPVwiaC1mdWxsIGJnLXdoaXRlXCI+XG4gICAgICAgIDxib2R5IGNsYXNzPVwiaC1mdWxsXCI+XG4gICAgICAgIGBgYFxuICAgICAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtaW4taC1mdWxsIHB0LTE2Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHB5LTEyIHB4LTQgc206cHgtNiBsZzpmbGV4LW5vbmUgbGc6cHgtMjAgeGw6cHgtMjQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHctZnVsbCBtYXgtdy1zbSBsZzp3LTk2Jz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J210LTYgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgU2lnbiBpbiB0byB5b3VyIGFjY291bnRcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtdC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgT3J7JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSB0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHNpZ24gdXAgZm9yIGFuIGFjY291bnRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtOCc+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwJz5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoXG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB5LTIgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgc2hhZG93LXNtIGhvdmVyOmJnLWdyYXktNTAnXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5TaWduIGluIHdpdGggRmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC01IHctNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00yMCAxMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzAgNC40NzcgMCAxMGMwIDQuOTkxIDMuNjU3IDkuMTI4IDguNDM4IDkuODc4di02Ljk4N2gtMi41NFYxMGgyLjU0VjcuNzk3YzAtMi41MDYgMS40OTItMy44OSAzLjc3Ny0zLjg5IDEuMDk0IDAgMi4yMzguMTk1IDIuMjM4LjE5NXYyLjQ2aC0xLjI2Yy0xLjI0MyAwLTEuNjMuNzcxLTEuNjMgMS41NjJWMTBoMi43NzNsLS40NDMgMi44OWgtMi4zM3Y2Ljk4OEMxNi4zNDMgMTkuMTI4IDIwIDE0Ljk5MSAyMCAxMHonXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBzaGFkb3ctc20gaG92ZXI6YmctZ3JheS01MCdcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlNpZ24gaW4gd2l0aCBHb29nbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC01IHctNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTIuNTQ1LDEwLjIzOXYzLjgyMWg1LjQ0NWMtMC43MTIsMi4zMTUtMi42NDcsMy45NzItNS40NDUsMy45NzJjLTMuMzMyLDAtNi4wMzMtMi43MDEtNi4wMzMtNi4wMzIgczIuNzAxLTYuMDMyLDYuMDMzLTYuMDMyYzEuNDk4LDAsMi44NjYsMC41NDksMy45MjEsMS40NTNsMi44MTQtMi44MTRDMTcuNTAzLDIuOTg4LDE1LjEzOSwyLDEyLjU0NSwyIEM3LjAyMSwyLDIuNTQzLDYuNDc3LDIuNTQzLDEyczQuNDc4LDEwLDEwLjAwMiwxMGM4LjM5NiwwLDEwLjI0OS03Ljg1LDkuNDI2LTExLjc0OEwxMi41NDUsMTAuMjM5eidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG10LTYnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGJvcmRlci10IGJvcmRlci1ncmF5LTMwMCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1zbSc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmctd2hpdGUgcHgtMiB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICBPciBjb250aW51ZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNic+XG4gICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBjbGFzc05hbWU9J3NwYWNlLXktNic+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHgtMyBweS0yIHBsYWNlaG9sZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItcmVkLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1yZWQtNTAwIHNtOnRleHQtc20nXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMSc+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nY3VycmVudC1wYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHctZnVsbCBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTMgcHktMiBwbGFjZWhvbGRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLXJlZC01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcmVkLTUwMCBzbTp0ZXh0LXNtJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtJz5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gdGV4dC1yZWQtNjAwIGhvdmVyOnRleHQtcmVkLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD9cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctcmVkLTYwMCBweS0yIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1yZWQtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yZWQtNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTInXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGhpZGRlbiB3LTAgZmxleC0xIGxnOmJsb2NrJz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXInXG4gICAgICAgICAgICBzcmM9Jy9pbWFnZXMvaGVyby1mcmVzaC1tZWF0Mi5qcGcnXG4gICAgICAgICAgICBhbHQ9J2ZyZXNoIGNoaWNrZW4gcG9yayBtZWF0IGFuZCBiZWVmJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiIsICIvLyBhcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHNcbmltcG9ydCB7IFJvbGUsIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tICdyZW1peC1hdXRoJ1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tICd+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyJ1xuaW1wb3J0IHsgRm9ybVN0cmF0ZWd5IH0gZnJvbSAncmVtaXgtYXV0aC1mb3JtJ1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuXG4vLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIGF1dGhlbnRpY2F0b3IsIHBhc3MgYSBnZW5lcmljIHdpdGggd2hhdFxuLy8gc3RyYXRlZ2llcyB3aWxsIHJldHVybiBhbmQgd2lsbCBzdG9yZSBpbiB0aGUgc2Vzc2lvblxuZXhwb3J0IGxldCBhdXRoZW50aWNhdG9yID0gbmV3IEF1dGhlbnRpY2F0b3I8VXNlcj4oc2Vzc2lvblN0b3JhZ2UpXG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgRm9ybVN0cmF0ZWd5KGFzeW5jICh7IGZvcm0sIGNvbnRleHQgfSkgPT4ge1xuICAgIC8vIEhlcmUgeW91IGNhbiB1c2UgYGZvcm1gIHRvIGFjY2VzcyBhbmQgaW5wdXQgdmFsdWVzIGZyb20gdGhlIGZvcm0uXG4gICAgLy8gYW5kIGFsc28gdXNlIGBjb250ZXh0YCB0byBhY2Nlc3MgbW9yZSB0aGluZ3MgZnJvbSB0aGUgc2VydmVyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldCgndXNlcm5hbWUnKVxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoJ3Bhc3N3b3JkJylcblxuICAgIC8vIFlvdSBjYW4gdmFsaWRhdGUgdGhlIGlucHV0cyBob3dldmVyIHlvdSB3YW50XG4gICAgaW52YXJpYW50KHR5cGVvZiB1c2VybmFtZSA9PT0gJ3N0cmluZycsICd1c2VybmFtZSBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICBpbnZhcmlhbnQodXNlcm5hbWUubGVuZ3RoID4gMCwgJ3VzZXJuYW1lIG11c3Qgbm90IGJlIGVtcHR5JylcblxuICAgIGludmFyaWFudCh0eXBlb2YgcGFzc3dvcmQgPT09ICdzdHJpbmcnLCAncGFzc3dvcmQgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgaW52YXJpYW50KHBhc3N3b3JkLmxlbmd0aCA+IDAsICdwYXNzd29yZCBtdXN0IG5vdCBiZSBlbXB0eScpXG5cbiAgICAvLyBBbmQgaWYgeW91IGhhdmUgYSBwYXNzd29yZCB5b3Ugc2hvdWxkIGhhc2ggaXRcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMClcblxuICAgIC8vIEFuZCBmaW5hbGx5LCB5b3UgY2FuIGZpbmQsIG9yIGNyZWF0ZSwgdGhlIHVzZXJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci51cHNlcnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICB9LFxuICAgICAgdXBkYXRlOiB7fSxcbiAgICAgIGNyZWF0ZToge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICByb2xlOiBSb2xlLkNVU1RPTUVSLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgLy8gQW5kIHJldHVybiB0aGUgdXNlciBhcyB0aGUgQXV0aGVudGljYXRvciBleHBlY3RzIGl0XG4gICAgcmV0dXJuIHVzZXJcbiAgfSksXG4gICd1c2VyLXBhc3MnXG4pXG4iLCAiLy8gYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gJ3JlbWl4J1xuXG4vLyBleHBvcnQgdGhlIHdob2xlIHNlc3Npb25TdG9yYWdlIG9iamVjdFxuZXhwb3J0IGxldCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19zZXNzaW9uJywgLy8gdXNlIGFueSBuYW1lIHlvdSB3YW50IGhlcmVcbiAgICBzYW1lU2l0ZTogJ2xheCcsIC8vIHRoaXMgaGVscHMgd2l0aCBDU1JGXG4gICAgcGF0aDogJy8nLCAvLyByZW1lbWJlciB0byBhZGQgdGhpcyBzbyB0aGUgY29va2llIHdpbGwgd29yayBpbiBhbGwgcm91dGVzXG4gICAgaHR0cE9ubHk6IHRydWUsIC8vIGZvciBzZWN1cml0eSByZWFzb25zLCBtYWtlIHRoaXMgY29va2llIGh0dHAgb25seVxuICAgIHNlY3JldHM6IFsnczNjcjN0J10sIC8vIHJlcGxhY2UgdGhpcyB3aXRoIGFuIGFjdHVhbCBzZWNyZXRcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsIC8vIGVuYWJsZSB0aGlzIGluIHByb2Qgb25seVxuICB9LFxufSlcblxuLy8geW91IGNhbiBhbHNvIGV4cG9ydCB0aGUgbWV0aG9kcyBpbmRpdmlkdWFsbHkgZm9yIHlvdXIgb3duIHVzYWdlXG5leHBvcnQgbGV0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IHNlc3Npb25TdG9yYWdlXG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmxldCBkYjogUHJpc21hQ2xpZW50XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgZGIuJGNvbm5lY3QoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpXG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKVxuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGJcbn1cblxuZXhwb3J0IHsgZGIgfVxuIiwgIi8qXG4gIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgXG4gIFxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgc29tZSBjaGFuZ2VzIHRvIHlvdXIgY29uZmlnOlxuICBcbiAgYGBgXG4gIC8vIHRhaWx3aW5kLmNvbmZpZy5qc1xuICBjb25zdCBjb2xvcnMgPSByZXF1aXJlKCd0YWlsd2luZGNzcy9jb2xvcnMnKVxuICBcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gLi4uXG4gICAgdGhlbWU6IHtcbiAgICAgIGV4dGVuZDoge1xuICAgICAgICBjb2xvcnM6IHtcbiAgICAgICAgICBjeWFuOiBjb2xvcnMuY3lhbixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyAuLi5cbiAgICAgIHJlcXVpcmUoJ0B0YWlsd2luZGNzcy9mb3JtcycpLFxuICAgIF0sXG4gIH1cbiAgYGBgXG4qL1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEaWFsb2csIE1lbnUsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7XG4gIEFycm93U21VcEljb24sXG4gIEJlbGxJY29uLFxuICBDbG9ja0ljb24sXG4gIENvZ0ljb24sXG4gIENyZWRpdENhcmRJY29uLFxuICBEb2N1bWVudFJlcG9ydEljb24sXG4gIEhvbWVJY29uLFxuICBNZW51QWx0MUljb24sXG4gIFF1ZXN0aW9uTWFya0NpcmNsZUljb24sXG4gIFNjYWxlSWNvbixcbiAgU2hpZWxkQ2hlY2tJY29uLFxuICBVc2VyR3JvdXBJY29uLFxuICBYSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuaW1wb3J0IHtcbiAgQXJyb3dTbURvd25JY29uLFxuICBDYXNoSWNvbixcbiAgQ2hlY2tDaXJjbGVJY29uLFxuICBDaGV2cm9uRG93bkljb24sXG4gIENoZXZyb25SaWdodEljb24sXG4gIE9mZmljZUJ1aWxkaW5nSWNvbixcbiAgU2VhcmNoSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAgeyBuYW1lOiAnSG9tZScsIGhyZWY6ICcjJywgaWNvbjogSG9tZUljb24sIGN1cnJlbnQ6IHRydWUgfSxcbiAgeyBuYW1lOiAnSGlzdG9yeScsIGhyZWY6ICcjJywgaWNvbjogQ2xvY2tJY29uLCBjdXJyZW50OiBmYWxzZSB9LFxuICB7IG5hbWU6ICdCYWxhbmNlcycsIGhyZWY6ICcjJywgaWNvbjogU2NhbGVJY29uLCBjdXJyZW50OiBmYWxzZSB9LFxuICB7IG5hbWU6ICdDYXJkcycsIGhyZWY6ICcjJywgaWNvbjogQ3JlZGl0Q2FyZEljb24sIGN1cnJlbnQ6IGZhbHNlIH0sXG4gIHsgbmFtZTogJ1JlY2lwaWVudHMnLCBocmVmOiAnIycsIGljb246IFVzZXJHcm91cEljb24sIGN1cnJlbnQ6IGZhbHNlIH0sXG4gIHsgbmFtZTogJ1JlcG9ydHMnLCBocmVmOiAnIycsIGljb246IERvY3VtZW50UmVwb3J0SWNvbiwgY3VycmVudDogZmFsc2UgfSxcbl1cbmNvbnN0IHNlY29uZGFyeU5hdmlnYXRpb24gPSBbXG4gIHsgbmFtZTogJ1NldHRpbmdzJywgaHJlZjogJyMnLCBpY29uOiBDb2dJY29uIH0sXG4gIHsgbmFtZTogJ0hlbHAnLCBocmVmOiAnIycsIGljb246IFF1ZXN0aW9uTWFya0NpcmNsZUljb24gfSxcbiAgeyBuYW1lOiAnUHJpdmFjeScsIGhyZWY6ICcjJywgaWNvbjogU2hpZWxkQ2hlY2tJY29uIH0sXG5dXG5jb25zdCBjYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6ICdUb3RhbCBHcm9zcyBTYWxlcycsXG4gICAgc3RhdDogJzcxLDg5NycsXG4gICAgcHJldmlvdXNTdGF0OiAnNzAsOTQ2JyxcbiAgICBjaGFuZ2U6ICcxMiUnLFxuICAgIGNoYW5nZVR5cGU6ICdpbmNyZWFzZScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQXZlcmFnZSBPcmRlciBBbW91bnQnLFxuICAgIHN0YXQ6ICcxMTIzJyxcbiAgICBwcmV2aW91c1N0YXQ6ICc3NzQnLFxuICAgIGNoYW5nZTogJzE0NSUnLFxuICAgIGNoYW5nZVR5cGU6ICdpbmNyZWFzZScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQXZlcmFnZSBPcmRlciBDb21wbGV0aW9uIFJhdGUnLFxuICAgIHN0YXQ6ICc5MCUnLFxuICAgIHByZXZpb3VzU3RhdDogJzk1JScsXG4gICAgY2hhbmdlOiAnNSUnLFxuICAgIGNoYW5nZVR5cGU6ICdkZWNyZWFzZScsXG4gIH0sXG5dXG5jb25zdCB0cmFuc2FjdGlvbnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnMTIzLTQ1NicsXG4gICAgaHJlZjogJyMnLFxuICAgIGFtb3VudDogJ1x1MjBCMTEsMDAwJyxcbiAgICBzdGF0dXM6ICdDb21wbGV0ZWQnLFxuICAgIGRhdGU6ICdKYW51YXJ5IDExLCAyMDIyJyxcbiAgICBkYXRldGltZTogJzIwMjItMDEtMTEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJzEyMy00NTYnLFxuICAgIGhyZWY6ICcjJyxcbiAgICBhbW91bnQ6ICdcdTIwQjExLDAwMCcsXG4gICAgc3RhdHVzOiAnQ29tcGxldGVkJyxcbiAgICBkYXRlOiAnSmFudWFyeSAxMSwgMjAyMicsXG4gICAgZGF0ZXRpbWU6ICcyMDIyLTAxLTExJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICcxMjMtNDU2JyxcbiAgICBocmVmOiAnIycsXG4gICAgYW1vdW50OiAnXHUyMEIxMSwwMDAnLFxuICAgIHN0YXR1czogJ0NvbXBsZXRlZCcsXG4gICAgZGF0ZTogJ0phbnVhcnkgMTEsIDIwMjInLFxuICAgIGRhdGV0aW1lOiAnMjAyMi0wMS0xMScsXG4gIH0sXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnMTIzLTQ1NicsXG4gICAgaHJlZjogJyMnLFxuICAgIGFtb3VudDogJ1x1MjBCMTEsMDAwJyxcbiAgICBzdGF0dXM6ICdDb21wbGV0ZWQnLFxuICAgIGRhdGU6ICdKYW51YXJ5IDExLCAyMDIyJyxcbiAgICBkYXRldGltZTogJzIwMjItMDEtMTEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJzEyMy00NTYnLFxuICAgIGhyZWY6ICcjJyxcbiAgICBhbW91bnQ6ICdcdTIwQjExLDAwMCcsXG4gICAgc3RhdHVzOiAnQ29tcGxldGVkJyxcbiAgICBkYXRlOiAnSmFudWFyeSAxMSwgMjAyMicsXG4gICAgZGF0ZXRpbWU6ICcyMDIyLTAxLTExJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICcxMjMtNDU2JyxcbiAgICBocmVmOiAnIycsXG4gICAgYW1vdW50OiAnXHUyMEIxMSwwMDAnLFxuICAgIHN0YXR1czogJ0NvbXBsZXRlZCcsXG4gICAgZGF0ZTogJ0phbnVhcnkgMTEsIDIwMjInLFxuICAgIGRhdGV0aW1lOiAnMjAyMi0wMS0xMScsXG4gIH0sXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnMTIzLTQ1NicsXG4gICAgaHJlZjogJyMnLFxuICAgIGFtb3VudDogJ1x1MjBCMTEsMDAwJyxcbiAgICBzdGF0dXM6ICdDb21wbGV0ZWQnLFxuICAgIGRhdGU6ICdKYW51YXJ5IDExLCAyMDIyJyxcbiAgICBkYXRldGltZTogJzIwMjItMDEtMTEnLFxuICB9LFxuICAvLyBNb3JlIHRyYW5zYWN0aW9ucy4uLlxuXVxuY29uc3Qgc3RhdHVzU3R5bGVzID0ge1xuICBzdWNjZXNzOiAnYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwJyxcbiAgcHJvY2Vzc2luZzogJ2JnLXllbGxvdy0xMDAgdGV4dC15ZWxsb3ctODAwJyxcbiAgZmFpbGVkOiAnYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMCcsXG59XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKCkge1xuICBjb25zdCBbc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKlxuICAgICAgICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgdXBkYXRpbmcgeW91ciB0ZW1wbGF0ZTpcblxuICAgICAgICBgYGBcbiAgICAgICAgPGh0bWwgY2xhc3M9XCJoLWZ1bGwgYmctZ3JheS0xMDBcIj5cbiAgICAgICAgPGJvZHkgY2xhc3M9XCJoLWZ1bGxcIj5cbiAgICAgICAgYGBgXG4gICAgICAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgYmctd2hpdGUgcHgtNCBweS01IHB0LTI0IHNtOnB4LTYnPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgU2FsZXMgRGFzaGJvYXJkXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDAnPlxuICAgICAgICAgIEFuYWx5emUgc2FsZXMgZnJvbSBjb21wbGV0ZWQgb3JkZXJzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4taC1mdWxsJz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4LTEgcGItOCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtNCBzbTpweC02IGxnOnB4LTgnPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgT3ZlcnZpZXdcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTUyIHctZnVsbCc+ey8qIDxHcmFwaCAvPiAqL308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01IGdyaWQgZ3JpZC1jb2xzLTEgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdyBtZDpncmlkLWNvbHMtMyBtZDpkaXZpZGUteS0wIG1kOmRpdmlkZS14Jz5cbiAgICAgICAgICAgICAgICB7LyogQ2FyZCAqL31cbiAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZC5uYW1lfSBjbGFzc05hbWU9JyBweC00IHB5LTUgc206cC02Jz5cbiAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT0ndGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9J210LTEgZmxleCBpdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWJldHdlZW4gbWQ6YmxvY2sgbGc6ZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtYmFzZWxpbmUgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLnN0YXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB7Y2FyZC5wcmV2aW91c1N0YXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2hhbmdlVHlwZSA9PT0gJ2luY3JlYXNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTgwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1yZWQtMTAwIHRleHQtcmVkLTgwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1iYXNlbGluZSByb3VuZGVkLWZ1bGwgcHgtMi41IHB5LTAuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1kOm10LTIgbGc6bXQtMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuY2hhbmdlVHlwZSA9PT0gJ2luY3JlYXNlJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93U21VcEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9Jy1tbC0xIG1yLTAuNSBoLTUgdy01IGZsZXgtc2hyaW5rLTAgc2VsZi1jZW50ZXIgdGV4dC1ncmVlbi01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dTbURvd25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSctbWwtMSBtci0wLjUgaC01IHctNSBmbGV4LXNocmluay0wIHNlbGYtY2VudGVyIHRleHQtcmVkLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmNoYW5nZVR5cGUgPT09ICdpbmNyZWFzZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdJbmNyZWFzZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnRGVjcmVhc2VkJ317JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBieVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuY2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J210LTggcHgtNCB0ZXh0LXhsIGZvbnQtYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCBzbTpweC02IGxnOnB4LTgnPlxuICAgICAgICAgICAgICBDb21wbGV0ZWQgb3JkZXJzXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICB7LyogQWN0aXZpdHkgbGlzdCAoc21hbGxlc3QgYnJlYWtwb2ludCBvbmx5KSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgc206aGlkZGVuJz5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgcm9sZT0nbGlzdCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTIgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgc206aGlkZGVuJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXt0cmFuc2FjdGlvbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17dHJhbnNhY3Rpb24uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIGJnLXdoaXRlIHB4LTQgcHktNCBob3ZlcjpiZy1ncmF5LTUwJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBzcGFjZS14LTIgdHJ1bmNhdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdHJ1bmNhdGUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RydW5jYXRlJz57dHJhbnNhY3Rpb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXt0cmFuc2FjdGlvbi5kYXRldGltZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgPG5hdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBweC00IHB5LTMnXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nUGFnaW5hdGlvbidcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgbWwtMyBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQWN0aXZpdHkgdGFibGUgKHNtYWxsIGJyZWFrcG9pbnQgYW5kIHVwKSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gc206YmxvY2snPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtNCBzbTpweC02IGxnOnB4LTgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yIGZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pbi13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LXgtYXV0byBhbGlnbi1taWRkbGUgc2hhZG93IHNtOnJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSdtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXIgSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweC02IHB5LTMgdGV4dC1yaWdodCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0naGlkZGVuIGJnLWdyYXktNTAgcHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWdyYXktNTAwIG1kOmJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweC02IHB5LTMgdGV4dC1yaWdodCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0nZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGJnLXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt0cmFuc2FjdGlvbi5pZH0gY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LTAgd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00IHRleHQtc20gdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dHJhbnNhY3Rpb24uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyb3VwIGlubGluZS1mbGV4IHNwYWNlLXgtMiB0cnVuY2F0ZSB0ZXh0LXNtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhc2hJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtNSB3LTUgZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndHJ1bmNhdGUgdGV4dC1ncmF5LTUwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLW5vd3JhcCBweC02IHB5LTQgdGV4dC1yaWdodCB0ZXh0LXNtIHRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLmFtb3VudH17JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0naGlkZGVuIHdoaXRlc3BhY2Utbm93cmFwIHB4LTYgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWQ6YmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHB4LTIuNSBweS0wLjUgdGV4dC14cyBmb250LW1lZGl1bSBjYXBpdGFsaXplJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00IHRleHQtcmlnaHQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXt0cmFuc2FjdGlvbi5kYXRldGltZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICB7LyogUGFnaW5hdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgPG5hdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBweC00IHB5LTMgc206cHgtNidcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdQYWdpbmF0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBzbTpibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNob3dpbmcgPHNwYW4gY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+MTwvc3Bhbj4gdG97JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz4xMDwvc3Bhbj4gb2Z7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz4yMDwvc3Bhbj4gcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBqdXN0aWZ5LWJldHdlZW4gc206anVzdGlmeS1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCdcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgbWwtMyBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCdcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCBQcm9kdWN0c1BhZ2UsIHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi9wcm9kdWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGlja2VuUGFnZSgpIHtcbiAgcmV0dXJuIDxQcm9kdWN0c1BhZ2Ugb25seUNhdGVnb3J5PXtDYXRlZ29yeS5CRUVGfSAvPjtcbn1cbiIsICIvKlxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArIFxuICBcbiAgVGhpcyBleGFtcGxlIHJlcXVpcmVzIHNvbWUgY2hhbmdlcyB0byB5b3VyIGNvbmZpZzpcbiAgXG4gIGBgYFxuICAvLyB0YWlsd2luZC5jb25maWcuanNcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gLi4uXG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gLi4uXG4gICAgICByZXF1aXJlKCdAdGFpbHdpbmRjc3MvZm9ybXMnKSxcbiAgICBdLFxuICB9XG4gIGBgYFxuKi9cbmltcG9ydCB7XG4gIENoZWNrSWNvbixcbiAgQ2xvY2tJY29uLFxuICBRdWVzdGlvbk1hcmtDaXJjbGVJY29uLFxuICBUcmFzaEljb24sXG4gIFhJY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgUXVhbnRpdHkgfSBmcm9tICd+L2NvbXBvbmVudHMvUXVhbnRpdHknXG5pbXBvcnQgeyBCcmFuZCwgQ2F0ZWdvcnksIFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3RzJ1xuXG5jb25zdCBwcm9kdWN0cyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdCYXNpYyBUZWUnLFxuICAgIGhyZWY6ICcjJyxcbiAgICBwcmljZTogJyQzMi4wMCcsXG4gICAgY29sb3I6ICdTaWVubmEnLFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgc2l6ZTogJ0xhcmdlJyxcbiAgICBpbWFnZVNyYzpcbiAgICAgICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL3Nob3BwaW5nLWNhcnQtcGFnZS0wMS1wcm9kdWN0LTAxLmpwZycsXG4gICAgaW1hZ2VBbHQ6IFwiRnJvbnQgb2YgbWVuJ3MgQmFzaWMgVGVlIGluIHNpZW5uYS5cIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdCYXNpYyBUZWUnLFxuICAgIGhyZWY6ICcjJyxcbiAgICBwcmljZTogJyQzMi4wMCcsXG4gICAgY29sb3I6ICdCbGFjaycsXG4gICAgaW5TdG9jazogZmFsc2UsXG4gICAgbGVhZFRpbWU6ICczXHUyMDEzNCB3ZWVrcycsXG4gICAgc2l6ZTogJ0xhcmdlJyxcbiAgICBpbWFnZVNyYzpcbiAgICAgICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL3Nob3BwaW5nLWNhcnQtcGFnZS0wMS1wcm9kdWN0LTAyLmpwZycsXG4gICAgaW1hZ2VBbHQ6IFwiRnJvbnQgb2YgbWVuJ3MgQmFzaWMgVGVlIGluIGJsYWNrLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ05vbWFkIFR1bWJsZXInLFxuICAgIGhyZWY6ICcjJyxcbiAgICBwcmljZTogJyQzNS4wMCcsXG4gICAgY29sb3I6ICdXaGl0ZScsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbWFnZVNyYzpcbiAgICAgICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL3Nob3BwaW5nLWNhcnQtcGFnZS0wMS1wcm9kdWN0LTAzLmpwZycsXG4gICAgaW1hZ2VBbHQ6ICdJbnN1bGF0ZWQgYm90dGxlIHdpdGggd2hpdGUgYmFzZSBhbmQgYmxhY2sgc25hcCBsaWQuJyxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHByb2Q6IFByb2R1Y3RbXSA9IFtcbiAge1xuICAgIGlkOiAxOCxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQkYtcHJlbWl1bS1jaGlja2VuLmpwZWcnLFxuICAgIGltYWdlQWx0OiAnQkYtcHJlbWl1bS1jaGlja2VuJyxcbiAgICBuYW1lOiAnUHJlbWl1bSBDaGlja2VuJyxcbiAgICB3ZWlnaHQ6ICcnLFxuICAgIGJyYW5kOiBCcmFuZC5CT1VOVFlfRlJFU0gsXG4gICAgY2F0ZWdvcnk6IENhdGVnb3J5LkNISUNLRU4sXG4gICAgcHJpY2U6IDI1MCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpYXMgY3VtcXVlIG5paGlsIGF0cXVlIHF1YWUgaW52ZW50b3JlLiBBbGlxdWFtIGN1cGlkaXRhdGUgcmVwdWRpYW5kYWUgc3VzY2lwaXQgY29ycG9yaXMgbmF0dXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0MSxcbiAgICBpbWFnZVNyYzogJy9pbWFnZXMvQ2FtaWxsZS1iZWVmLWN1YmVzLTUwMGcuanBlZycsXG4gICAgaW1hZ2VBbHQ6ICdDYW1pbGxlLWJlZWYtY3ViZXMtNTAwZycsXG4gICAgbmFtZTogJ0JlZWYgQ3ViZXMnLFxuICAgIHdlaWdodDogJzUwMGcnLFxuICAgIGJyYW5kOiBCcmFuZC5DQU1JTExFLFxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeS5CRUVGLFxuICAgIHByaWNlOiAxMDAsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGN1bXF1ZSBuaWhpbCBhdHF1ZSBxdWFlIGludmVudG9yZS4gQWxpcXVhbSBjdXBpZGl0YXRlIHJlcHVkaWFuZGFlIHN1c2NpcGl0IGNvcnBvcmlzIG5hdHVzLicsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTJ4bCBweC00IHB0LTI0IHBiLTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LTgnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsJz5cbiAgICAgICAgICBTaG9wcGluZyBDYXJ0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXQtMTIgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMTIgbGc6aXRlbXMtc3RhcnQgbGc6Z2FwLXgtMTIgeGw6Z2FwLXgtMTYnPlxuICAgICAgICAgIDxzZWN0aW9uIGFyaWEtbGFiZWxsZWRieT0nY2FydC1oZWFkaW5nJyBjbGFzc05hbWU9J2xnOmNvbC1zcGFuLTcnPlxuICAgICAgICAgICAgPGgyIGlkPSdjYXJ0LWhlYWRpbmcnIGNsYXNzTmFtZT0nc3Itb25seSc+XG4gICAgICAgICAgICAgIEl0ZW1zIGluIHlvdXIgc2hvcHBpbmcgY2FydFxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgIHJvbGU9J2xpc3QnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb2QubWFwKChwcm9kdWN0LCBwcm9kdWN0SWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggcHQtNiBwYi0zIHNtOnB0LTEwIHNtOnBiLTUnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtc2hyaW5rLTAnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtMjQgdy0yNCByb3VuZGVkLW1kIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHNtOmgtNDggc206dy00OCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVzdGlmeS1iZXR3ZWVuc206bWwtNiBtbC00IGZsZXggZmxleC0xIGZsZXgtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHByLTkgc206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTpnYXAteC02IHNtOnByLTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWxnIHNtOnRleHQteGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1yZWQtNTAwIHNtOnRleHQtbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcdTIwQjF7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1YW50aXR5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IHNtOm10LTAgc206cHItOSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSctbS0yIGlubGluZS1mbGV4IHAtMiBwdC0yLjUgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlJlbW92ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIGNsYXNzTmFtZT0naC01IHctNScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIHsvKiBPcmRlciBzdW1tYXJ5ICovfVxuICAgICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3N1bW1hcnktaGVhZGluZydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtMTYgcm91bmRlZC1sZyBiZy1ncmF5LTUwIHB4LTQgcHktNiBzbTpwLTYgbGc6Y29sLXNwYW4tNSBsZzptdC0wIGxnOnAtOCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgaWQ9J3N1bW1hcnktaGVhZGluZydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE9yZGVyIHN1bW1hcnlcbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9J210LTYgc3BhY2UteS00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyYXktNjAwJz5TdWJ0b3RhbDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cdTIwQjExMDAwPC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHB0LTQnPlxuICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxpdmVyeSBmZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTIgZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+RGVsaXZlcnkgZmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25NYXJrQ2lyY2xlSWNvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC01IHctNSdcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9J3RleHQtcmlnaHQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwICc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmUtdGhyb3VnaCc+XHUyMEIxNTA8L3A+XG4gICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgIEZyZWUgZGVsaXZlcnkgcHJvbW8gYXBwbGllZFxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtNCc+XG4gICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT0ndGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgVG90YWwgYW1vdW50XG4gICAgICAgICAgICAgICAgPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1yZWQtNTAwJz5cdTIwQjExMDAwPC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2RsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNic+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPScvY2hlY2tvdXQnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXJlZC01MDAgcHktMyBweC00IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1yZWQtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yZWQtNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS01MCc+XG4gICAgICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IFByb2R1Y3RzUGFnZSwgeyBDYXRlZ29yeSB9IGZyb20gXCIuL3Byb2R1Y3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoaWNrZW5QYWdlKCkge1xuICByZXR1cm4gPFByb2R1Y3RzUGFnZSBvbmx5Q2F0ZWdvcnk9e0NhdGVnb3J5LlBPUkt9IC8+O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzBhYTBjNjg2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1GRUo1Q0JHWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1JPWk9HU1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HQjJUWTZKVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxPSllVRlBZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVlTNFdLWUpaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MSUdRTEtIQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZOWFQ1MkNXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fzc2lnbmVkLW9yZGVycyc6eydpZCc6J3JvdXRlcy9hc3NpZ25lZC1vcmRlcnMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXNzaWduZWQtb3JkZXJzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fzc2lnbmVkLW9yZGVycy1VV0Q0U1U1TS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRFlFNDNUT08uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2JlZWYnOnsnaWQnOidyb3V0ZXMvYmVlZicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidiZWVmJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2JlZWYtV1RBQTNDQ0suanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUk3WklTSTNFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXJ0Jzp7J2lkJzoncm91dGVzL2NhcnQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2FydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXJ0LUkzTUJMSkRVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XUjNRUzJGRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVo3NjZMRlJDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFlFNDNUT08uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JN1pJU0kzRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hlY2tvdXQnOnsnaWQnOidyb3V0ZXMvY2hlY2tvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2hlY2tvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2hlY2tvdXQtMk5VNUJSVFcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSM1FTMkZFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjc2NkxGUkMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EWUU0M1RPTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUk3WklTSTNFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jaGlja2VuJzp7J2lkJzoncm91dGVzL2NoaWNrZW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2hpY2tlbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jaGlja2VuLVBXNk1LUlo1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JN1pJU0kzRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtUERIVUNaVVMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUk3WklTSTNFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1KREtVWlpWVy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFuYWdlLW9yZGVycyc6eydpZCc6J3JvdXRlcy9tYW5hZ2Utb3JkZXJzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21hbmFnZS1vcmRlcnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWFuYWdlLW9yZGVycy1NQkxQUUJQNC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21hbmFnZS1wcm9kdWN0cyc6eydpZCc6J3JvdXRlcy9tYW5hZ2UtcHJvZHVjdHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWFuYWdlLXByb2R1Y3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21hbmFnZS1wcm9kdWN0cy1FUVVZSjU0Uy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSTdaSVNJM0UuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL29yZGVyLWhpc3RvcnknOnsnaWQnOidyb3V0ZXMvb3JkZXItaGlzdG9yeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidvcmRlci1oaXN0b3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL29yZGVyLWhpc3RvcnktRFhIV09PQUMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3JrJzp7J2lkJzoncm91dGVzL3BvcmsnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9yaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3JrLURKTkpFTUc1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JN1pJU0kzRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvZHVjdHMvJGlkJzp7J2lkJzoncm91dGVzL3Byb2R1Y3RzLyRpZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9kdWN0cy86aWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZHVjdHMvJGlkLUo3TldMNk1ZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aNzY2TEZSQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURZRTQzVE9PLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSTdaSVNJM0UuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2R1Y3RzL2luZGV4Jzp7J2lkJzoncm91dGVzL3Byb2R1Y3RzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2R1Y3RzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcm9kdWN0cy9pbmRleC1BVDZWNVNERi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSTdaSVNJM0UuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NhbGVzJzp7J2lkJzoncm91dGVzL3NhbGVzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NhbGVzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NhbGVzLU81UVYyVDdMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EWUU0M1RPTy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTBBQTBDNjg2LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1B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QUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFHSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBRVAsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFHSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBO0FBQUEsRUFFSjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsVUFBVTtB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QUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUdKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFFUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUdKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUE7QUFBQSxF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QSxRQUNGLFVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtSO0FBQUEsSUFDRSxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsVUFDRTtBQUFBLFFBQ0YsVUFDRTtBQUFBO0FBQUEsTUFFSjtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsVUFDRTtBQUFBLFFBQ0YsVUFDRTtBQUFBO0FBQUEsTUFFSjtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsVUFDRTtBQUFBLFFBQ0YsVUFDRTtBQUFBO0FBQUEsTUFFSjtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsVUFDRTtBQUFBLFFBQ0YsVUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS1I7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixVQUNFO0FBQUEsUUFDRixVQUNFO0FBQUE7QUFBQSxNQUVKO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixVQUNFO0FBQUEsUUFDRixVQUNFO0FBQUE7QUFBQSxNQUVKO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixVQUNFO0FBQUEsUUFDRixVQUNFO0FBQUE7QUFBQSxNQUVKO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixVQUNFO0FBQUEsUUFDRixVQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLUjtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFVBQ0U7QUFBQSxRQUNGLFVBQ0U7QUFBQTtBQUFBLE1BRUo7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFVBQ0U7QUFBQSxRQUNGLFVBQ0U7QUFBQTtBQUFBLE1BRUo7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFVBQ0U7QUFBQSxRQUNGLFVBQ0U7QUFBQTtBQUFBLE1BRUo7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFVBQ0U7QUFBQSxRQUNGLFVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFB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QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBO0FBVWQsd0JBQXVCLFNBQW1CO0FBQ3hDLFNBQU8sUUFBUSxPQUFPLFNBQVMsS0FBSztBQUFBO0FBR3ZCLG9CQUFtQjtBQUNoQyxRQUFNLENB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
