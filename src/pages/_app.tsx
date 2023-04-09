import { ThemeContext } from "@/contexts";
import { AppProvider } from "@/providers/app.provider";
import "@/styles/global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext.Provider value="dark">
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeContext.Provider>
  );
}
