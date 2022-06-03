import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import '../infrastructure/components/atoms/Input/styles.module.scss'
import Input from '../infrastructure/components/atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  name: 'textInput',
  label: '... Write something!',
  type: 'text',
}

export const TextNumber = Template.bind({})
TextNumber.args = {
  name: 'textNumber',
  label: 'Only numbers here!',
  type: 'number',
}
