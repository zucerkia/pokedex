import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import '../infrastructure/components/molecules/PokemonCard/styles.module.scss'
import PokemonCard from '../infrastructure/components/molecules/PokemonCard'

export default {
  title: 'Molecules/PokemonCard',
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
)

export const BasicCard = Template.bind({})
BasicCard.args = {
  id: '12',
  name: 'Articuno',
}

export const FullCard = Template.bind({})
FullCard.args = {
  id: '45',
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  name: 'Blastoide',
}
