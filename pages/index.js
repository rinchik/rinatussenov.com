import React from "react";

import Head from 'next/head';
import GA from '../src/vendor/google-analytics';
import Article from '../src/components/index-article';

import stylesheet from "./styles/index.pcss";

class Index extends React.Component {


    render() {
        return (
            <div>
                <Head>
                    <title>Rinat Ussenov - Software Engineer</title>
                    <meta name="keywords"
                          content="resume, Rinat personal page, software engineer, programmer, front-end engineer, backend engineer, software developer, javascript, python, java, nodejs, react, scala, Play Framework"/>
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
                    <meta name="keywords"
                          content="ecommerce event, ecommerce conference, amazon conference, ecommerce strategy, ecommerce leaders, ecommerce technology, ecommerce education, ecommerce learning"/>
                    <meta property="og:title" content="Rinat Ussenov: Software Engineer"/>
                    <meta property="og:description"
                          content="Personal Website, info, articles and media links"/>
                    <meta property="og:image" content="/static/images/logo.png"/>
                    <meta property="og:url" content="https://rinatussenov.com"/>
                    <meta name="twitter:card"
                          content="Personal Website, info, articles and media links"/>
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
                            <Article
                                link="https://blog.rinatussenov.com/juggling-bits-in-javascript-bitmasks-128ad5f31bed"
                                logo="static/images/bitmasks.png"
                                header="Juggling bits in JavaScript: bitmasks"
                                content="My first ever encounter with bitmasks happened about two years ago when I was looking into LDAP implementation with Node.js, apparently AD (Active Directory) is using bitmasks to create, control and manipulate user account’s properties (flags), which was very interesting. "
                            />
                            <Article
                                link="https://blog.rinatussenov.com/vanilla-javascript-development-in-2018-c076d121e903"
                                logo="static/images/js-logo.jpg"
                                header="Vanilla JavaScript Development in 2018"
                                content="When using Vanilla JavaScript in 2018, you should have full control over each DOM element at any time, with the ability to dynamically and programmatically alter the state of the any element in accordance with your application’s business logic and internal algorithms."
                            />
                            <Article
                                link="https://blog.rinatussenov.com/algorithmic-trading-with-nodejs-gdax-pocket-ui-150e227d0d6a"
                                logo="static/images/gdax-pocket-ui.png"
                                header="GDAX Pocket UI"
                                content="I have written some time ago about Algorithmic Trading, and how great it is for Software Engineers to exercise their brains with. I have provided some code snippets and a general logical guideline about the paths, goals and potential opportunities algorithmic trading can lead to. Now it is time to step it up and provide a ready to use, open sourced, personal trading application."
                            />
                            <Article
                                link="https://blog.rinatussenov.com/automating-manual-visual-regression-tests-with-python-and-selenium-be66be950196"
                                logo="static/images/regression.png"
                                header="Automating Visual Regression Tests with Python and Selenium"
                                content="It all started when, as part of the continues improvement, we made some CSS refactoring changes for the lordandtaylor.com website and in order to roll changes out into production a complete visual regression was required."
                            />
                            <Article
                                link="https://blog.rinatussenov.com/useful-math-divisibility-signs-fbc08baf20c6"
                                logo="static/images/useful-math-logo.png"
                                header="Useful Math: Divisibility Signs"
                                content="I have learned quite a few of divisibility signs in I think 6th grade and this knowledge remains one of those useful things that I still use in my everyday life."
                            />

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
