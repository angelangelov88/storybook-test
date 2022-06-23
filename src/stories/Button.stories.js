import Button from "../components/Button"

export default {
  title: "Button",
  component: Button,
  // argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'my button',
  variant: 'primary',
  size: 'md'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'my button',
  variant: 'secondary',
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  children: 'my button',
  variant: 'primary',
  size: 'lg'
}

export const Small = Template.bind({})
Small.args = {
  children: 'my button',
  variant: 'primary',
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'my button',
  variant: 'primary',
  size: 'md'
}