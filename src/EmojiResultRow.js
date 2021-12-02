import PropTypes from "prop-types";
import "./EmojiResultRow.css";
import React, { PureComponent } from "react";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    symbol: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const codePoint = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePoint}.png`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
  }
}
