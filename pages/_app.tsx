import '../styles/globals.css'
import '../styles/app.css'
import TaskListContextProvider from "../src/services/storeContext";
import {ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import theme from "../styles/theme";
import Head from "next/head";
import {useEffect} from "react";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <TaskListContextProvider>
                    <Component {...pageProps} />
                </TaskListContextProvider>
            </ThemeProvider>
        </>

    )
}

export default MyApp
