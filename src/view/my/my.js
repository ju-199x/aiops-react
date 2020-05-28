import React, {Component} from 'react';
import {List} from 'antd-mobile'
import Footer from '@/components/footer/footer'
import styles from './my.less'
import {connect} from "react-redux";

class My extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const Item = List.Item;
        const Brief = Item.Brief;
        return (
            <div className={"my"}>
                <div className={"my_top"}>
                    <div className={"touxiang"}>
                        <img src={'./assets/images/background.jpg'} alt=""/>
                    </div>
                    <div className={"banner-info"}>
                        <h3>武汉水泵电气检修班组</h3>
                    </div>
                </div>
                <List className="my-list">
                    <Item arrow="horizontal"
                          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                          multipleLine
                          onClick={() => {
                          }}
                    >
                        保电申请
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {
                        }}
                    >
                        常见问题
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {
                        }}
                    >
                        业务咨询
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {
                        }}
                    >
                        意见反馈
                    </Item>
                </List>
                <div className={"my_bottom"}>退出登录
                </div>
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

export default My = connect(mapStateToProps, mapDispatchToProps)(My)
