import { ListCard } from './list-card.js'
import { FlexCol } from './utils'

export var ListView = (props) => {
  return (
    <div style={{ overflow: 'scroll' }}>
      <span
        style={{
          color: 'rgb(0, 0, 0, 0.5)',
          fontSize: '16px',
        }}
      >
        Featured
      </span>
      <FlexCol
        className='listcardcontainer'
        style={{ marginTop: 8, gap: 8 }}
      >
        {props.cards.map((beach) => (
          <ListCard
            key={beach.name}
            name={beach.name}
            country={beach.country}
            image={beach.image}
            rating={beach.rating}
          />
        ))}
      </FlexCol>
    </div>
  )
}
