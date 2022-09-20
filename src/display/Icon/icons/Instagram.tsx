import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Instagram = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M21.2605 26.2437L8.76053 26.2555C6.01053 26.258 3.75865 24.0105 3.75553 21.2605L3.74365 8.76053C3.74115 6.01053 5.98865 3.75865 8.73865 3.75553L21.2387 3.74365C23.9887 3.74115 26.2405 5.98865 26.2437 8.73865L26.2555 21.2387C26.2587 23.9893 24.0105 26.2412 21.2605 26.2437Z'
          fill='url(#paint0_radial_9641_110139)'
        />
        <path
          d='M21.2605 26.2437L8.76053 26.2555C6.01053 26.258 3.75865 24.0105 3.75553 21.2605L3.74365 8.76053C3.74115 6.01053 5.98865 3.75865 8.73865 3.75553L21.2387 3.74365C23.9887 3.74115 26.2405 5.98865 26.2437 8.73865L26.2555 21.2387C26.2587 23.9893 24.0105 26.2412 21.2605 26.2437Z'
          fill='url(#paint1_radial_9641_110139)'
        />
        <path
          d='M15 19.375C12.5881 19.375 10.625 17.4125 10.625 15C10.625 12.5875 12.5881 10.625 15 10.625C17.4119 10.625 19.375 12.5875 19.375 15C19.375 17.4125 17.4119 19.375 15 19.375ZM15 11.875C13.2769 11.875 11.875 13.2769 11.875 15C11.875 16.7231 13.2769 18.125 15 18.125C16.7231 18.125 18.125 16.7231 18.125 15C18.125 13.2769 16.7231 11.875 15 11.875Z'
          fill='white'
        />
        <path
          d='M19.6875 11.25C20.2053 11.25 20.625 10.8303 20.625 10.3125C20.625 9.79473 20.2053 9.375 19.6875 9.375C19.1697 9.375 18.75 9.79473 18.75 10.3125C18.75 10.8303 19.1697 11.25 19.6875 11.25Z'
          fill='white'
        />
        <path
          d='M18.75 23.125H11.25C8.83812 23.125 6.875 21.1625 6.875 18.75V11.25C6.875 8.8375 8.83812 6.875 11.25 6.875H18.75C21.1619 6.875 23.125 8.8375 23.125 11.25V18.75C23.125 21.1625 21.1619 23.125 18.75 23.125ZM11.25 8.125C9.52688 8.125 8.125 9.52688 8.125 11.25V18.75C8.125 20.4731 9.52688 21.875 11.25 21.875H18.75C20.4731 21.875 21.875 20.4731 21.875 18.75V11.25C21.875 9.52688 20.4731 8.125 18.75 8.125H11.25Z'
          fill='white'
        />
        <defs>
          <radialGradient
            id='paint0_radial_9641_110139'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(12.1124 26.2718) scale(28.0619)'
          >
            <stop stop-color='#FFDD55' />
            <stop offset='0.328' stop-color='#FF543F' />
            <stop offset='0.348' stop-color='#FC5245' />
            <stop offset='0.504' stop-color='#E64771' />
            <stop offset='0.643' stop-color='#D53E91' />
            <stop offset='0.761' stop-color='#CC39A4' />
            <stop offset='0.841' stop-color='#C837AB' />
          </radialGradient>
          <radialGradient
            id='paint1_radial_9641_110139'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(7.36615 3.46259) scale(18.6331 12.4153)'
          >
            <stop stop-color='#4168C9' />
            <stop offset='0.999' stop-color='#4168C9' stop-opacity='0' />
          </radialGradient>
        </defs>
      </svg>
    </Icon>
  )
}
