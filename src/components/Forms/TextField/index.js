import React, { Component } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
 font-family: sans-serif;
 width: 300px;
`;

export default class TextField extends Component{

  constructor(props){
    super(props);
    this.state = {value: this.props.value};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
   this.setState({value: event.target.value});
  }

  render(){
    return(
      <TextArea value={this.state.value} onChange={this.handleChange} rows="10" />
    )
  }
}
