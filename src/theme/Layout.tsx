// Gives the children Component according to the router
import { RouteSectionProps, useLocation } from "@solidjs/router";

// ERror fallback component
import { createEffect, createSignal, ErrorBoundary, sharedConfig } from "solid-js";

// Gives you the title of the page
import { Title } from "@solidjs/meta";

// Listen for dark/light mode then applies to all page ,hook from kobalte
import { SidebarProvider, useThemeListener } from "@kobalte/solidbase/client";

// the top route page loaders
import { usePace } from "@kobalte/solidbase/default-theme/pace.js";
// The deafult layout from kabolte
import Layout from "@kobalte/solidbase/default-theme/Layout.jsx";
import { DefaultThemeComponentsProvider } from "@kobalte/solidbase/default-theme/context.jsx";
import MyCustomHeader from "./Header";
import { useRouteConfig } from "@kobalte/solidbase/default-theme/utils.js";
// import Header from "@kobalte/solidbase/default-theme/components/Header.js";
let RoutesToBeIgnored = [
  "/",
  "/network/layers",
  "/network/layers/",
  "/test"
]

export default function (props: RouteSectionProps) {
  const location = useLocation();
  let [ignoreRoute, setIgnoreRoute] = createSignal(true)


  createEffect(() => {
    useThemeListener();
    usePace();
  })

  createEffect(() => {
    if (RoutesToBeIgnored.includes(location.pathname.toLowerCase())) {
      setIgnoreRoute(true)
    } else {
      setIgnoreRoute(false)
    }
  })
  const cfg = useRouteConfig();

  return (
    <>

      <DefaultThemeComponentsProvider components={{ Header: MyCustomHeader }}>
        <SidebarProvider config={cfg().themeConfig?.sidebar}>
          {
            ignoreRoute() ? <>
              {props.children}</>
              :
              <Layout>
                <Title>Docs</Title>
                <ErrorBoundary fallback={() => <div>Nothing found</div>}>
                  {props.children}
                </ErrorBoundary>
              </Layout>
          }
        </SidebarProvider>
      </DefaultThemeComponentsProvider>
    </>
  );
}
