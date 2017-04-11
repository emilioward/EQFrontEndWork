import React, { Component } from 'react';
import styled from 'styled-components';

const BreadStyle = styled.div`
background-color: #D3D3D3;
height: 10px;
padding: 10px;
font-family: Lato-Black;
color: grey;
font-size: 12px;
text-align: left;
`;

const Link = styled.div`
  text-align: center;
`;

const Links = [{id: 1, link: 'Link1'},
              {id: 2, link:'Link2'},
              {id: 3, link:'Link3'}];

export default class Breadcrumb extends Component{

  //OnClick method

  render(){
    return(
      <div>
        <Links>
          <div><a href='#' onClick={this.onClick}>Home</a></div>
          <div><a href='#' onClick={this.onClick}>eQSurveyPage1</a></div>
          <div><a href='#' onClick={this.onClick}>eQSurveyPage2</a></div>
        </Links>
      </div>
    )
  }
}
