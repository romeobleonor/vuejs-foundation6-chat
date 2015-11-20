//import { combineReducers } from 'redux';
import { ADD_MESSAGE } from './actions';

const initialState = {
	messages: []
};

export default function messagesApp(state = initialState, action) {
	switch (action.type) {
		case ADD_MESSAGE:
			return [
				...state,
				{
					message: action.message
				}
			];
		default:
			return state
	}
}
