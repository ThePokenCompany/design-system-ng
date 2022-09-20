import React from 'react'
import { css } from '../../stitches.config'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../types/globalTypes'

type defaultComponent = 'input'

interface Props {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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

export type InputProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>

type InputComponent = <C extends React.ElementType = defaultComponent>(
  props: InputProps<C>
) => React.ReactElement | null

const Input: InputComponent = React.forwardRef(
  <C extends React.ElementType = defaultComponent>(
    { value, onChange, disabled, helperText, error, className, placeholder, label, adornment }: InputProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const { className: inputClassname } = inputClasses({ error })
    const { className: labelClassname } = labelClasses({ disabled })
    return (
      <div className={className}>
        <label className={labelClassname}>
          {label}
          <input
            placeholder={placeholder}
            className={inputClassname}
            ref={ref}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
          {adornment}
        </label>
        {helperText && <span className={helperTextClasses({ error, disabled })}>{helperText}</span>}
      </div>
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

const InputMemo = React.memo(Input)

export { InputMemo as Input }
