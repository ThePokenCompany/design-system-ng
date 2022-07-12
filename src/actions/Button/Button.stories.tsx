import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Button, ButtonProps } from './Button'

export default {
  title: `${STORIES_GROUPS.ACTIONS}/Button`,
  component: Button,
}

const Template: Story<ButtonProps<React.ElementType<'button'>>> = <
  C extends React.ElementType = 'button'
>(
  args: ButtonProps<C>,
) => <Button {...args} />

export const Demo = Template.bind({})

Demo.args = {
  children: 'Button',
  outlined: false,
  disabled: false,
  component: 'button',
}

export const Examples = () => {
  return (
    <div>
      <Button>Button</Button>
    </div>
  )
}