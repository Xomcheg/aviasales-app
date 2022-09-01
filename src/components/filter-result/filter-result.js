import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

import FilterResultItem from './filter-result-item'

// import airlineLogo from '../../images/airlines-logo.png'

// import filterResult from './filter-result.module.scss'

function FilterResult({ state }) {
  const { tickets } = state
  console.log('tickets', tickets)
  const elements = tickets.map((item) => {
    const newItem = <FilterResultItem props={item} />
    return newItem
  })
  console.log('elements', elements)
  return (
    // еуые
    <div>{elements}</div>
  )
}

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps, actions)(FilterResult)
