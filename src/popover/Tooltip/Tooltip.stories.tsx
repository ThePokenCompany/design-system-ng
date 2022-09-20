import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Tooltip, Provider, TooltipTrigger, TooltipContent } from './Tooltip'
import { PlusIcon } from '@radix-ui/react-icons'
import { Button } from '../../actions/Button/Button'

export default {
  title: `${STORIES_GROUPS.POPOVERS}/Tooltip`,
  component: Tooltip
}

export const Examples = () => {
  return (
    <Provider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>
            <PlusIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          Hello I'm Jeffrey and I'm a tooltip with a custom offset of 5px from the side of the trigger element
        </TooltipContent>
      </Tooltip>
    </Provider>
  )
}
