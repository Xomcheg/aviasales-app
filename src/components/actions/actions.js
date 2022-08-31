export const btnAll = () => ({ type: 'btnAll' })
// export const isAllCheckbox = () => ({ type: 'isAllCheckbox' })
export const nonStop = () => ({ type: 'nonStop' })
export const oneTransplants = () => ({ type: 'oneTransplants' })
export const twoTransplants = () => ({ type: 'twoTransplants' })
export const thriTransplants = () => ({ type: 'thriTransplants' })
export const checkFilterCheckbox = () => ({ type: 'checkFilterCheckbox' })
export const btnSort = (btnName) => ({ type: 'btnSort', sortName: btnName })

export const getTicketsData = (number) => ({ type: 'getTicketsData', payload: number })
export const getTickets = (number) => (dispatch) => {
  dispatch(getTicketsData(number))
}
// { type: 'asyncBtn', asyncTest: number }
