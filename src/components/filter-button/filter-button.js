import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

import filterButton from './filter-button.module.scss'

function FilterButton({ state, btnSort }) {
  const { sortName, sortBtnData } = state
  let id = 200
  const elements = sortBtnData.map((item) => {
    const btnSortName = item.toLowerCase()
    const classes = [filterButton.filterButton__btn]
    if (sortName.toLowerCase() === btnSortName) {
      classes.push(filterButton['filterButton__btn--active'])
    }
    const newItem = (
      <button key={(id += 1)} className={classes.join(' ')} type="button" onClick={() => btnSort(btnSortName)}>
        {item}
      </button>
    )
    return newItem
  })
  return <div className={filterButton.filterButton__box}>{elements}</div>
}

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps, actions)(FilterButton)
