import React, { Component } from 'react';
import { NavBar, SegmentedControl, WingBlank, Icon, PullToRefresh, ListView } from 'antd-mobile'
import Footer from '@/components/footer/footer'
import styles from './alarm.less'
import ReactDOM from 'react-dom';

let pageIndex = 0;

function genData(pIndex = 0) {
    const dataArr = [
        {
            name1: '设备名称1',
            name2: '2020-05-26 23:45:00',
            name3: '开关告警',
            name4: '未处理'
        },
        {
            name1: '设备名称2',
            name2: '2020-05-26 23:45:00',
            name3: '开关告警',
            name4: '未处理'
        },
        {
            name1: '设备名称3',
            name2: '2020-05-26 23:45:00',
            name3: '开关告警',
            name4: '未处理'
        },
        {
            name1: '设备名称4',
            name2: '2020-05-26 23:45:00',
            name3: '开关告警',
            name4: '未处理'
        },
        {
            name1: '设备名称5',
            name2: '2020-05-26 23:45:00',
            name3: '开关告警',
            name4: '未处理'
        },
    ];
    return dataArr;
}

class Alarm extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
        };
    }

    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(genData()),
                height: hei,
                refreshing: false,
                isLoading: false,
            });
        }, 1500);
    }

    onRefresh = () => {//下拉刷新
        this.setState({ refreshing: true, isLoading: true });
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                refreshing: false,
                isLoading: false,
            });
        }, 600);
    };

    onEndReached = (event) => {//触底事件
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = [...this.rData, ...genData(++pageIndex)];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    };

    showDetails = (item) => {
        console.log(item)
    }
    onChange = (e) => {
        console.log(e)
    }
    onValueChange = (value) => {
        console.log(value)
    }

    render() {
        const row = (rowData, sectionID, rowID) => {
            return (
                <div key={rowID}>
                    <div className='list_top'>
                        <div className="list_part">
                            <div className="list_arr">
                                <div>设备名称</div>
                                <div style={{ marginLeft: 30 }}>{rowData.name1}</div>
                            </div>
                            <div className="list_arr">
                                <div>告警时间</div>
                                <div style={{ marginLeft: 30 }}>{rowData.name2}</div>
                            </div>
                            <div className="list_arr">
                                <div>告警类型</div>
                                <div style={{ marginLeft: 30 }}>{rowData.name3}</div>
                            </div>
                            <div className="list_arr">
                                <div>消缺状态</div>
                                <div style={{ marginLeft: 30, color: 'red' }}>{rowData.name4}</div>
                            </div>
                        </div>
                        <div className="list_part2"><Icon type='right' size="xs" onClick={this.showDetails.bind(this, rowData)} /></div>
                    </div>
                    <div className="list_bottom"></div>
                </div>
            );
        };
        return (<div className='home'>
            <NavBar>告警</NavBar>
            <WingBlank size="lg" className="sc-example" style={{ marginTop: 20 }}>
                <SegmentedControl onChange={this.onChange} onValueChange={this.onValueChange} values={['已处理', '未处理']} />
            </WingBlank>
            <ListView
                key={this.state.useBodyScroll ? '0' : '1'}
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                useBodyScroll={this.state.useBodyScroll}
                style={this.state.useBodyScroll ? {} : {
                    height: this.state.height,
                    border: '1px solid #ddd',
                    margin: '5px 0',
                }}
                pullToRefresh={<PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />}
                onEndReached={this.onEndReached}
                pageSize={10}
            />
            <Footer />
        </div>);
    }
}

export default Alarm;
