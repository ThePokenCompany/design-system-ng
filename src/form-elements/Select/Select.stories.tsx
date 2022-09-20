import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectViewport
} from './Select'

export default {
  title: `${STORIES_GROUPS.FORM_ELEMENTS}/Select`,
  component: Select
}

// const Template: Story<SelectProps<React.ElementType<'select'>>> = <C extends React.ElementType = 'select'>(
//   args: SelectProps<C>
// ) => <Select {...args} />

// export const Demo = Template.bind({})

// Demo.args = {}

export const Examples = () => {
  return (
    <div>
      <Select defaultValue='blueberry'>
        <SelectTrigger aria-label='Food'>
          <SelectValue />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>
                <SelectItemText>Apple</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='banana'>
                <SelectItemText>Banana</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='blueberry'>
                <SelectItemText>Blueberry</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='grapes'>
                <SelectItemText>Grapes</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='pineapple'>
                <SelectItemText>Pineapple</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value='aubergine'>
                <SelectItemText>Aubergine</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='broccoli'>
                <SelectItemText>Broccoli</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='carrot' disabled>
                <SelectItemText>Carrot</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='courgette'>
                <SelectItemText>Courgette</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='leek'>
                <SelectItemText>leek</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Meat</SelectLabel>
              <SelectItem value='beef'>
                <SelectItemText>Beef</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='chicken'>
                <SelectItemText>Chicken</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='lamb'>
                <SelectItemText>Lamb</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value='pork'>
                <SelectItemText>Pork</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </div>
  )
}
