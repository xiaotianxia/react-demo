import { parseTpl, serializeJson } from '../utils/util';

const HOST = 'https://api.github.com';

function request(path, param) {
    return new Promise((resolve, reject) => {
        let fullUrl = parseTpl(HOST + path, param);
        fullUrl = fullUrl + '?' + serializeJson({
            ...param,
            access_token: 'e9228c949375c65213044a74ffdba2e011af9414'
        })
        fetch(fullUrl).then(r => r.text().then(res => {
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