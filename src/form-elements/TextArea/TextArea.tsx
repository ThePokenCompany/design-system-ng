import React from 'react'
import { css, styled } from '../../stitches.config'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../types/globalTypes'

type defaultComponent = 'textarea'

interface Props {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  helperText?: string
  error?: boolean
  placeholder?: string
  label?: string
  adornment?: React.ReactElement
}

const inputClasses = css({
  width: '100%',
  height: '22px',
  fontFamily: '$regular',
  display: 'inline-flex',
  backgroundColor: '$bg-primary',
  border: '1px solid #262626',
  color: '$text-primary',
  borderRadius: '$1',
  fontSize: '$text-l',
  padding: '8px 16px',
  marginTop: '4px',
  '&:placeholder': {
    color: '$bg-stroke'
  },
  '&:focus-visible': {
    outline: '1px solid rgba(38, 38, 38, 0.2)',
    boxShadow: '0px 0px 1px 0px #FFFFFF'
  },
  '&:disabled': {
    color: '$text-stroke'
  },
  variants: {
    error: {
      true: {
        border: '1px solid $alert-error',
        '&:focus-visible': {
          outline: '1px solid $alert-error',
          boxShadow: '0px 0px 1px 0px #FFFFFF'
        }
      }
    }
  }
})

const labelClasses = css({
  marginBottom: '8px',
  fontSize: '$text-m',
  color: '$text-secondary',
  fontFamily: '$regular',
  variants: {
    disabled: {
      true: {
        color: '$text-stroke'
      }
    }
  }
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export type TextAreaProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>

type TextAreaComponent = <C extends React.ElementType = defaultComponent>(
  props: TextAreaProps<C>
) => React.ReactElement | null

const TextArea: TextAreaComponent = React.forwardRef(
  <C extends React.ElementType = defaultComponent>(
    { value, onChange, disabled, helperText, error, className, placeholder, label }: TextAreaProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const { className: inputClassname } = inputClasses({ error })
    const { className: labelClassname } = labelClasses({ disabled })
    return (
      <Container className={className}>
        <label className={labelClassname}>{label}</label>
        <textarea
          placeholder={placeholder}
          className={inputClassname}
          ref={ref}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {helperText && <span className={helperTextClasses({ error, disabled })}>{helperText}</span>}
      </Container>
    )
  }
)

const helperTextClasses = css({
  display: 'block',
  marginTop: '$1',
  color: '$alert-info',
  fontSize: '$text-s',
  fontFamily: '$regular',
  fontWeight: '$regular',
  variants: {
    error: {
      true: {
        color: '$alert-error'
      }
    },
    disabled: {
      true: {
        color: '$text-stroke'
      }
    }
  }
})

const TextAreaMemo = React.memo(TextArea)

export { TextAreaMemo as TextArea }
