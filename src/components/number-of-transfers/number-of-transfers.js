import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

import numberOfTransfers from './number-of-transfers.module.scss'

function NumberOfTransfers({ btnAll, state, test1 }) {
  console.log('component', state, btnAll, test1)
  const { allTransplants, nonStop, oneTransplants, twoTransplants, thriTransplants } = state.filterBtn
  return (
    <div className={numberOfTransfers.numberOfTransfers}>
      <div className={numberOfTransfers.numberOfTransfers__title}>Количество пересадок</div>
      <div className={numberOfTransfers.numberOfTransfers__box}>
        <label className={numberOfTransfers.numberOfTransfers__text} htmlFor="all">
          <input
            className={numberOfTransfers.numberOfTransfers__btn}
            id="all"
            type="checkbox"
            checked={allTransplants}
            readOnly
            onClick={btnAll}
          />
          <span className={numberOfTransfers['numberOfTransfers__btn--checked']} />
          Все
        </label>
        <label className={numberOfTransfers.numberOfTransfers__text} htmlFor="non-stop">
          <input
            className={numberOfTransfers.numberOfTransfers__btn}
            id="non-stop"
            type="checkbox"
            readOnly
            checked={nonStop}
          />
          <span className={numberOfTransfers['numberOfTransfers__btn--checked']} />
          Без пересадок
        </label>
        <label className={numberOfTransfers.numberOfTransfers__text} htmlFor="one-change">
          <input
            className={numberOfTransfers.numberOfTransfers__btn}
            id="one-change"
            type="checkbox"
            readOnly
            checked={oneTransplants}
          />
          <span className={numberOfTransfers['numberOfTransfers__btn--checked']} />1 пересадка
        </label>
        <label className={numberOfTransfers.numberOfTransfers__text} htmlFor="two-change">
          <input
            className={numberOfTransfers.numberOfTransfers__btn}
            id="two-change"
            type="checkbox"
            readOnly
            checked={twoTransplants}
          />
          <span className={numberOfTransfers['numberOfTransfers__btn--checked']} />2 пересадки
        </label>
        <label className={numberOfTransfers.numberOfTransfers__text} htmlFor="three-change">
          <input
            className={numberOfTransfers.numberOfTransfers__btn}
            id="three-change"
            type="checkbox"
            readOnly
            checked={thriTransplants}
          />
          <span className={numberOfTransfers['numberOfTransfers__btn--checked']} />3 пересадки
        </label>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({ counter: state })
const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps, actions)(NumberOfTransfers)
