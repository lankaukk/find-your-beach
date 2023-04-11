import { GridCard } from './grid-card.js'
import { TwoColumnGrid } from './utils'

export var GridView = (props) => {
  return (
    <div style={{ overflow: 'scroll', height: '100%' }}>
      <span
        style={{
          color: 'rgb(0, 0, 0, 0.5)',
          fontSize: '16px',
        }}
      >
        Featured
      </span>
      <TwoColumnGrid
        className='gridcardcontainer'
        style={{ marginTop: 8, gap: 8 }}
      >
        {props.cards.map((beach) => (
          <GridCard
            key={beach.name}
            name={beach.name}
            country={beach.country}
            image={beach.image}
            rating={beach.rating}
          />
        ))}
      </TwoColumnGrid>
    </div>
  )
}
