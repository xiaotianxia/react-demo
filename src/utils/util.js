export function renderTpl(template, context) {
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key.trim()]);
}