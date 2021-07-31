const usersReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCh_USER":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default usersReducer;
