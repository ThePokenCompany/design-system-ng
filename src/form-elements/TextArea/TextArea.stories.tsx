import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { TextArea, TextAreaProps } from './TextArea'

export default {
  title: `${STORIES_GROUPS.FORM_ELEMENTS}/TextArea`,
  component: TextArea
}

const Template: Story<TextAreaProps<React.ElementType<'textarea'>>> = <C extends React.ElementType = 'textarea'>(
  args: TextAreaProps<C>
) => <TextArea {...args} />

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
      <TextArea value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
    </div>
  )
}
