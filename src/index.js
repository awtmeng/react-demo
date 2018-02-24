import React from 'react';
import {render} from 'react-dom';
import './assets/index.less';
import App from './containers/index';
import {Provider} from 'react-redux'
// 导入store
import {configureStore} from './store'
// 可以在configureStore传入初始状态
let store = configureStore(); //生成store
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

//import registerServiceWorker from './registerServiceWorker';
//registerServiceWorker();
