const reducer = (state, action) => {
  function checkAllCheckbox(btns) {
    // передаю в качестве параметра btns, состояние чекбоксов после того как пользователь кликнул по чекбоксу
    const newFilterBtn = Object.entries(btns)
    const isAll = newFilterBtn.every((item) => item[1] === true) // проверяем выбраны ли все кнопки
    return isAll
  }

  function refreshCheckboxState(btn) {
    const { filterBtn } = state
    const newFilterBtn = { ...filterBtn, [btn]: !filterBtn[btn] }
    const isAll = checkAllCheckbox(newFilterBtn)
    return { ...state, allTransplants: isAll, filterBtn: newFilterBtn }
  }

  if (state === undefined) {
    return {
      sortName: 'Самый дешевый',
      sortBtnData: ['Самый дешевый', 'Самый быстрый', 'Оптимальный'],
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
    const newState = refreshCheckboxState('nonStop')
    return {
      ...newState,
    }
  }

  if (action.type === 'oneTransplants') {
    const newState = refreshCheckboxState('oneTransplants')
    return {
      ...newState,
    }
  }

  if (action.type === 'twoTransplants') {
    const newState = refreshCheckboxState('twoTransplants')
    return {
      ...newState,
    }
  }

  if (action.type === 'thriTransplants') {
    const newState = refreshCheckboxState('thriTransplants')
    return {
      ...newState,
    }
  }

  if (action.type === 'btnSort') {
    console.log('sort', action.sortName)
    const newState = { ...state, sortName: action.sortName }
    return {
      ...newState,
    }
  }
  return state
}

export default reducer
