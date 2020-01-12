import { renderTpl } from '../utils/util';

const HOST = 'https://api.github.com';

function request(url, param) {
    return new Promise((resolve, reject) => {
        const fullUrl = renderTpl(HOST + url, param);
        fetch(fullUrl + '?access_token=b5b06dd6c09f58cfa7dd25b0a09f3808c405467b').then(r => r.text().then(res => {
            resolve(JSON.parse(res));
        })).catch(err => {
            reject(err);
        });
    });
}

export default {
    getRepos(param) {
        return request('/users/{{username}}/repos', param)
    },

    getFollowing(param) {
        return request('/users/{{username}}/following', param)
    },

    getFollowers(param) {
        return request('/users/{{username}}/followers', param)
    },

    getInfo(param) {
        return request('/users/{{username}}', param)
    }
};