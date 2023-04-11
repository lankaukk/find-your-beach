import { useState, useCallback } from 'react'
import '../public/globals.css'
import { Button } from './button.js'
import { GridView } from './grid-view.js'
import { ListView } from './list-view.js'
import { FlexCol } from './utils'

import { beaches } from '../public/data.js'

import {
  SwitchHorizontalIcon,
  ViewGridIcon,
  ViewListIcon,
} from '@heroicons/react/solid'

const PROJECT_ID = 'ez1bx506'
const DATASET = 'production'
const QUERY = encodeURIComponent('*[_type == "beach"]')

const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

export var App = () => {
  const [displayedBeaches, setDisplayedBeaches] = useState(
    beaches,
  )

  const [liveData, setLiveData] = useState(false)
  const useLiveData = () => {
    if (liveData === false) {
      setDisplayedBeaches([])
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
      setLiveData(true)
    } else {
      setDisplayedBeaches(beaches)
      setLiveData(false)
    }
  }

  const handleShuffle = useCallback(() => {
    setDisplayedBeaches((beaches) =>
      [...beaches].sort(() => Math.random() - 0.5),
    )
  }, [])

  const [gridView, setGrid] = useState(false)
  const toggleGrid = useCallback(
    () => setGrid((grid) => !grid),
    [],
  )

  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        padding: 8,
        gap: 8,
        background: 'white',
        backgroundColor: '#e5e78c',
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
            onClick={useLiveData}
            icon='Live Data'
            selected={liveData}
            unClickedState
          />
          <Button
            onClick={handleShuffle}
            icon={
              <SwitchHorizontalIcon
                style={{ width: 15, color: 'white' }}
              />
            }
          />
          <div style={{ display: 'flex', gap: 3 }}>
            <Button
              onClick={toggleGrid}
              icon={
                <ViewGridIcon
                  style={{ width: 15, color: 'white' }}
                />
              }
              selected={gridView}
              style={{ flexBasis: 0 }}
            />
            <Button
              onClick={toggleGrid}
              icon={
                <ViewListIcon
                  style={{ width: 15, color: 'white' }}
                />
              }
              selected={!gridView}
              unClickedState
            />
          </div>
        </div>
      </div>
      {gridView ? (
        <GridView cards={displayedBeaches} />
      ) : (
        <ListView cards={displayedBeaches} />
      )}
    </FlexCol>
  )
}
