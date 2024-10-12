const initialState = {
	currencies: [{Value: ['1'], CharCode: ['RUB']}]
}

const reduce1 = (state = initialState, action: any) => {
	switch (action.type) {
		case "ADD_CURRENCIES":
			return {...state.currencies, currencies: [...state.currencies, ...action.currencies]}
		default: 
			return state
	}
}

export default reduce1