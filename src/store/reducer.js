import * as actionTypes from "./actions";

const initialState = {
	counter: 0,
	result: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		case actionTypes.STORE:
			return {
				...state,
				result: state.result.concat({ id: new Date(), val: state.counter }),
			};
		case actionTypes.DELETE:
			const newArray = state.result.filter((el, index) => {
				return index !== action.id;
			});

			return {
				...state,
				result: newArray,
			};
	}
	return state;
};

export default reducer;
