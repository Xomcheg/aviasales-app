import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import NumberOfTransfers from '../number-of-transfers'
import FilterButton from '../filter-button/filter-button'
import FilterResult from '../filter-result/filter-result'
import aviasalesLogo from '../../images/aviasales-logo.png'

import app from './app.module.scss'

function App({ addFiveTickets }) {
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
      <div className={app.aviaseles__btn}>
        <button className={app.aviaseles__button} type="button" onClick={addFiveTickets}>
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state,
})

// export default App
export default connect(mapStateToProps, actions)(App)
