import * as user from './action-type'

let defaultState = {
	userInfo: {}
}

// 用户消息
export default (state = defaultState, action = {}) => {
	switch (action.type) {
		case user.SAVE_USERINFO:
			return {
				...state,
				userInfo: action.userInfo
			}
		case user.SAVE_ATTRINFO:
			return { ...state,
				...{
					[action.datatype]: action.value
				}
			};
		case user.MODIFY_USERINFO:
			return { ...state,
				userInfo: { ...state.userInfo,
					[action.key]: action.value
				}
			};
		default:
			return state
	}
}
