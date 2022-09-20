import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Input, InputProps } from './Input'

export default {
  title: `${STORIES_GROUPS.FORM_ELEMENTS}/Input`,
  component: Input
}

const Template: Story<InputProps<React.ElementType<'input'>>> = <C extends React.ElementType = 'input'>(
  args: InputProps<C>
) => <Input {...args} />

export const Demo = Template.bind({})

Demo.args = {
  disabled: false,
  error: false,
  helperText: '',
  placeholder: 'Type here',
  label: 'Label'
}

export const Examples = () => {
  const [value, setValue] = React.useState('')

  return (
    <div>
      <Input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
    </div>
  )
}
