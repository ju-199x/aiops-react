import Server from './server'
import {
	getUrlConcat
} from '../utils/commons'

class Home extends Server {
	/**
	 * 获取轮播图
	 */
	async getCarousel() {
		try {
			let result = await this.axios('post', '/home/getCarousel', {})
			if (result.status === 1000 && (result instanceof Object)) {
				return result.resultValue || []
			} else {
				let err = {
					tip: result.resultValue,
					response: result,
				}
				throw err
			}
		} catch (err) {
			throw err
		}
	}
	 
	/**
	 * 获取用电负荷
	 */
	async getElectricalLoad () {
		try {
			let result = await this.axios('post', '/home/getElectricalLoad', {})
			if (result.status === 1000 && (result instanceof Object)) {
				return result.resultValue || []
			} else {
				let err = {
					tip: result.resultValue,
					response: result,
				}
				throw err
			}
		} catch (err) {
			throw err
		}
	}
}

export default new Home()
