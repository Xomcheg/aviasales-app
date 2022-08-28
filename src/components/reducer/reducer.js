const reducer = (state, action) => {
  if (state === undefined) {
    return {
      isAllCheckbox: '', // проверяем все ли checkbox выбраны
      allTransplants: false, // все пункты сортировки checkbox
      filterBtn: {
        nonStop: false, // без пересадок
        oneTransplants: false, // одна пересадка
        twoTransplants: false, // две  пересадки
        thriTransplants: false, // три пересадки
      },
    }
  }
  console.log('reducer', action, state)

  if (action.type === 'btnAll') {
    console.log('all')
    const { filterBtn } = state
    const newFilterBtn = Object.entries(filterBtn)
    const isAll = newFilterBtn.every((item) => item[1] === true) // проверяем выбраны ли все кнопки
    console.log('isAll', isAll)

    return {
      isAllCheckbox: isAll,
      filterBtn: {
        allTransplants: !state.filterBtn.allTransplants, // все пункты сортировки checkbox
        nonStop: !state.filterBtn.nonStop, // без пересадок
        oneTransplants: !state.filterBtn.oneTransplants, // одна пересадка
        twoTransplants: !state.filterBtn.twoTransplants, // две  пересадки
        thriTransplants: !state.filterBtn.thriTransplants, // три пересадк
      },
    }
  }
  return state
  //  switch (action.type) {
  //  case 'btnAll':
  //    console.log('all')

  //    return {
  //      filterBtn: {
  //        allTransplants: !state.filterBtn.allTransplants, // все пункты сортировки checkbox
  //        nonStop: !state.filterBtn.nonStop, // без пересадок
  //        oneTransplants: !state.filterBtn.oneTransplants, // одна пересадка
  //        twoTransplants: !state.filterBtn.twoTransplants, // две  пересадки
  //        thriTransplants: !state.filterBtn.thriTransplants, // три пересадк
  //        },
  //    }
  //  default:
  //    return state
  //  }
}

//const checkCheckbox = (btn) => {
//	const newBtn = Object.entries(btn)
//    const isAll = newBtn.every((item) => item[1] === true) // проверяем выбраны ли все кнопки
//	return
//}

export default reducer
