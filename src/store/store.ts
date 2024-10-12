import { createStore, combineReducers } from 'redux'

// Reducers

import reduce1 from './reducers/reduce1'

import reduce2 from './reducers/reduce2'

const reducers = combineReducers({
	currencies: reduce1,
	currenciesWithDate: reduce2
})


const store = createStore(reducers)

export default store