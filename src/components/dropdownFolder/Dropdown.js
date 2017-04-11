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
    this.state = {value: 'Select one'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
  return(

    <div id="dropdown">
    <Wrapper value={this.state.value} onChange={this.handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </Wrapper>

    </div>

    )
  }
}
