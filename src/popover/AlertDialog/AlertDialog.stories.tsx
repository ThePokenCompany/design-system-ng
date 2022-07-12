import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { AlertDialogDemo } from './AlertDialog'

export default {
  title: `${STORIES_GROUPS.POPOVERS}/AlertDialog`,
  component: AlertDialogDemo,
}

// const Template: Story<ButtonProps<React.ElementType<'button'>>> = <
//   C extends React.ElementType = 'button'
// >(
//   args: ButtonProps<C>,
// ) => <Button {...args} />

// export const Demo = Template.bind({})

// Demo.args = {
//   children: 'Button',
//   outlined: false,
//   disabled: false,
//   component: 'button',
// }

export const Examples = () => {
  return (
    <div>
      <AlertDialogDemo />
    </div>
  )
}
