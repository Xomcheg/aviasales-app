import React from 'react'

import filterButton from './filter-button.module.scss'

function FilterButton() {
  const classes = [filterButton.filterButton__btn]
  classes.push(filterButton['filterButton__btn--active'])
  return (
    <div className={filterButton.filterButton__box}>
      <button className={classes.join(' ')} type="button">
        Самый дешевый
      </button>
      <button className={filterButton.filterButton__btn} type="button">
        Самый быстрый
      </button>
      <button className={filterButton.filterButton__btn} type="button">
        Оптимальный
      </button>
    </div>
  )
}

export default FilterButton
