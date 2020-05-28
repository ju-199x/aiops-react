import React, { Component } from 'react';
import {Button} from 'antd-mobile'
import { connect } from 'react-redux';

class Login extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Button type="primary">primary</Button>
                <h2>登录页</h2>
            </div>
        );
    }
}
//需要渲染什么数据
function mapStateToProps(state) {
    return {
        // tiger: state
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        // PayIncrease: () => dispatch({ type: '涨工资' }),
        // PayDecrease: () => dispatch({ type: '扣工资' })
    }
}

export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)
