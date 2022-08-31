import React from 'react'

import NumberOfTransfers from '../number-of-transfers'
import FilterButton from '../filter-button/filter-button'
import FilterResult from '../filter-result/filter-result'
import aviasalesLogo from '../../images/aviasales-logo.png'

import app from './app.module.scss'

function App() {
  // const [ticketsArr, setticketsRequestSearchId] = useState(null)

  // useEffect(() => {
  //   console.log('useEffect')
  //   fetch('https://front-test.dev.aviasales.ru/search')
  //     .then((res) => res.json())
  //     .then((body) => body)
  //     .then((body) => fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${body.searchId}`))
  //     .then((res) => res.json())
  //     .then((body) => setticketsRequestSearchId(body.tickets))
  // }, [])
  // console.log(ticketsArr)

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
