import { styled } from '@stitches/react'
import * as SelectPrimitive from '@radix-ui/react-select'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 4,
  width: '100%',
  padding: '0 15px',
  fontFamily: '$regular',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: '$bg-primary',
  color: '$text-primary',
  border: '1px solid #262626',
  '&:hover': { backgroundColor: '$bg-primary' },
  '&:focus': { boxShadow: `0 0 0 2px #FFFFFF`, color: '$text-primary' },
  '&:focus-visible': {
    outline: '1px solid rgba(38, 38, 38, 0.2)',
    boxShadow: '0px 0px 1px 0px #FFFFFF',
    color: '$text-primary'
  }
})

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  fontFamily: '$regular',
  backgroundColor: '$bg-primary',
  border: '1px solid #262626',
  borderRadius: 6,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5
})

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  fontFamily: '$regular',
  lineHeight: 1,
  color: '$text-primary',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$text-secondary',
    pointerEvents: 'none'
  },

  '&:focus': {
    backgroundColor: 'tertiary',
    color: '$text-primary'
  }
})

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  fontFamily: '$regular',
  color: '$primary'
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$text-primary',
  margin: 5
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$bg-primary',
  color: '$text-primary',
  cursor: 'default'
}

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles)

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles)

// Exports
export const Select = SelectPrimitive.Root
export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = SelectPrimitive.Icon
export const SelectContent = StyledContent
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton
