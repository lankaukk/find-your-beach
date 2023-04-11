import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { App2 } from '/src/app2.js'
import { Card } from '/src/card.js'
import { ThemedCard } from '/src/themed-card.js'
import { MultipleProvidersCard } from '/src/multiple-providers-card.js'
import { SimpleCard } from '/src/simple-card.js'
import { Playground } from '/src/playground.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        width: 700,
        height: 759,
        backgroundColor: 'rgb(255, 255, 255, 0)',
        border: '1px dashed rgb(0, 0, 0, 1)',
        left: 272,
        top: 128,
      }}
      data-label='Playground'
    >
      <Playground style={{}} />
    </Scene>
    <Scene
      style={{
        width: 375,
        height: 759,
        display: 'flex',
        flexDirection: 'column',
        left: 1072,
        top: 128,
        backgroundColor: '#e5e78c',
      }}
      data-label='Mobile List'
    >
      <App style={{ backgroundColor: '#e5e78c' }} />
    </Scene>
    <Scene
      style={{
        width: 744,
        height: 1133,
        display: 'flex',
        flexDirection: 'column',
        left: 1568,
        top: 128,
        position: 'absolute',
      }}
      data-label='Tablet List'
    >
      <App style={{}} />
    </Scene>
    <Scene
      style={{
        width: 744,
        height: 1133,
        display: 'flex',
        flexDirection: 'column',
        left: 2400,
        top: 128,
        position: 'absolute',
      }}
      data-label='Grid Layout Component in default size'
    >
      <App2 />
    </Scene>
    <Scene
      style={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        left: -6,
        top: 1060,
        position: 'absolute',
      }}
      data-label='Opinionated component with contents and no children prop'
    >
      <Card
        label='Seychelles'
        title='La Digue'
        copy={
          <span style={{ fontSize: '.5em' }}>
            Most popular beach of 2022
          </span>
        }
        imgURL='https://source.unsplash.com/jPmurJKSL_0/600x800'
      />
    </Scene>
    <Scene
      style={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        left: 233,
        top: 1060,
        position: 'absolute',
      }}
      data-label='Opinionated component Prominent support for children'
    >
      <SimpleCard label='Seychelles' title='La Digue'>
        <img
          src='https://source.unsplash.com/jPmurJKSL_0/600x800'
          style={{ width: '100%' }}
          alt='beach'
        />
        <div
          style={{
            color: '#685B38',
            backgroundColor: 'white',
            padding: 20,
            fontFamily: 'ITC Garamond',
            fontSize: '14pt',
          }}
        >
          La Digue, Seychelles
        </div>
      </SimpleCard>
    </Scene>
    <Scene
      style={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        left: 473,
        top: 1060,
        position: 'absolute',
      }}
      data-label='Card wrapped in a Theme Provider'
    >
      <ThemedCard />
    </Scene>
    <Scene
      style={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        left: 708,
        top: 1060,
        position: 'absolute',
      }}
      data-label='Card wrapped in multiple Theme Providers'
    >
      <MultipleProvidersCard />
    </Scene>
  </Storyboard>
)
