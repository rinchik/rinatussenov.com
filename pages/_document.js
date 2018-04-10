import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';

export default class Skubana extends Document {

    static getInitialProps({renderPage}) {
        const {html, head, errorHtml, chunks} = renderPage();
        const styles = flush();

        return {html, head, errorHtml, chunks, styles}
    }


    render() {

        return (
            <html>
                <Head>
                    <meta charSet='utf-8'/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link href="/static/css/font-awesome.css" rel="stylesheet"/>
                    <link rel="stylesheet" id="wpb-google-fonts-css"
                          href="/static/css/openSans.css"
                          type="text/css" media="all"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','UA-36561446-2');
                      window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-36561446-2');
                      `
                    }}/>
                    <noscript
                        dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}}/>
                </body>
            </html>
        )
    }
}
