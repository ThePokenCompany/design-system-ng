import React from 'react'
import { styled } from '../../stitches.config'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Adduser } from './icons/Adduser'
import * as icons from './icons/index'

export default {
  title: `${STORIES_GROUPS.DATA_DISPLAY}/Icon`
}

const ExampleStyle = styled('div', {
  fontFamily: '$regular',
  width: '200px',
  height: '200px',
  fontSize: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '$bg-tertiary',
  margin: '$2',
  cursor: 'pointer'
})

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '$2'
})

function onClick(iconName: string) {
  navigator.clipboard.writeText(`<${iconName} />`)
}

export const Examples = () => {
  return (
    <Container>
      {Object.keys(icons).map((iconName) => {
        const Icon = icons[iconName]
        return (
          <ExampleStyle key={iconName} onClick={() => onClick(iconName)}>
            <Icon />
            <div>{`<${iconName} />`}</div>
          </ExampleStyle>
        )
      })}
    </Container>
  )
}
