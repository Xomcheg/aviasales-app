export const btnAll = () => ({ type: 'btnAll' })
export const nonStop = () => ({ type: 'nonStop' })
export const oneTransplants = () => ({ type: 'oneTransplants' })
export const twoTransplants = () => ({ type: 'twoTransplants' })
export const threeTransplants = () => ({ type: 'threeTransplants' })
export const checkFilterCheckbox = () => ({ type: 'checkFilterCheckbox' })
export const btnSort = (btnName) => ({ type: 'btnSort', sortName: btnName })
export const addFiveTickets = () => ({ type: 'addFiveTickets' })

export const loadingStatus = (status) => ({ type: 'loadingStatus', payload: status })
export const errorStatus = (status, text) => ({ type: 'errorStatus', payload: status, message: text })
export const getTicketsData = (arr) => ({ type: 'getTicketsData', payload: arr })
export const getTickets = () => (dispatch) => {
  dispatch(loadingStatus(true))
  async function getAllTickets() {
    const id = await fetch('https://front-test.dev.aviasales.ru/search').then((res) => {
      if (!res.ok) {
        dispatch(errorStatus(true, 'Ошибка при получении ключа searchId'))
        console.log('error')
      }
      return res.json()
    })
    let json
    let response
    let counter = 0
    do {
      // eslint-disable-next-line no-await-in-loop
      response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id.searchId}`)
      if (response.ok) {
        // eslint-disable-next-line no-await-in-loop
        json = await response.json()
        dispatch(getTicketsData(json.tickets))
        if (json.stop) {
          dispatch(loadingStatus(false))
        }
      }
      if (!response.ok) {
        counter += 1
        if (counter === 10) {
          dispatch(errorStatus(true, 'Превышено количество попыток обращения к серверу'))
          return
        }
      }
    } while (!response.ok || !json.stop)
  }
  getAllTickets()
}
