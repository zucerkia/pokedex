import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PokemonName from '../infrastructure/components/atoms/PokemonName'
import '../infrastructure/components/atoms/PokemonName/styles.module.scss'

export default {
  title: 'Atoms/PokemonName',
  component: PokemonName,
} as ComponentMeta<typeof PokemonName>

const Template: ComponentStory<typeof PokemonName> = (args) => (
  <PokemonName {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'Charizard',
}
