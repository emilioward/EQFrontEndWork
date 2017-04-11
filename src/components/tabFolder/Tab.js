import React, { Component } from 'react';
import styles from './style.css';
//found this online at https://toddmotto.com/creating-a-tabs-component-with-react/ will modify later, i think some of this code is a bit dated

export default class Tabs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected
    }
  }

  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index}>
          <a href="#"
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
}
