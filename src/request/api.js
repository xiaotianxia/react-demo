import { parseTpl, serializeJson } from '@/utils/util';
import {
    message
} from 'antd';
import { ls } from '@utils/localStorage';
const HOST = 'https://api.github.com';

function request(path, param) {
    const username = ls.get('my_github_app_username');
    if (!username) {
        window.location.href = '/#/login';
    }
    return new Promise((resolve, reject) => {
        let fullUrl = parseTpl(HOST + path, param);
        fullUrl = fullUrl + '?' + serializeJson({
            ...param,
            client_id: 'aa18248a5e12eca15a6f',
            client_secret: '389eac9e777a6ced5127b45193640580174c426d'
        })
        fetch(fullUrl).then(r => r.text().then(res => {
            res = JSON.parse(res);
            if (res.message) {
                message.error(res.message || '接口出错');
            }
            resolve(res);
        })).catch(err => {
            reject(err);
        });
    });
}

export default {
    getUser(param) {
        return request('/users/{{username}}', param);
    },

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
    },

    getEvents(param) {
        return request('/users/{{username}}/events', param);
    }
};