let defaultState = {
	carousel: {
		data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
		imgHeight: 176,
		slideIndex: 2,
	},
	inform: '通知1通知2通知3通知4通知5通知6通知7通知8通知9通知10通知11通知12通知13',
	ydfh: {
		ssfh: 0,
		drzdfh: 0,
		bzzdfh: 0,
		zrzdfh: 0
	},
	gzxx: [{
			eqpName: 'xxx设备',
			time: '2020- 05- 26',
			type: '开关异常报警',
			state: '未处理'
		},
		{
			eqpName: 'xxx设备',
			time: '2020- 05- 26',
			type: '开关异常报警',
			state: '未处理'
		},
		{
			eqpName: 'xxx设备',
			time: '2020- 05- 26',
			type: '开关异常报警',
			state: '未处理'
		}
	]
}



export default (state = defaultState,
	action = {}) => {
	return state;
}
