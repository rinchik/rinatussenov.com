import React from "react";

import stylesheet from "./styles/index.pcss";

class Article extends React.Component {


    render() {
        return (
            <div className="article">
                <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
                <a className="logo--link"
                   href={this.props.link}
                   target="_blank">
                    <img className="article--logo" src={this.props.logo}
                         alt={this.props.header}/>
                </a>
                <div className="article--body">
                    <a className="article--header"
                       href={this.props.link}
                       target="_blank">
                        {this.props.header}
                    </a>
                    <p className="article--content">
                        {this.props.content}
                        <a className="content--more"
                           href{this.props.link}
                           target="_blank">
                            read more in Engineer&#39;s Notes...
                        </a>
                    </p>
                </div>
            </div>

        )
    }

}
;

export default Article;
