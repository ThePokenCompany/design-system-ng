import { styled, darkTheme } from '../stitches.config'

export const DarkModeSwitcher = styled('div', {
  color: '$primary',
  width: '0px',
  height: '0px',
  backgroundColor: '$bg-primary',
  [`${darkTheme}`]: {}
})
