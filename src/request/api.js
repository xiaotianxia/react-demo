import { parseTpl, serializeJson } from '../utils/util';

const HOST = 'https://api.github.com';

function request(path, param) {
    return new Promise((resolve, reject) => {
        let fullUrl = parseTpl(HOST + path, param);
        fullUrl = fullUrl + '?' + serializeJson({
            ...param,
            client_id: 'aa18248a5e12eca15a6f',
            client_secret: '389eac9e777a6ced5127b45193640580174c426d'
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
        return request('/users/{{username}}/repos', param);
    },

    getFollowing(param) {
        return request('/users/{{username}}/following', param);
    },

    getFollowers(param) {
        return request('/users/{{username}}/followers', param);
    },

    getInfo(param) {
        return request('/users/{{username}}', param);
    },

    getRepoDetail(param) {
        return request('/repos/{{username}}/{{repo}}', param);
    }
};