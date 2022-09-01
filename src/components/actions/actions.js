export const btnAll = () => ({ type: 'btnAll' })
// export const isAllCheckbox = () => ({ type: 'isAllCheckbox' })
export const nonStop = () => ({ type: 'nonStop' })
export const oneTransplants = () => ({ type: 'oneTransplants' })
export const twoTransplants = () => ({ type: 'twoTransplants' })
export const thriTransplants = () => ({ type: 'thriTransplants' })
export const checkFilterCheckbox = () => ({ type: 'checkFilterCheckbox' })
export const btnSort = (btnName) => ({ type: 'btnSort', sortName: btnName })
export const loadingStatus = (status) => ({ type: 'loadingStatus', payload: status })
export const getTicketsData = (arr) => ({ type: 'getTicketsData', payload: arr })
export const getTickets = () => (dispatch) => {
  dispatch(loadingStatus(true))
  // let id = ''
  async function getTicket() {
    const id = await fetch('https://front-test.dev.aviasales.ru/search').then((res) => res.json())
    // .then((body) => body)
    // // .then((body) => fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${body.searchId}`))
    // // .then((res) => res.json())
    // // .then((body) => {
    // //   console.log('body', body)
    // //   const newTicketsArr = []
    // //   for (let i = 0; i < 5; i += 1) {
    // //     newTicketsArr.push(body.tickets[i])
    // //   }
    // //   dispatch(getTicketsData(newTicketsArr))
    // //   dispatch(loadingStatus(false))
    // // })
    // .then((body) => body.searchId)
    console.log('id', id.searchId)
    let response
    let result = []
    do {
      response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id.searchId}`).then((res) =>
        res.json()
      )
      console.log('response', response)
    } while (!response.stop)
  }
  getTicket()
}
