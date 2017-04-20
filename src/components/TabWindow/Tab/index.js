import React, { Component } from 'react';
import styled from 'styled-components';
//found this online at https://toddmotto.com/creating-a-tabs-component-with-react/ will modify later, i think some of this code is a bit dated

const Tab = styled.div`
  margin: 25px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
`;

const TabContent = styled.div`
  padding: 25px;
`;

const TabLabels = styled.div`
  margin: 0;
  padding: 0;
`;

const TabLabelsDisplay = styled.div`
  display: inline-block;
`;

const TabLabelsActive = styled.div`
  padding: 8px 12px;
  display: block;
  color: #444;
  text-decoration: none;
  border-bottom: 2px solid #f5f5f5;
  &:active{
    border-bottom-color: #337ab7;
  }
`;

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
        <TabLabelsDisplay>
            <TabLabelsActive>
              <div key={index}>
                <a href="#" className={activeClass} onClick={this.handleClick.bind(this, index)}>{child.props.label}</a>
              </div>
            </TabLabelsActive>
        </TabLabelsDisplay>
      );
    }
    return (
      <TabLabels>
        {this.props.children.map(labels.bind(this))}
      </TabLabels>
    );
  }

  _renderContent() {
    return (
      <TabContent>
        {this.props.children[this.state.selected]}
      </TabContent>
    );
  }
  render() {
    return (
      <Tab>
        {this._renderTitles()}
        {this._renderContent()}
      </Tab>
    );
  }
}
