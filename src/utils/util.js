export const parseTpl = (template, context) => {
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key.trim()]);
}

export const serializeJson = (json) => {
    return Object.entries(json).map(item => {
        return `${item[0]}=${item[1]}`
    }).join('&')
}

export const cutStr = (val, length = 30) => {
    if (val && val.length > length) {
        return `${val.substr(0, length)}...`;
    }
    return val;
}