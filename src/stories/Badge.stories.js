import Badge from "../components/Badge"
import {InboxIcon, BellIcon} from '@heroicons/react/outline';

export default {
  title: "Badge",
  component: Badge,
  // argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = args => <Badge {...args} />

export const Red = Template.bind({})
Red.args = {
  color: 'red',
  children: '7',
  size: 'sm',
  // LeadingIcon:{InboxIcon},
  // TrailingIcon:{BellIcon}
}

export const Green = Template.bind({})
Green.args = {
  color: 'green',
  children: '1',
  size: 'lg',
  // LeadingIcon:{InboxIcon},
  // TrailingIcon:{BellIcon}

}

export const Small = Template.bind({})
Small.args = {
  color: 'teal',
  children: '2',
  size: 'sm',
  // LeadingIcon:{InboxIcon},
  // TrailingIcon:{BellIcon}

}

export const Large = Template.bind({})
Large.args = {
  color: 'yellow',
  children: '3',
  size: 'lg',
  // LeadingIcon:{InboxIcon},
  // TrailingIcon:{BellIcon}

}

export const LongLabel = Template.bind({})
LongLabel.args = {
  color: 'green',
  children: 'Press me again and again and again',
  size: 'lg'
}