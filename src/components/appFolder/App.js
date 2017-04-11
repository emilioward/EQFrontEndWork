import React, { Component } from 'react'
import styled from 'styled-components';

import Dropdown from 'components/dropdownFolder/Dropdown'
import Options from 'components/optionsFolder/Options'
import TextField from 'components/textfieldFolder/TextField'
import Button from 'components/buttonFolder/Button'
import Breadcrumb from 'components/breadcrumbFolder/Breadcrumb'
import Tabs from 'components/tabFolder/Tab'
import Pane from 'components/tabFolder/Pane'

const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  flex-direction: column;
  alignItems: 'center'
`;

const Section2 = styled.div`
  
`;

const HeadingText = styled.div`
  font-size: 1.9em;
  color: #a8a8a8;
  margin-bottom: 20px;
  font-family: Lato-Black;
`;

const SubHeadingText = styled.div`
  font-size: 1.0em;
  color: #D3D3D3;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: Lato-Black;
`;

const AppHeader = styled.div`
  background-color: rgba(0,0,0,0.80);
  height: 35px;
  padding: 10px;
  color: white;
  font-size: 12px;
  font-family: Lato-Black;
  text-align: center;
`;

class App extends Component {

  render() {
    return (
      <div>
        <AppHeader>
          <h2>eQ Author Beta</h2>
        </AppHeader>
        {/* <Breadcrumb/> */}
        <Wrapper>
          <HeadingText>Forms</HeadingText>
          <SubHeadingText>Textfield</SubHeadingText>
          Title
          <div/>
          <TextField/>
          <SubHeadingText>Dropdown</SubHeadingText>
          Fruit
          <Dropdown/>
          <SubHeadingText>Textarea</SubHeadingText>
          Description
          <div/>
          <TextField/>
          <SubHeadingText>Options</SubHeadingText>
          <Options/>
          <Button/>

        <Section2>
          <Tabs selected={0}>
            <Pane label="Tab 1">
              <div>This is my tab 1 contents!</div>
            </Pane>
            <Pane label="Tab 2">
              <div>This is my tab 2 contents!</div>
            </Pane>
            <Pane label="Tab 3">
              <div>This is my tab 3 contents!</div>
            </Pane>
          </Tabs>
        </Section2>

        </Wrapper>
      </div>
    );
  }
}

export default App;
