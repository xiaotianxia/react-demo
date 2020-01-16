export const onLogin = userInfo => ({
    type: 'USER_LOGINED',
    userInfo
});

export const onLogout = () => ({
    type: 'USER_LOGOUTED'
});