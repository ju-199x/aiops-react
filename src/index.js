import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import store from '@/store'
// import reducer from '@/view/login/login.reducer'
import App from './App';

// import App from '../src/view/login/login';

// const store = createStore(reducer);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}
render(Route);


// ReactDOM.render(<App />,
//     document.getElementById('root'));
