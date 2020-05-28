import React, {
    Component
} from 'react';
import {
    Carousel,
    NoticeBar,
    Flex,
    WhiteSpace
} from 'antd-mobile'
import Footer from '@/components/footer/footer'
import styles from './home.less'
import {
    connect
} from "react-redux";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
    }

    componentDidUpdate() {
        // if (this.state.slideIndex !== this.state.data.length - 1) {
        //     this.setState({
        //         slideIndex: this.state.data.length - 1
        //     });
        // }
    }

    getCarousel = async () => {
        let res = await API.getCarousel();
    }

    getElectricalLoad = async () => {
        let res = await API.getElectricalLoad();
    }

    render() {
        const PlaceHolder = ({className = '', ...restProps}) =>
            (<div className={`${className} placeholder`} {...restProps}></div>);
        return (
            <div className={"home"}>
                    <Flex>
                        <Flex.Item>
                            <Carousel
                                autoplay={false}
                                infinite selectedIndex={this.props.carousel.slideIndex}
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => console.log('slide to', index)}>
                                {
                                    this.props.carousel.data.map((val, index) => (
                                        <img src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                             alt=""
                                             style={{
                                                 width: '100%',
                                                 verticalAlign: 'top'
                                             }
                                             }
                                             onLoad={
                                                 () => {
                                                     // window.dispatchEvent(new Event('resize'));
                                                     // this.setState({
                                                     //     imgHeight: 'auto'
                                                     // });
                                                 }
                                             }
                                        />
                                        // <a
                                        //     key={val + index}
                                        //     href="http://www.alipay.com"
                                        //     style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                                        // >
                                        //
                                        // </a>
                                    ))
                                }
                            </Carousel>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg"/>
                    <Flex>
                        <Flex.Item>
                            <NoticeBar mode="link" action={<span onClick={() => alert('1')}>»</span>} marqueeProps={
                                {
                                    loop: true,
                                    style: {
                                        padding: '0 7.5px'
                                    }
                                }
                            }>
                                {this.props.inform}
                            </NoticeBar>
                        </Flex.Item>
                    </Flex>
                    <div className={"title"}>用电负荷</div>
                    <div className={"ydfh"}>
                        <Flex>
                            <Flex.Item>
                                <span> 实时负荷 </span>
                                <PlaceHolder className="inline">
                                    {this.props.ydfh == undefined || this.props.ydfh.ssfh == null ? '0' : this.props.ydfh.ssfh}{' '} kw </PlaceHolder>
                                <span> 当日最大负荷 </span>
                                <PlaceHolder className="inline">
                                    {this.props.ydfh == undefined || this.props.ydfh.drzdfh == null ? '0' : this.props.ydfh.drzdfh}{' '} kw </PlaceHolder>
                            </Flex.Item>
                            <Flex.Item>
                                <span> 昨日最大负荷 </span>
                                <PlaceHolder className="inline">
                                    {this.props.ydfh == undefined || this.props.ydfh.zrzdfh == null ? '0' : this.props.ydfh.zrzdfh}{' '} kw </PlaceHolder>
                                <span> 本周最大负荷 </span>
                                <PlaceHolder className="inline">
                                    {this.props.ydfh == undefined || this.props.ydfh.bzzdfh == null ? '0' : this.props.ydfh.bzzdfh}{' '} kw </PlaceHolder>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <div className={"title"}> 告警信息</div>
                    <Flex direction="column">
                        {
                            this.props.gzxx && this.props.gzxx.length ? (
                                this.props.gzxx.map((val) => {
                                    return (
                                        <div className={"gz_info"}>
                                            <div className={"gz_info_left"}>
                                                <span> {val.eqpName} </span>
                                                <span> {val.type} </span>
                                            </div>
                                            <div className={"gz_info_right"}>
                                                <span> {val.time} </span>
                                                <span> {val.state} </span>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (<div></div>)
                        }
                    </Flex>
                    <div className={"title"}> 巡检情况</div>
                    <Flex direction="column">
                        <div>111</div>
                        <div>222</div>
                        <div>333</div>
                    </Flex>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        carousel: state.homeReducer.carousel,
        gzxx: state.homeReducer.gzxx,
        ydfh: state.homeReducer.ydfh,
        inform: state.homeReducer.inform
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // PayIncrease: () => dispatch({ type: '涨工资' }),
        // PayDecrease: () => dispatch({ type: '扣工资' })
    }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)
