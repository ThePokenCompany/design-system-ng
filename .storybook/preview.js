import React from 'react'
import {styled, darkTheme} from '../stitches.config'

const Container = styled('div', {
  backgroundColor: '$bg-primary',
  color: '$text-primary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
})

const ThemeSwitcherContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
})

const ThemeSwitcher = styled('button', {
  backgroundColor: '$bg-reverse',
  color: '$text-reverse',
  padding: '$1 $2',
  margin: '$1',
  fontSize: '$font-size-2',
  fontWeight: '$font-weight-bold',
  cursor: 'pointer',
  width: '20px',
  height: '20px',
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    const [isDark, setDark] = React.useState(false)
    return (
      <ThemeSwitcherContainer className={isDark ? darkTheme : ''}>
        <Container>
          <Story />
        </Container>
        <ThemeSwitcher onClick={() => setDark(!isDark)} />
      </ThemeSwitcherContainer>
    )
  }
]