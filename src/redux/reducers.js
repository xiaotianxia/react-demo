import { combineReducers } from "redux";
import { ls } from '@utils/localStorage';

const username = ls.get('my_github_app_username');

const initialState = {
    logined: !!username,
    userInfo: {
        username: username
    }
};

const loginUserChange = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGINED':
            ls.set('my_github_app_username', action.userInfo.username);
            return {
                ...initialState,
                logined: true,
                userInfo: action.userInfo || {}
            }
        case 'USER_LOGOUTED':
            ls.remove('my_github_app_username');
            window.location.reload();
            return {
                ...initialState,
                logined: false,
            }
        default: 
            return state;
    }
}

export default combineReducers({
    loginUserChange
});
