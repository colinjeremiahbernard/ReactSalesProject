import React from "react";

import "./styles.css";

export class Article extends React.Component {
  render() {
    return (
      <div id="article"> {/* Changed this line to a div */}
        <img
          src={this.props.thumbnail}
          alt={this.props.title}
          style={{ width: "80px", height: "auto" }}
        />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

