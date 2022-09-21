import React from 'react'
import clsx from 'clsx'
import { css } from '../../stitches.config'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../types/globalTypes'

type defaultComponent = 'button'

const disabled = {
  backgroundColor: '$bg-stroke',
  color: '$text-stroke',
  cursor: 'not-allowed',
  border: 'none'
}

const buttonClass = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  fontFamily: '$regular',
  borderRadius: '$1',
  minWidth: '32px',
  height: '32px',
  fontSize: '$text-m',
  cursor: 'pointer',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
  variants: {
    size: {
      small: {
        height: '32px'
      },
      medium: {
        height: '40px'
      }
    },
    variant: {
      primary: {
        backgroundColor: '$primary',
        border: 'none',
        color: '$text-reverse',
        '&:hover': {
          backgroundColor: '$tertiary',
          color: '$text-primary'
        },
        '&:focus': {
          backgroundColor: '$tertiary',
          color: '$text-primary',
          border: '1px solid $primary',
          boxShadow: '0px 0px 0px 3px rgba(38, 222, 208, 0.2)'
        },
        '&:disabled': disabled
      },
      outlined: {
        backgroundColor: '$bg-primary',
        color: '$primary',
        border: '1px solid $primary',
        '&:hover': {
          backgroundColor: '$primary',
          color: '$text-reverse',
          border: 'none'
        },
        '&:focus': {
          backgroundColor: '$primary',
          color: '$text-reverse',
          border: 'none',
          boxShadow: '0px 0px 0px 3px rgba(38, 222, 208, 0.2)'
        },
        '&:disabled': disabled
      },
      contained: {
        backgroundColor: '$bg-primary',
        color: '$text-primary',
        border: '1px solid #0000004D',
        '&:hover': {
          backgroundColor: '$text-stroke',
          color: '$text-primary'
        },
        '&:focus': {
          backgroundColor: '$text-stroke',
          color: '$text-primary'
        },
        '&:disabled': disabled
      }
    }
  }
})

interface Props {
  children: React.ReactNode
  disabled?: boolean
  variant?: 'primary' | 'outlined' | 'contained'
  size?: 'small' | 'medium'
}

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>

type ButtonComponent = <C extends React.ElementType = defaultComponent>(
  props: ButtonProps<C>
) => React.ReactElement | null

const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = defaultComponent>(
    { children, disabled, variant = 'primary', size, component, className, onClick, href, ...rest }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = component || 'button'
    const { className: buttonClassName } = buttonClass({ variant, size })

    const isLink = Component === 'a'

    const disabledProp = isLink ? {} : { disabled }
    const hrefProp = isLink ? (disabled ? {} : { href }) : {}

    return (
      <Component
        ref={ref}
        className={clsx(buttonClassName, className)}
        onClick={onClick}
        {...hrefProp}
        {...disabledProp}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

const ButtonMemo = React.memo(Button)

export { ButtonMemo as Button }
