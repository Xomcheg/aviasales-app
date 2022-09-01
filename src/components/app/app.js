import React from 'react'

import NumberOfTransfers from '../number-of-transfers'
import FilterButton from '../filter-button/filter-button'
import FilterResult from '../filter-result/filter-result'
import aviasalesLogo from '../../images/aviasales-logo.png'

import app from './app.module.scss'

function App() {
  return (
    <div className={app.container}>
      <div className={app.aviaseles__logo}>
        <a href="index.html">
          <img src={aviasalesLogo} alt="logo" />
        </a>
      </div>
      <div className={app.aviaseles__inner}>
        <NumberOfTransfers />
        <div className={app.aviaseles__wrapper}>
          <FilterButton />
          <FilterResult />
        </div>
      </div>
      <button className={app.aviaseles__button} type="button">
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default App
