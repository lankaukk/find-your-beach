import { useState, useEffect, useCallback } from 'react'
import '../public/globals.css'
import { Button } from './button.js'
import { FlexCol } from './utils'
import { ThreeColumnGridView } from '/src/three-column-grid-view.js'

import { SwitchHorizontalIcon } from '@heroicons/react/solid'

const PROJECT_ID = 'ez1bx506'
const DATASET = 'production'
const QUERY = encodeURIComponent('*[_type == "beach"]')

const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

export var App2 = () => {
  const [displayedBeaches, setDisplayedBeaches] = useState(
    [],
  )

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result.length > 0) {
          result.forEach((beach) => {
            setDisplayedBeaches((oldArray) => [
              ...oldArray,
              beach,
            ])
          })
        }
      })
      .catch((err) => console.error(err))
  }, [])

  const handleShuffle = useCallback(() => {
    setDisplayedBeaches((beaches) =>
      [...beaches].sort(() => Math.random() - 0.5),
    )
  }, [])

  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        padding: 8,
        gap: 8,
        background: 'white',
      }}
    >
      <div
        className='appheadercontainer'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 70,
        }}
      >
        <h1
          className='apptitle'
          style={{
            fontFamily: 'ITC Garamond Std',
            fontWeight: 700,
            margin: 0,
          }}
        >
          Find Your Beach
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 15,
          }}
        >
          <Button
            onClick={handleShuffle}
            icon={
              <SwitchHorizontalIcon
                style={{ width: 15, color: 'white' }}
              />
            }
          />
        </div>
      </div>
      <ThreeColumnGridView cards={displayedBeaches} />
    </FlexCol>
  )
}
