const initialState = {
	currencies: [
		
	]
}

const reduce2 = (state = initialState, action: any) => {
	switch (action.type) {
		case "ADD_CURRENCIES_WITH_DATE":
			return {...state.currencies, currencies: [...state.currencies, [...action.currencies, {CharCode: ["RUB"], Value: ["1"]}]]}
		case "RESET_CURRENCIES":
			return {...state.currencies, currencies: []}
		default: 
			return state
	}
}

export default reduce2