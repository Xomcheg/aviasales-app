import React from 'react'

import airlineLogo from '../../images/airlines-logo.png'

import filterResult from './filter-result.module.scss'

function FilterResultItem({ props }) {
  const { price, segments } = props

  const there = segments[0]
  const {
    origin: thereOrigin,
    destination: thereDestination,
    duration: thereDuration,
    date: thereDate,
    stops: thereStops,
  } = there

  const back = segments[1]
  const {
    origin: backOrigin,
    destination: backDestination,
    duration: backDuration,
    date: backDate,
    stops: backStops,
  } = back

  function timing(date, duration) {
    const newDate = new Date(date)
    const hours = newDate.getHours()
    const minutes = newDate.getMinutes()
    const arrivalTime = hours * 60 + minutes + duration
    const arrivalTimeHours = Math.floor(arrivalTime / 60)
    const arrivalTimeMinutes = arrivalTime - arrivalTimeHours * 60
    const newArrivalHours = arrivalTimeHours >= 24 ? arrivalTimeHours - 24 : arrivalTimeHours
    const startTime = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    const finishTime = `${newArrivalHours < 10 ? `0${newArrivalHours}` : newArrivalHours}:${
      arrivalTimeMinutes < 10 ? `0${arrivalTimeMinutes}` : arrivalTimeMinutes
    }`
    return `${startTime} - ${finishTime}`
  }

  function renameStopsTitle(nameStops) {
    let text = ''
    if (nameStops.length === 0) {
      text = 'Без пересадок'
    } else if (nameStops.length === 1) {
      text = 'Пересадка'
    } else if (nameStops.length >= 2 && nameStops.length <= 4) {
      text = 'Пересадки'
    } else {
      text = 'Пересадок'
    }
    return text
  }

  function transformDuration(time) {
    const hour = Math.floor(time / 60)
    const min = time - hour * 60
    return `${hour} ч ${min} м`
  }

  return (
    <div className={filterResult.ticket}>
      <div className={filterResult.ticket__header}>
        <div className={filterResult.ticket__price}>
          {String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} Р
        </div>
        <div className={filterResult.ticket__logo}>
          <img src={airlineLogo} alt="logo" />
        </div>
      </div>
      <div className={filterResult.ticket__info}>
        <div className={filterResult.ticket__wrapper}>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {thereOrigin} - {thereDestination}
            </div>
            <div className={filterResult['ticket__box-flight']}>{timing(thereDate, thereDuration)}</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {backOrigin} - {backDestination}
            </div>
            <div className={filterResult['ticket__box-flight']}>{timing(backDate, backDuration)}</div>
          </div>
        </div>

        <div className={filterResult.ticket__wrapper}>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>В пути</div>
            <div className={filterResult['ticket__box-flight']}>{transformDuration(thereDuration)}</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>В пути</div>
            <div className={filterResult['ticket__box-flight']}>{transformDuration(backDuration)}</div>
          </div>
        </div>

        <div className={filterResult.ticket__wrapper}>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {thereStops.length === 0 ? null : thereStops.length} {renameStopsTitle(thereStops)}
            </div>
            <div className={filterResult['ticket__box-flight']}>
              {thereStops.join(', ').length === 0 ? (
                <span className={filterResult['ticket__box-stops']}>-</span>
              ) : (
                thereStops.join(', ')
              )}
            </div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>
              {backStops.length === 0 ? null : backStops.length} {renameStopsTitle(backStops)}
            </div>
            <div className={filterResult['ticket__box-flight']}>
              {backStops.join(', ').length === 0 ? (
                <span className={filterResult['ticket__box-stops']}>-</span>
              ) : (
                backStops.join(', ')
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterResultItem
