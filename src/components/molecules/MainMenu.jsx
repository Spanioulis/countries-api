import React from 'react'
import styled from 'styled-components'
import { main } from '../../constants'
import { Text } from '../atoms'

const MainMenuStyled = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 1rem;
    &:first-child {
      margin-left: 0;
    }

    a {
      text-decoration: none;
    }
  }
`

function MainMenu() {
  return (
    <MainMenuStyled>
      {Object.values(main).map(({ path, label }) => (
        <li key={path}>
          <a href={path}>
            <Text>{label}</Text>
          </a>
        </li>
      ))}
    </MainMenuStyled>
  )
}

export default styled(MainMenu)``
