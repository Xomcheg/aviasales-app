const reducer = (state, action) => {
  function checkAllCheckbox(btn) {
    const newFilterBtn = Object.entries(btn)
    const isAll = newFilterBtn.every((item) => item[1] === true) // проверяем выбраны ли все кнопки
    return isAll
  }

  if (state === undefined) {
    return {
      isAllCheckbox: false, // проверяем все ли checkbox выбраны
      allTransplants: false, // все пункты сортировки checkbox
      filterBtn: {
        nonStop: false, // без пересадок
        oneTransplants: true, // одна пересадка
        twoTransplants: false, // две  пересадки
        thriTransplants: true, // три пересадки
      },
    }
  }

  if (action.type === 'btnAll') {
    const { allTransplants } = state
    const { filterBtn } = state
    const value = !allTransplants
    // определяю значение кнопки "все", инвертирую ее и затем проверяю остальные чекбоксы
    // если значение чекбокса не равно value то переопределяю его на value

    const newFilterBtn = Object.entries(filterBtn)
    const removeNewFilterBtnValue = newFilterBtn.map((item) => {
      const newItem = item
      if (newItem[1] !== value) {
        newItem[1] = value
        return newItem
      }
      return newItem
    })
    const newState = { ...state, allTransplants: value, filterBtn: Object.fromEntries(removeNewFilterBtnValue) }
    return {
      ...newState,
    }
  }

  if (action.type === 'nonStop') {
    const { filterBtn } = state
    const newFilterBtn = { ...filterBtn, nonStop: !filterBtn.nonStop }
    const isAll = checkAllCheckbox(newFilterBtn)
    const newState = { ...state, allTransplants: isAll, filterBtn: newFilterBtn }
    return {
      ...newState,
    }
  }

  if (action.type === 'oneTransplants') {
    const { filterBtn } = state
    const newFilterBtn = { ...filterBtn, oneTransplants: !filterBtn.oneTransplants }
    const isAll = checkAllCheckbox(newFilterBtn)
    const newState = { ...state, allTransplants: isAll, filterBtn: newFilterBtn }
    return {
      ...newState,
    }
  }

  if (action.type === 'twoTransplants') {
    const { filterBtn } = state
    const newFilterBtn = { ...filterBtn, twoTransplants: !filterBtn.twoTransplants }
    const isAll = checkAllCheckbox(newFilterBtn)
    const newState = { ...state, allTransplants: isAll, filterBtn: newFilterBtn }
    return {
      ...newState,
    }
  }

  if (action.type === 'thriTransplants') {
    const { filterBtn } = state
    const newFilterBtn = { ...filterBtn, thriTransplants: !filterBtn.thriTransplants }
    const isAll = checkAllCheckbox(newFilterBtn)
    const newState = { ...state, allTransplants: isAll, filterBtn: newFilterBtn }
    return {
      ...newState,
    }
  }
  return state
}

export default reducer
