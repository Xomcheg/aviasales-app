import React from 'react'

import airlineLogo from '../../images/airlines-logo.png'

import filterResult from './filter-result.module.scss'

function FilterResult() {
  return (
    <div className={filterResult.ticket}>
      <div className={filterResult.ticket__header}>
        <div className={filterResult.ticket__price}>13 400 Р</div>
        <div className={filterResult.ticket__logo}>
          <img src={airlineLogo} alt="logo" />
        </div>
      </div>
      <div className={filterResult.ticket__info}>
        <div className={filterResult.ticket__from}>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>MOW - HKT</div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>В пути</div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>пересадки</div>
            <div className={filterResult['ticket__box-flight']}>Места пересадок</div>
          </div>
        </div>
        <div className={filterResult.ticket__to}>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>MOW - HKT</div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>В пути</div>
            <div className={filterResult['ticket__box-flight']}>time</div>
          </div>
          <div className={filterResult.ticket__box}>
            <div className={filterResult['ticket__box-title']}>пересадки</div>
            <div className={filterResult['ticket__box-flight']}>Места пересадок</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterResult
