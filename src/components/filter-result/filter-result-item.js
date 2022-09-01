import React from 'react'

import airlineLogo from '../../images/airlines-logo.png'

import filterResult from './filter-result.module.scss'

function FilterResultItem({ props }) {
  const { price, segments } = props
  //   const { [segments[0]]: there, [segments[1]]: back } = segments
  const there = segments[0]
  const { origin: thereOrigin, destination: thereDestination, date: thereDate, stops: thereStops } = there
  const back = segments[1]
  const { origin: backOrigin, destination: backDestination, date: backDate, stops: backStops } = there
  console.log('segments', there, back)
  let thereStopsTitle = ''
  if (thereStops.length === 0) {
    thereStopsTitle = 'Без пересадок'
  } else if (thereStops.length === 1) {
    thereStopsTitle = 'Пересадка'
  } else if (thereStops.length >= 2 && thereStops.length <= 4) {
    thereStopsTitle = 'Пересадки'
  } else {
    thereStopsTitle = 'Пересадок'
  }

  let backStopsTitle = ''
  if (thereStops.length === 0) {
    backStopsTitle = 'Без пересадок'
  } else if (thereStops.length === 1) {
    backStopsTitle = 'Пересадка'
  } else if (thereStops.length >= 2 && thereStops.length <= 4) {
    backStopsTitle = 'Пересадки'
  } else {
    backStopsTitle = 'Пересадок'
  }

  const thereStopsData = thereStops.join(', ')
  console.log('thereStopsData', thereStopsData)
  console.log('props', props)

  return (
    <div className={filterResult.ticket}>
      <div className={filterResult.ticket__header}>
        <div className={filterResult.ticket__price}>{price} Р</div>
        <div className={filterResult.ticket__logo}>
          <img src={airlineLogo} alt="logo" />
        </div>
      </div>
      <div className={filterResult.ticket__info}>
        <div className={filterResult.ticket__from}>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {thereOrigin} - {thereDestination}
            </div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>В пути</div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {thereStops.length} {thereStopsTitle}
            </div>
            <div className={filterResult['ticket__box-flight']}>{thereStops.join(', ')}</div>
          </div>
        </div>
        <div className={filterResult.ticket__to}>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {backOrigin} - {backDestination}
            </div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>В пути</div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {backStops.length === 0 ? null : backStops.length} {backStopsTitle}
            </div>
            <div className={filterResult['ticket__box-flight']}>{backStops.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterResultItem
