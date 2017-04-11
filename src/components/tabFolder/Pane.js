import React, { Component } from 'react';

//found this online at https://toddmotto.com/creating-a-tabs-component-with-react/ will modify later, i think some of this code is a bit dated

export default class Pane extends Component {
  displayName: 'Pane'
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
