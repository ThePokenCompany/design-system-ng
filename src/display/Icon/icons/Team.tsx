import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  variant?: 'outlined' | 'filled'
}

export const Team = ({ className, style, variant = 'filled' }: Props) => {
  return (
    <Icon className={className} style={style}>
      {variant === 'filled' && (
        <svg width='100%' height='100%' viewBox='0 0 22 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3C4 3.79565 4.31607 4.55871 4.87868 5.12132C5.44129 5.68393 6.20435 6 7 6C7.79565 6 8.55871 5.68393 9.12132 5.12132C9.68393 4.55871 10 3.79565 10 3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0ZM15 0C14.2044 0 13.4413 0.316071 12.8787 0.87868C12.3161 1.44129 12 2.20435 12 3C12 3.79565 12.3161 4.55871 12.8787 5.12132C13.4413 5.68393 14.2044 6 15 6C15.7956 6 16.5587 5.68393 17.1213 5.12132C17.6839 4.55871 18 3.79565 18 3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM2.76367 4.00195C2.32553 4.01878 1.3722 4.1317 0.751953 4.75195C-0.0750468 5.57895 0.00195312 6.99805 0.00195312 6.99805C0.00195312 6.99805 1.42105 7.07505 2.24805 6.24805C3.07505 5.42105 2.99805 4.00195 2.99805 4.00195C2.99805 4.00195 2.90972 3.99634 2.76367 4.00195ZM7 8C4 8 0 9.464 0 11.5V13C0 13.552 0.448 14 1 14H13C13.552 14 14 13.552 14 13V11.5C14 9.464 10 8 7 8ZM15 8C14.683 8 14.3535 8.01978 14.0215 8.05078C15.2035 8.91578 16 10.059 16 11.5V13C16 13.552 16.448 14 17 14H21C21.552 14 22 13.552 22 13V11.5C22 9.464 18 8 15 8Z'
            fill='white'
          />
        </svg>
      )}
      {variant === 'outlined' && (
        <svg width='100%' height='100%' viewBox='0 0 22 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M7 0C5.343 0 4 1.343 4 3C4 4.657 5.343 6 7 6C8.657 6 10 4.657 10 3C10 1.343 8.657 0 7 0ZM15 0C13.343 0 12 1.343 12 3C12 4.657 13.343 6 15 6C16.657 6 18 4.657 18 3C18 1.343 16.657 0 15 0ZM7 2C7.551 2 8 2.449 8 3C8 3.551 7.551 4 7 4C6.449 4 6 3.551 6 3C6 2.449 6.449 2 7 2ZM15 2C15.551 2 16 2.449 16 3C16 3.551 15.551 4 15 4C14.449 4 14 3.551 14 3C14 2.449 14.449 2 15 2ZM2.76367 4.00195C2.32553 4.01878 1.3722 4.1317 0.751953 4.75195C-0.0750468 5.57895 0.00195312 6.99805 0.00195312 6.99805C0.00195312 6.99805 1.42105 7.07505 2.24805 6.24805C3.07505 5.42105 2.99805 4.00195 2.99805 4.00195C2.99805 4.00195 2.90972 3.99634 2.76367 4.00195ZM7 8C4 8 0 9.464 0 11.5V14H13.0781H14H22V11.5C22 9.464 18 8 15 8C13.7159 8 12.2617 8.28294 11.0039 8.75C9.74378 8.28175 8.28671 8 7 8ZM7 10C9.36 10 11.62 11.0256 12 11.5996V12H2V11.5996C2.38 11.0256 4.64 10 7 10ZM15 10C17.36 10 19.62 11.0256 20 11.5996V12H14V11.5C14 11.0182 13.7703 10.57 13.3887 10.1641C13.9083 10.0693 14.4448 10 15 10Z'
            fill='white'
          />
        </svg>
      )}
    </Icon>
  )
}