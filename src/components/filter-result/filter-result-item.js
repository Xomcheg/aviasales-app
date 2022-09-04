import React from 'react'

import airlineLogo from '../../images/airlines-logo.png'

import filterResult from './filter-result.module.scss'

function FilterResultItem({ props }) {
  const { price, segments } = props
  const there = segments[0]
  const { origin: thereOrigin, destination: thereDestination, duration: thereDuration, stops: thereStops } = there
  const back = segments[1]
  const { origin: backOrigin, destination: backDestination, duration: backDuration, stops: backStops } = back
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
  if (backStops.length === 0) {
    backStopsTitle = 'Без пересадок'
  } else if (backStops.length === 1) {
    backStopsTitle = 'Пересадка'
  } else if (backStops.length >= 2 && backStops.length <= 4) {
    backStopsTitle = 'Пересадки'
  } else {
    backStopsTitle = 'Пересадок'
  }

  // const thereDateNew = new Date(thereDate)
  // const thereDateRes = [thereDateNew.getHours(), thereDateNew.getMinutes()].map

  // console.log('thereDate', thereDateRes)

  const thereHour = Math.floor(thereDuration / 60)
  const thereMin = thereDuration - thereHour * 60

  const backHour = Math.floor(backDuration / 60)
  const backMin = backDuration - backHour * 60

  // const thereStopsData = thereStops.join(', ')
  // console.log('thereStopsData', thereStopsData)
  // console.log('props', props)

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
            <div className={filterResult['ticket__box-flight']}>
              {thereHour}ч {thereMin}м
            </div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {thereStops.length === 0 ? null : thereStops.length} {thereStopsTitle}
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
            <div className={filterResult['ticket__box-flight']}>
              {backHour}ч {backMin}м
            </div>
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
