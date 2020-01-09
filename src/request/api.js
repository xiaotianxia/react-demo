import {RECOMMEND} from './config';

const apis = {
    async getRecommend(param) {
        const url = RECOMMEND;
        return fetch(url).then(r => r.text().then(res => {
            return res;
        }))
    }
}
export default apis;