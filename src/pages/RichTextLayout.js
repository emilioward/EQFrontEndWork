import React from 'react'
import styled from 'styled-components'

import RichTextArea from 'components/Forms/RichText'

export const RichTextPage = () => {
  const Centered = styled.div`
    flex: 1 1 auto;
    margin-left: 700px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  return(
    <Centered>
      <RichTextArea/>
    </Centered>
  )
}

export default RichTextPage
