import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import theme from '../styles/theme';
import * as React from 'react';
import {ServerStyleSheets} from '@material-ui/core/styles';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                          crossOrigin="anonymous"/>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }

    static async getInitialProps(ctx:DocumentContext) {


        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    };
}

export default MyDocument;



