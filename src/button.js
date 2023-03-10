/** @jsx jsx */
import { jsx } from '@emotion/react'

const theme = {
  colors: {
    primaryBlue: '#93D9FF',
    darkBlue: '#2ab4ff',
  },
}

export var Button = ({ selected, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      css={{
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgb(0, 0, 0, 0.12)',
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': { opacity: 0.7 },
      }}
      style={{
        ...buttonProps.style,
        color: 'white',
        backgroundColor: selected
          ? theme.colors.darkBlue
          : theme.colors.primaryBlue,
      }}
    >
      {buttonProps.icon}
    </button>
  )
}
