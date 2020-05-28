import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux'
import userReducer from './reducer'
import homeReducer from './home/reducer.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
	homeReducer,
	userReducer
})

let store = createStore(
	reducer,
	applyMiddleware(thunk)
)

export default store
