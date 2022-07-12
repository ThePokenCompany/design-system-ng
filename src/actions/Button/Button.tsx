import React from 'react'
import { styled } from '@stitches/react'
import { PolymorphicComponentPropsWithRef } from '../../types/globalTypes'

type defaultComponent = 'button'

const ButtonStyle = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})

interface Props {
  children: React.ReactNode
}

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

type ButtonComponent = <C extends React.ElementType = defaultComponent>(
  props: ButtonProps<C>,
) => React.ReactElement | null

const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = defaultComponent>({
    children,
  }: ButtonProps<C>) => {
    return <ButtonStyle>{children}</ButtonStyle>
  },
)

const ButtonMemo = React.memo(Button)

export { ButtonMemo as Button }
