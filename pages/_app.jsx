import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();
  console.log(state);

  useEffect(() => {
    // Your code here. Add the dark class to the <html /> tag
    // with vanilla js.
    let rootEl = document.documentElement;

    if (state.theme === "dark") {
      rootEl.classList.add("dark");
    } else {
      rootEl.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <>
      {/* <Cursor /> */}
      <Component {...pageProps} />
    </>
  );
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
