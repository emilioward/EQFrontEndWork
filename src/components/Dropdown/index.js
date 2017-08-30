import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.select`

 width: 250px;
 height: 30px;
 font-family: sans-serif;
 margin-top: 16px;
 margin-bottom: 16px;
`;

export default class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {option1: 'Mango', option2: 'Lime', option3: 'Grapefruit'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
  return(
    <div id="dropdown">
      <Wrapper onChange={this.handleChange}>
        <option>{this.state.option1}</option>
        <option>{this.state.option2}</option>
        <option>{this.state.option3}</option>
      </Wrapper>
    </div>
    )
  }
}
