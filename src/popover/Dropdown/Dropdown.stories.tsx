import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from './Dropdown'
import { Button } from '../../actions/Button/Button'

export default {
  title: `${STORIES_GROUPS.POPOVERS}/Dropdown`,
  component: Dropdown
}

export const Examples = () => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger asChild>
          <Button>Trigger</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}
