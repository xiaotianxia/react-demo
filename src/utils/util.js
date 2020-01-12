export const parseTpl = (template, context) => {
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key.trim()]);
}

export const serializeJson = (json) => {
    return Object.entries(json).map(item => {
        return `${item[0]}=${item[1]}`
    }).join('&')
}