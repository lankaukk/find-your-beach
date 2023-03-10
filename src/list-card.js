import * as React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { FlexRow, TwoColumnGrid } from './utils'

export function Ratings(props) {
  return (
    <FlexRow style={{ justifyContent: 'flex-start' }}>
      {Array.from({ length: props.rating ?? 1 }).map(
        (_, i) => {
          return (
            <StarIcon
              key={i}
              style={{ width: 20, color: 'orange' }}
            />
          )
        },
      )}
    </FlexRow>
  )
}

export var ListCard = (props) => {
  return (
    <TwoColumnGrid
      className='listcard'
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '0px 2px 4px rgb(0, 0, 0, 0.12)',
        overflow: 'hidden',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: '18px',
          fontWeight: 700,
          padding: 8,
          paddingBottom: 4,
        }}
      >
        {props.name}
        <div
          style={{
            color: 'rgb(0, 0, 0, 0.5)',
            fontFamily: 'ITC Garamond Std',
            fontStyle: 'italic',
          }}
        >
          {props.country}
          <Ratings rating={props.rating} />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </TwoColumnGrid>
  )
}
