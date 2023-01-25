import React from 'react'
import styled from 'styled-components'
import { colors, Container, dimensions } from '../../styles'
import { Text } from '../atoms'
import { MainMenu } from '../molecules'

const HeaderStyled = styled(Container)`
  padding-top: ${dimensions.spacing.xl};
  padding-bottom: ${dimensions.spacing.xl};
  background-color: ${colors.background};
`
const TextStyled = styled(Text)`
  margin: 1rem 1rem;
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <TextStyled
        as="span"
        color={colors.logo}
        fontSize={dimensions.font.base}
        fontWidth="700"
      >
        COUNTRIES
      </TextStyled>
      <MainMenu />
    </HeaderStyled>
  )
}

export default Header
