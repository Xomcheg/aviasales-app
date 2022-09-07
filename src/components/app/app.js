import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import NumberOfTransfers from '../number-of-transfers'
import FilterButton from '../filter-button/filter-button'
import FilterResult from '../filter-result/filter-result'
import aviasalesLogo from '../../images/aviasales-logo.png'

import app from './app.module.scss'

function App({ addFiveTickets, state }) {
  const { displayTickets, loading, error } = state
  const button = (
    <button className={app.aviaseles__button} type="button" onClick={addFiveTickets}>
      Показать еще 5 билетов!
    </button>
  )
  const buttonDisplay = loading || error || displayTickets.length === 0 ? null : button
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
      <div className={app.aviaseles__btn}>{buttonDisplay}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps, actions)(App)
