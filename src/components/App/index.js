import React, { Component } from 'react'
import styled from 'styled-components';

import Breadcrumb from 'components/Breadcrumb'
import RouteConfigExample from 'containers/'

import {fontfamily} from 'constants/theme'

const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  flex-direction: column;
  alignItems: 'center'
`;

const AppHeader = styled.div`
  background-color: rgba(0,0,0,0.80);
  height: 35px;
  padding: 10px;
  color: white;
  font-size: 12px;
  font-family: ${fontfamily};
  text-align: center;
`;

const Links = styled.a`
   color: #4A4A4A;
   text-decoration: none;
   &:hover {
     text-decoration: underline;
   }
`;

const links = [<Links href="#">Page 1</Links>, <Links href="#">Page 2</Links>]

class App extends Component {

  render() {
    return (
      <div>
        <AppHeader>
          <h2>eQ Author Beta</h2>
        </AppHeader>
        <Breadcrumb links={links}/>
        <Wrapper>
          <RouteConfigExample/>
        </Wrapper>
      </div>
    );
  }
}

export default App;
