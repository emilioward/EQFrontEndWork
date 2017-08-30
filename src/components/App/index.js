import React, { Component } from 'react'
import styled from 'styled-components';

import Dropdown from 'components/Dropdown'
import Pagination from 'components/Pagination'
import Options from 'components/Options'
import TextField from 'components/Forms/TextField'
import {Button} from 'components/Button'
import Breadcrumb from 'components/Breadcrumb'
import Tabs from 'components/TabWindow/Tab'
import Pane from 'components/TabWindow/Pane'
import RichTextArea from 'components/Forms/RichText'

import {fontfamily} from 'constants/theme'

const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  flex-direction: column;
  alignItems: 'center'
`;

const HeadingText = styled.div`
  font-size: 1.9em;
  color: #a8a8a8;
  margin-bottom: 20px;
  font-family: ${fontfamily};
`;

const SubHeadingText = styled.div`
  font-size: 1.0em;
  color: #D3D3D3;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: ${fontfamily};
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

const Link = styled.a`
   color: #4A4A4A;
   text-decoration: none;
   &:hover {
     text-decoration: underline;
   }
`;

const AddAnswerbtn = styled(Button)`
  color: black;
  padding: 60px;
  background-color: #fafafa;
  border: 2px dashed #e8e8e9;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus,
  &:active {
   outline: none
  }
`;

const links = [<Link href="#">Page 1</Link>, <Link href="#">Page 2</Link>]

class App extends Component {

  render() {
    return (
      <div>
        <AppHeader>
          <h2>eQ Author Beta</h2>
        </AppHeader>
        <Breadcrumb links={links}/>
        <Wrapper>
          <SubHeadingText>Pagination</SubHeadingText>
          <Pagination/>
          <HeadingText>Forms</HeadingText>
          <SubHeadingText>Textfield</SubHeadingText>
          <div>Title</div>
          <TextField/>
          <SubHeadingText>Dropdown</SubHeadingText>
          <div>Fruit</div>
          <Dropdown/>
          <SubHeadingText>Textarea</SubHeadingText>
          <div>Description</div>
          <TextField/>
          <RichTextArea/>
          <SubHeadingText>Options</SubHeadingText>
          <Options/>
          <Button>Button</Button>
          <AddAnswerbtn>Add an answer</AddAnswerbtn>
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
        </Wrapper>
      </div>
    );
  }
}

export default App;
