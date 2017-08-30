import React from 'react'
import styled from 'styled-components'

import {Button} from 'components/Button'

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

export const ButtonPage = () => {
  const Centered = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  return(
  <Centered>
    <Button>Page2</Button>
    <AddAnswerbtn>Add an answer</AddAnswerbtn>
  </Centered>
  )
}

export default ButtonPage
