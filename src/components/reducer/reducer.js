const reducer = (state, action) => {
  if (state === undefined) {
    return {
      allTickets: [],
      filterTickets: [],
      displayTickets: [],
      counterDisplayTickets: 5,
      loading: true,
      error: false,
      errorText: '',
      sortName: 'самый дешевый',
      sortBtnData: ['Самый дешевый', 'Самый быстрый', 'Оптимальный'],
      isAllCheckbox: false, // проверяем все ли checkbox выбраны
      allTransplants: true, // все пункты сортировки checkbox
      filterBtn: {
        nonStop: true, // без пересадок
        oneTransplants: true, // одна пересадка
        twoTransplants: true, // две  пересадки
        threeTransplants: true, // три пересадки
      },
    }
  }

  const { filterBtn } = state
  let newState

  function checkAllCheckbox(btns) {
    // передаю в качестве параметра btns, состояние чекбоксов после того как пользователь кликнул по чекбоксу
    const newFilterBtn = Object.entries(btns)
    const isAll = newFilterBtn.every((item) => item[1] === true) // проверяем выбраны ли все кнопки
    return isAll
  }

  function maxConnections(buttons) {
    const set = new Set()
    const { nonStop, oneTransplants, twoTransplants, threeTransplants } = buttons
    if (threeTransplants) {
      set.add(3)
    }
    if (twoTransplants) {
      set.add(2)
    }
    if (oneTransplants) {
      set.add(1)
    }
    if (nonStop) {
      set.add(0)
    }
    return set
  }

  function processSortAction(sortName, tickets) {
    let comparator
    if (sortName === 'самый дешевый') {
      comparator = (a, b) => {
        if (a.price > b.price) {
          return 1
        }
        if (a.price < b.price) {
          return -1
        }
        return 0
      }
    }

    if (sortName === 'самый быстрый') {
      comparator = (a, b) => {
        const summFirstElemDuration = a.segments[0].duration + a.segments[1].duration
        const summSecondElemDuration = b.segments[0].duration + b.segments[1].duration
        if (summFirstElemDuration > summSecondElemDuration) {
          return 1
        }
        if (summFirstElemDuration < summSecondElemDuration) {
          return -1
        }
        return 0
      }
    }

    if (sortName === 'оптимальный') {
      comparator = (a, b) => {
        const summFirstElemDuration = a.segments[0].duration + a.segments[1].duration + a.price / 10
        const summSecondElemDuration = b.segments[0].duration + b.segments[1].duration + b.price / 10
        if (summFirstElemDuration > summSecondElemDuration) {
          return 1
        }
        if (summFirstElemDuration < summSecondElemDuration) {
          return -1
        }
        return 0
      }
    }
    return tickets.sort(comparator)
  }

  function processFilterAction(newFilterBtn, tickets = state.allTickets) {
    const { sortName } = state
    const isAll = checkAllCheckbox(newFilterBtn)

    const set = maxConnections(newFilterBtn)

    const findFilterElem = tickets.filter((item) => {
      const firstTicketStops = item.segments[0].stops.length
      const secondTicketStops = item.segments[1].stops.length
      return set.has(firstTicketStops) || set.has(secondTicketStops)
    })

    const finalTicketsArray = processSortAction(sortName, findFilterElem)

    return {
      ...state,
      filterTickets: finalTicketsArray,
      allTransplants: isAll,
      filterBtn: newFilterBtn,
      allTickets: tickets,
      displayTickets: [...finalTicketsArray.slice(0, state.counterDisplayTickets)],
    }
  }

  // function checkOnlineStatus() {
  //   const response = fetch('http://google.com')
  //   if (response.ok) {
  //     console.log('trueeeeeeeeeeee')
  //   } else {
  //     console.log('falseeeeeeeeeee')
  //     // (errorStatus(true, 'Нет интернета'))
  //   }
  // }

  if (action.type === 'btnAll') {
    const { allTransplants } = state
    const value = !allTransplants
    // определяю значение кнопки "все", инвертирую ее и затем проверяю остальные чекбоксы
    // если значение чекбокса не равно value то переопределяю его на value

    const currentButtonValues = Object.entries(filterBtn)
    const newFilterBtn = currentButtonValues.map((item) => {
      const newItem = item
      if (newItem[1] !== value) {
        newItem[1] = value
        return newItem
      }
      return newItem
    })
    newState = processFilterAction(Object.fromEntries(newFilterBtn))
  }

  if (action.type === 'nonStop') {
    const newFilterBtn = { ...filterBtn, nonStop: !filterBtn.nonStop }
    newState = processFilterAction(newFilterBtn)
    // checkOnlineStatus()
  }

  if (action.type === 'oneTransplants') {
    const newFilterBtn = { ...filterBtn, oneTransplants: !filterBtn.oneTransplants }
    newState = processFilterAction(newFilterBtn)
  }

  if (action.type === 'twoTransplants') {
    const newFilterBtn = { ...filterBtn, twoTransplants: !filterBtn.twoTransplants }
    newState = processFilterAction(newFilterBtn)
  }

  if (action.type === 'threeTransplants') {
    const newFilterBtn = { ...filterBtn, threeTransplants: !filterBtn.threeTransplants }
    newState = processFilterAction(newFilterBtn)
  }

  if (action.type === 'btnSort') {
    const oldAllTickets = [...state.filterTickets]
    const finalTicketsArray = processSortAction(action.sortName, oldAllTickets)

    newState = {
      ...state,
      sortName: action.sortName,
      filterTickets: finalTicketsArray,
      displayTickets: [...finalTicketsArray.slice(0, state.counterDisplayTickets)],
    }
  }

  if (action.type === 'loadingStatus') {
    newState = { ...state, loading: action.payload }
  }

  if (action.type === 'errorStatus') {
    newState = { ...state, error: action.payload, errorText: action.message }
  }

  if (action.type === 'addFiveTickets') {
    const displayTicketsLength = state.displayTickets.length
    const idx = state.counterDisplayTickets + 5
    const newFilterTicketsArr = [...state.displayTickets, ...state.filterTickets.slice(displayTicketsLength, idx)]
    newState = { ...state, counterDisplayTickets: idx, displayTickets: newFilterTicketsArr }
  }

  if (action.type === 'getTicketsData') {
    const { allTickets } = state
    const newAllTickets = [...allTickets, ...action.payload]
    newState = processFilterAction(filterBtn, newAllTickets)
  }

  return {
    ...newState,
  }
}

export default reducer
