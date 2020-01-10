import { renderTpl } from '../utils/util';

const HOST = 'https://api.github.com';

function request(url, param) {
    return new Promise((resolve, reject) => {
        const fullUrl = renderTpl(HOST + url, param);
        fetch(fullUrl).then(r => r.text().then(res => {
            resolve(res);
        })).catch(err => {
            reject(err);
        });
    });
}


const apis = {
    getRepos(param) {
        return request('/users/{{username}}/repos', param)
    },

    getFollowing(param) {
        return request('/users/{{username}}/following', param)
    },

    getFollowers(param) {
        return request('/users/{{username}}/followers', param)
    },


}
export default apis;