import React from "react";

import Head from 'next/head';
import GA from '../src/vendor/google-analytics'

import stylesheet from "./styles/index.pcss";

class Index extends React.Component {


    render() {
        return (
            <div>
                <Head>
                    <title>Rinat Ussenov - Software Engineer</title>
                    <meta name="keywords"
                          content="resume, Rinat's personal page, software engineer, programmer, front-end engineer, backend engineer, software developer, javascript, python, java, nodejs, react, scala, Play Framework"/>
                    <meta name="description"
                          content="Rinat Ussenov, software engineer, front-end architecture, thrives on building highly scalable distributed enterprise applications."/>
                    <link rel="apple-touch-icon" sizes="57x57" href="static/images/icon/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="static/images/icon/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="static/images/icon/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="static/images/icon/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="static/images/icon/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="static/images/icon/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="static/images/icon/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="static/images/icon/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="static/images/icon/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192"
                          href="static/images/icon/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="static/images/icon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="static/images/icon/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="static/images/icon/favicon-16x16.png"/>
                    <link rel="manifest" href="static/images/icon/manifest.json"/>
                    <meta name="msapplication-TileColor" content="#000000"/>
                    <meta name="msapplication-TileImage" content="static/images/icon/ms-icon-144x144.png"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta name="viewport" content="width=device-width"/>
                    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
                    <GA/>
                </Head>
                <div className="container">
                    <div className="header">
                        <img src="static/images/logo.png" alt="Rinat Ussenov Logo" className="logo"/>
                        <h1>Rinat Ussenov</h1>
                        <h2>Software Engineer</h2>
                    </div>
                    <div className="content">
                        <div className="articles">
                            <div className="article">
                                <a className="logo--link"
                                   href="https://blog.rinatussenov.com/vanilla-javascript-development-in-2018-c076d121e903"
                                   target="_blank">
                                    <img className="article--logo" src="static/images/js-logo.jpg"
                                         alt="Vanilla JavaScript Development in 2018"/>
                                </a>
                                <div className="article--body">
                                    <a className="article--header"
                                       href="https://blog.rinatussenov.com/vanilla-javascript-development-in-2018-c076d121e903"
                                       target="_blank">
                                        Vanilla JavaScript Development in 2018
                                    </a>
                                    <p className="article--content">
                                        When using Vanilla JavaScript in 2018, you should have full control over each
                                        DOM
                                        element at any time, with the ability to dynamically and programmatically alter
                                        the
                                        state of the any element in accordance with your application’s business logic
                                        and
                                        internal algorithms.
                                        <a className="content--more"
                                           href="https://blog.rinatussenov.com/vanilla-javascript-development-in-2018-c076d121e903"
                                           target="_blank">
                                            read more in Engineer&#39;s Notes...
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="article">
                                <a className="logo--link"
                                   href="https://blog.rinatussenov.com/vanilla-javascript-development-in-2018-c076d121e903"
                                   target="_blank">
                                    <img className="article--logo" src="static/images/js-logo.jpg"
                                         alt="Vanilla JavaScript Development in 2018"/>
                                </a>
                                <div className="article--body">
                                    <a className="article--header"
                                       href="https://blog.rinatussenov.com/vanilla-javascript-development-in-2018-c076d121e903"
                                       target="_blank">
                                        Vanilla JavaScript Development in 2018
                                    </a>
                                    <p className="article--content">
                                        When using Vanilla JavaScript in 2018, you should have full control over each
                                        DOM
                                        element at any time, with the ability to dynamically and programmatically alter
                                        the
                                        state of the any element in accordance with your application’s business logic
                                        and
                                        internal algorithms.
                                        <a className="content--more"
                                           href="https://blog.rinatussenov.com/vanilla-javascript-development-in-2018-c076d121e903"
                                           target="_blank">
                                            read more in Engineer&#39;s Notes...
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <a href="https://blog.rinatussenov.com" target="_blank">Engineer&#39;s Notes</a>
                        <a href="https://www.linkedin.com/in/rinatussenov" target="_blank" id="linkedin">LinkedIn</a>
                        <a href="https://github.com/rinchik" target="_blank">GitHub</a>
                        <a href="http://stackoverflow.com/users/2387506/rinchik" target="_blank">Stack Overflow</a>
                    </div>
                </div>
            </div>

        )
    }

}
;

export default Index;
