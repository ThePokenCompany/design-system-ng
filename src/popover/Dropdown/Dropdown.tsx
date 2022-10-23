import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { styled, keyframes } from '../../stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

const contentStyles = {
  minWidth: 220,
  backgroundColor: '$bg-tertiary',
  fontFamily: '$regular',
  borderRadius: 6,
  padding: 5,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
}

const StyledContent = styled(DropdownPrimitive.Content, { ...contentStyles })

const StyledArrow = styled(DropdownPrimitive.Arrow, {
  fill: '$bg-tertiary'
})

interface ContentProps {
  children: React.ReactNode
}

function Content({ children, ...props }: ContentProps) {
  return (
    <DropdownPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownPrimitive.Portal>
  )
}

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$text-primary',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$text-stroke',
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColor: '$bg-filter',
    color: '$text-primary'
  }
}

const StyledItem = styled(DropdownPrimitive.Item, { ...itemStyles })
const StyledCheckboxItem = styled(DropdownPrimitive.CheckboxItem, { ...itemStyles })
const StyledRadioItem = styled(DropdownPrimitive.RadioItem, { ...itemStyles })

const StyledLabel = styled(DropdownPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: '$text-primary'
})

const StyledSeparator = styled(DropdownPrimitive.Separator, {
  height: 1,
  backgroundColor: '$text-primary',
  margin: 5
})

const StyledItemIndicator = styled(DropdownPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

// Exports
export const Dropdown = DropdownPrimitive.Root
export const DropdownTrigger = DropdownPrimitive.Trigger
export const DropdownContent = Content
export const DropdownItem = StyledItem
export const DropdownCheckboxItem = StyledCheckboxItem
export const DropdownRadioGroup = DropdownPrimitive.RadioGroup
export const DropdownRadioItem = StyledRadioItem
export const DropdownItemIndicator = StyledItemIndicator
export const DropdownLabel = StyledLabel
export const DropdownSeparator = StyledSeparator
