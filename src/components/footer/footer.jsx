import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'
import '../../assets/iconfont/iconfont.js';

class Footer extends Component {
    render() {
        return (
            <section className='footer-container'>
                <NavLink className='guide-item' to='/home'>
                    {/*<div className='icon-changyonglogo40 icon-style'></div>*/}
                    <span className='guide-item'>首页</span>
                </NavLink>
                <NavLink className='guide-item' to='/home'>
                    {/*<div className='icon-zhinanzhen icon-style'></div>*/}
                    <span>告警</span>
                </NavLink>
                <NavLink className='guide-item' to='/home'>
                    {/*<div className='icon-dingdan icon-style'></div>*/}
                    <span>任务</span>
                </NavLink>
                <NavLink className='guide-item' to='/home'>
                    {/*<div className='icon-account icon-style'></div>*/}
                    <span>报修</span>
                </NavLink>
                <NavLink className='guide-item' to='/home'>
                    {/*<div className='icon-account icon-style'></div>*/}
                    <span>我的</span>
                </NavLink>
            </section>
        )
    }
}

export default Footer
