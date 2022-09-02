export const btnAll = () => ({ type: 'btnAll' })
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
  const packegeTicketsArr = []
  async function getPackegeId() {
    const id = await fetch('https://front-test.dev.aviasales.ru/search').then((res) => res.json())
    console.log('firstId', id)
    async function getPackegeTicket(ids) {
      const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${ids}`).then((res) =>
        res.json()
      )
      console.log('firstResponse', response)
      if (!response.stop) {
        packegeTicketsArr.push(response)
        getPackegeTicket(ids)
      }
      console.log('packegeTicketsArr', packegeTicketsArr)
      return response
    }
    getPackegeTicket(id.searchId)
    // const response = getPackegeTicket(id.searchId)
    // packegeTicketsArr.push(response)
    // if (!response.stop) {
    //   getPackegeId()
    // }
    // console.log('secondRespose', response)
  }

  getPackegeId()

  //   // .then((body) => body)
  //   // // .then((body) => fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${body.searchId}`))
  //   // // .then((res) => res.json())
  //   // // .then((body) => {
  //   // //   console.log('body', body)
  //   // //   const newTicketsArr = []
  //   // //   for (let i = 0; i < 5; i += 1) {
  //   // //     newTicketsArr.push(body.tickets[i])
  //   // //   }
  //   // //   dispatch(getTicketsData(newTicketsArr))
  //   // //   dispatch(loadingStatus(false))
  //   // // })
  //   // .then((body) => body.searchId)
  //   console.log('id', id.searchId)
  //   let response
  //   let result = []
  //   do {
  //     response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id.searchId}`).then((res) =>
  //       res.json()
  //     )
  //     console.log('response', response)
  //   } while (!response.stop)
  // }
  // async function getPackegeTickets() {
  //   const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${body.searchId}`).then((res) => res.json())
  //   return response
  // }
  // getPackegeId()
}
