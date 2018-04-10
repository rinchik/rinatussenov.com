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
                <meta charSet='utf-8' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link href="/static/css/font-awesome.css" rel="stylesheet"/>
                <link rel="stylesheet" id="wpb-google-fonts-css"
                      href="/static/css/openSans.css"
                      type="text/css" media="all"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            <script dangerouslySetInnerHTML={{
                __html: `
                        (function (i, s, o, g, r, a, m) {
                                i['GoogleAnalyticsObject'] = r;
                                i[r] = i[r] || function () {
                                        (i[r].q = i[r].q || []).push(arguments)
                                    }, i[r].l = 1 * new Date();
                                a = s.createElement(o),
                                    m = s.getElementsByTagName(o)[0];
                                a.async = 1;
                                a.src = g;
                                m.parentNode.insertBefore(a, m)
                            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

                           ga('create', 'UA-36561446-2', 'auto');
                           ga('send', 'pageview');
                `
            }}/>
            </html>
        )
    }
}

