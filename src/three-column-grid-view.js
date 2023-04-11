import { GridCard } from './grid-card.js'
import { ThreeColumnGrid } from './utils'

export var ThreeColumnGridView = (props) => {
  return (
    <div style={{ overflow: 'scroll' }}>
      <ThreeColumnGrid
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
      </ThreeColumnGrid>
    </div>
  )
}
