import React from 'react'
import { styled } from '../../../stitches.config'
import { PolymorphicComponentPropsWithRef } from '../../types/globalTypes'

type defaultComponent = 'button'

const ButtonStyle = styled('button', {
  backgroundColor: '$primary',
  borderRadius: '$round',
  fontSize: '$3',
  padding: '$2 $3',
  cursor: 'pointer',
  color: '$text-primary',
  '&:hover': {
    opacity: 0.8
  }
})

interface Props {
  children: React.ReactNode
}

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>

type ButtonComponent = <C extends React.ElementType = defaultComponent>(
  props: ButtonProps<C>
) => React.ReactElement | null

const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = defaultComponent>({ children }: ButtonProps<C>) => {
    return <ButtonStyle>{children}</ButtonStyle>
  }
)

const ButtonMemo = React.memo(Button)

export { ButtonMemo as Button }
