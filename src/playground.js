import '../public/globals.css'
import { Button } from './button.js'
import { GridCard, Ratings } from '/src/grid-card.js'
import { ListCard } from '/src/list-card.js'

import {
  SwitchHorizontalIcon,
  ViewGridIcon,
  ViewListIcon,
} from '@heroicons/react/solid'

export var Playground = () => {
  return (
    <>
      <span
        style={{
          fontSize: '40px',
          fontWeight: 700,
          fontStyle: 'normal',
          position: 'absolute',
          left: 13,
          top: 5,
          height: 71,
        }}
      >
        Beaches!
      </span>
      <span
        style={{
          color: 'rgb(0, 0, 0, 0.5)',
          fontSize: '16px',
          position: 'absolute',
          left: 238,
          top: 641,
        }}
      >
        Featured
      </span>
      <GridCard
        name='La Digue'
        country='Seychelles'
        image='https://source.unsplash.com/jPmurJKSL_0/600x800'
        rating={5}
        style={{
          width: '54%',
          position: 'absolute',
          left: 301,
          top: 262,
          height: 352,
        }}
      />
      <ListCard
        name='La Digue'
        country='Seychelles'
        image='https://source.unsplash.com/jPmurJKSL_0/600x800'
        rating={5}
        style={{
          position: 'absolute',
          width: '68.8%',
          left: 62,
          top: 121,
          bottom: 550,
        }}
      />
      <Button
        style={{ position: 'absolute', left: 35, top: 262 }}
        icon={
          <SwitchHorizontalIcon
            style={{
              width: '45px',
              color: 'white',
            }}
          />
        }
      />
      <Button
        style={{ position: 'absolute', left: 10, top: 180 }}
        icon={
          <ViewGridIcon
            style={{ width: 15, color: 'white' }}
          />
        }
      />
      <Button
        style={{ position: 'absolute', left: 10, top: 213 }}
        icon={
          <ViewListIcon
            style={{ width: 15, color: 'white' }}
          />
        }
      />
      <div
        style={{
          width: '200px',
          height: 258,
          position: 'absolute',
          backgroundColor: '#FFF8DE',
          left: 52,
          top: 362,
        }}
      >
        <img
          src='https://source.unsplash.com/jPmurJKSL_0/600x800'
          style={{
            width: '180px',
            position: 'absolute',
            left: -35,
            top: 102,
            height: -41,
            boxShadow: '2px 2px 6px 4px rgb(0, 0, 0, 0.12)',
          }}
          alt='beach'
        />
        <div
          style={{
            position: 'absolute',
            fontSize: '18px',
            fontWeight: 700,
            fontStyle: 'normal',
            left: 5,
            top: 8,
          }}
        >
          La Digue
        </div>
        <div
          style={{
            position: 'absolute',
            fontStyle: 'italic',
            left: 5,
            top: 30,
          }}
        >
          Seychelles
        </div>
        <Ratings
          rating={5}
          style={{
            position: 'absolute',
            left: 120,
            top: 186,
            transform: 'rotate(90deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            color: 'rgb(0, 0, 0, 0.5)',
            fontFamily: 'ITC Garamond Std',
            fontStyle: 'italic',
            left: 7,
            top: 76,
          }}
        >
          August 9th, 1924
        </div>
      </div>
      <span
        style={{
          fontSize: '40px',
          fontWeight: 700,
          fontStyle: 'normal',
          position: 'absolute',
          left: 194,
          top: 41,
          height: 71,
          fontFamily: 'ITC Garamond Std',
        }}
      >
        ...Beaches?
      </span>
      <span
        style={{
          fontSize: '40px',
          fontWeight: 700,
          fontStyle: 'normal',
          position: 'absolute',
          left: 442,
          top: 41,
          height: 71,
          fontFamily: 'ITC Garamond Std',
        }}
      >
        Find Your Beach
      </span>
      <span
        style={{
          color: 'rgb(0, 0, 0, 1)',
          fontSize: '16px',
          position: 'absolute',
          left: 238,
          top: 669,
        }}
      >
        Featured
      </span>
      <span
        style={{
          color: 'rgb(0, 0, 0, 1)',
          fontSize: '20px',
          fontFamily: 'ITC Garamond Std',
          position: 'absolute',
          left: 238,
          top: 695,
        }}
      >
        Featured
      </span>
    </>
  )
}
