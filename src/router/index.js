import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

const login = asyncComponent(() => import('@/view/login/login'));
const home = asyncComponent(() => import('@/view/home/home'));
const my = asyncComponent(() => import('@/view/my/my'));
const alarm = asyncComponent(() => import('@/view/alarm/alarm'));

export default class RouteConfig extends Component {
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/my" component= {my}/>
                    <Route path="/home" component= {home}/>
                    <Route path="/login" component= {login}/>
                    <Route path="/alarm" component= {alarm}/>
                    <Redirect exact from='/' to='/login'/>
                    <Route component= {login}/>
                </Switch>
            </HashRouter>
        )
    }
}
