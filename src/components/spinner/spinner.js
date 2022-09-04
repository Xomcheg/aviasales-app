import React from 'react'
import { Spin } from 'antd'

import spinner from './spinner.module.css'
import 'antd/dist/antd.css'

function Spinner() {
  return (
    <div className={spinner.example}>
      <Spin size="large" />
      <div className={spinner.spinner__text}>загружаем билеты</div>
    </div>
  )
}

export default Spinner
