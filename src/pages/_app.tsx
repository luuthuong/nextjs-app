import { ThemeContext } from "@/contexts";
import AppProvider from "@/providers";
import "@/styles/global.css";
import { AppProps } from "next/app";
import { Router } from "next/router";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const startLoading = () => setLoading(true);
        const endLoading = () => setLoading(false);
        const routerEvent = Router.events;
        routerEvent.on("routeChangeStart", startLoading);
        routerEvent.on("routeChangeComplete", endLoading);
        routerEvent.on("routeChangeError", endLoading);
        return () => {
            routerEvent.off("routeChangeStart", startLoading);
            routerEvent.off("routeChangeComplete", endLoading);
            routerEvent.off("routeChangeError", endLoading);
        };
    }, []);
    return (
        <ThemeContext.Provider value="dark">
            <AppProvider>
                {loading ? <h1>Loading...</h1> : <Component {...pageProps} />}
            </AppProvider>
        </ThemeContext.Provider>
    );
}
