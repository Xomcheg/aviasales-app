import React from 'react'
import { connect } from 'react-redux'

import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator/error-indicator'
import * as actions from '../actions/actions'

import FilterResultItem from './filter-result-item'
import filterResult from './filter-result.module.scss'

function FilterResult({ state }) {
  const { displayTickets, loading, error, errorText } = state
  const elements = displayTickets.map((item) => {
    const newItem = <FilterResultItem props={item} />
    return newItem
  })
  console.log('loading', displayTickets.length)
  const message = <div className={filterResult.message}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  const errorMessage = <ErrorIndicator message={errorText} />
  const spinnerDisplay = loading && !error ? <Spinner /> : null
  const messageDisplay = spinnerDisplay || error || displayTickets.length !== 0 ? null : message
  const errorDisplay = error ? errorMessage : null
  return (
    // еуые
    <div>
      {errorDisplay}
      {spinnerDisplay}
      {elements}
      {messageDisplay}
    </div>
  )
}

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps, actions)(FilterResult)
