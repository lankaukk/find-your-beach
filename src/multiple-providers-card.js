/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import * as React from 'react'
import { SimpleCard } from '/src/simple-card.js'

export var MultipleProvidersCard = () => {
  const theme = {
    colors: {
      primary: '#685B38',
      secondary: 'white',
    },
    spacing: {
      primary: '10px',
    },
  }

  const theme2022 = {
    spacing: {
      primary: '20px',
    },
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={theme2022}>
          <SimpleCard label='Seychelles' title='La Digue'>
            <img
              src='https://source.unsplash.com/jPmurJKSL_0/600x800'
              style={{ width: '100%' }}
              alt='beach'
            />
            <div
              css={(theme) => ({
                color: theme.colors.primary,
                backgroundColor: theme.colors.secondary,
                padding: theme.spacing.primary,
              })}
              style={{
                fontFamily: 'ITC Garamond',
                fontSize: '14pt',
              }}
            >
              La Digue, Seychelles
            </div>
          </SimpleCard>
        </ThemeProvider>
      </ThemeProvider>
    </>
  )
}
