/*
todo 入口JS

*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

//todo 引入三个路由组件
import store from './redux/store'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Dashboard from './containers/dashboard/dashboard'

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route component={Dashboard}/> {/*没有path，默认根目录，与上面不匹配的所有都去找这个*/}
            </Switch>
        </BrowserRouter>
    </Provider>
),document.getElementById('root'))


