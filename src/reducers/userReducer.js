const reducer = (state = {}, action) => {
	switch(action.type) {
		case 'USER_LOGIN':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export const userLogin = (user) => {
	return {
		type: 'USER_LOGIN',
		data: user
	};
};

export default reducer;