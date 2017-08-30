import React from 'react'
import styled from 'styled-components'
import {fontfamily} from 'constants/theme'

import Options from 'components/Options'
import TextField from 'components/Forms/TextField'
import Dropdown from 'components/Dropdown'
import Tabs from 'components/TabWindow/Tab'
import Pane from 'components/TabWindow/Pane'

const SubHeading = styled.div`
  font-size: ${props => props.HeadingText ? '1.9em' : '1.0em'};
  color: ${props => props.HeadingText ? '#a8a8a8' : '#d3d3d3'};
  margin-bottom: 20px;
  font-family: ${fontfamily};
`

export const FormPage = () => {
  const Centered = styled.div`
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  return(
  <Centered>
    <SubHeading HeadingText>Forms</SubHeading>
    <SubHeading>Dropdown</SubHeading>
    <Dropdown/>
    <SubHeading>Textarea</SubHeading>
    <TextField/>
    <SubHeading>Options</SubHeading>
    <Options/>
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
  </Centered>
  )
}

export default FormPage
