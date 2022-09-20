import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Twitter = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 23 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22.5019 2.14313C21.675 2.50937 20.7856 2.75375 19.8475 2.86937C20.8012 2.30312 21.535 1.4 21.8794 0.333125C20.9869 0.85625 19.9981 1.24063 18.9463 1.44313C18.1063 0.5525 16.9081 0 15.5806 0C13.0306 0 10.9637 2.04875 10.9637 4.575C10.9637 4.9325 11.0056 5.28062 11.0844 5.61875C7.24813 5.42625 3.84563 3.6025 1.56938 0.835C1.16938 1.51125 0.944375 2.30313 0.944375 3.13875C0.944375 4.72688 1.7575 6.125 2.9975 6.94875C2.24062 6.92562 1.52812 6.715 0.904375 6.3775C0.904375 6.39125 0.904375 6.41188 0.904375 6.43125C0.904375 8.65063 2.49625 10.4988 4.60625 10.9194C4.22062 11.025 3.81312 11.0837 3.39312 11.0837C3.095 11.0837 2.80438 11.05 2.52313 10.9994C3.11063 12.8131 4.815 14.1388 6.83437 14.1781C5.25437 15.4031 3.26437 16.1369 1.10062 16.1369C0.726875 16.1369 0.36125 16.1156 0 16.0719C2.04437 17.3663 4.47187 18.125 7.0775 18.125C15.5681 18.125 20.2131 11.1525 20.2131 5.10375C20.2131 4.90563 20.2069 4.70813 20.1975 4.51313C21.1037 3.87313 21.885 3.06562 22.5019 2.14313Z'
          fill='#03A9F4'
        />
      </svg>
    </Icon>
  )
}
