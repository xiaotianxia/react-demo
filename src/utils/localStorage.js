export const ls = {
    get(key) {
        if (key) return JSON.parse(localStorage.getItem(key));
        return '';
    },

    set(key, val) {
        const setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (const i in setting) {
                localStorage.setItem(i, JSON.stringify(setting[i]));
            }
        } else {
            localStorage.setItem(key, JSON.stringify(val));
        }
    },

    remove(key) {
        localStorage.removeItem(key);
    },

    clear() {
        localStorage.clear();
    }
};