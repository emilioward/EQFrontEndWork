import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

  font-size: 0.9em;
  margin-top 20px;
  margin-bottom 20px;
  `

export default class Options extends Component {

  render(){
    return (
      <Wrapper>
      <div>
        Radio Button:
        <input type="radio" ></input>
      </div>
      <div>
        Checkbox:
        <input type="checkbox" ></input>
      </div>
      </Wrapper>
    )
  }
}
