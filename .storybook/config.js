import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import infoAddon from '@storybook/addon-info'

const req = require.context('../src/components', true, /\.stories\.js$/)

const loadStories = () => {
  req.keys().forEach(file => req(file))
}

setOptions({
  name: 'Otis Payments',
  downPanelInRight: true,
  sortStoriesByKind: true,
})

setAddon(infoAddon)

configure(loadStories, module)
