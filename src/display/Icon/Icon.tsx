import React from 'react'
import { styled } from '../../stitches.config'

const StyledIcon = styled('span', {
  display: 'inline-block',
  width: 16,
  height: 16,
  '& svg': {
    position: 'relative'
  }
})

interface IconProps {
  className?: string
  style?: object
  children: React.ReactNode
}

export const Icon = (props: IconProps) => {
  const { className, style, children } = props
  return (
    <StyledIcon className={className} style={style}>
      {children}
    </StyledIcon>
  )
}
