import React from 'react'
import styled from 'styled-components'
import {fontfamily} from 'constants/theme'

import Pagination from 'components/Pagination'

const SubHeading = styled.div`
  font-size: ${props => props.HeadingText ? '1.9em' : '1.0em'};
  color: ${props => props.HeadingText ? '#a8a8a8' : '#d3d3d3'};
  margin-bottom: 20px;
  font-family: ${fontfamily};
`

export const NavigationPage = () => {
  const Centered = styled.div`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `
  return(
    <Centered>
      <SubHeading>Pagination</SubHeading>
      <Pagination/>
    </Centered>
  )
}

export default NavigationPage
