function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', action.data.user);
            localStorage.setItem('token', action.data.token);
            localStorage.setItem('user_id', action.data.userId);

            // console.log('dispatch: ', action.data);

            return {
                isLoggedIn: true,
                token: action.data.token,
                username: action.data.user,
                userId: action.data.userId,
            };

        case 'LOGOUT':
            localStorage.clear();
            return { isLoggedIn: false, token: '' };

        case 'CHECK_LOGIN':
            // console.log(action);

            return {
                isLoggedIn: action.data.isLoggedIn,
                token: action.data.token,
                username: action.data.user,
                userId: action.data.userId,
            }
        default:
            // console.log(action);
            throw new Error();
    }
}

export default authReducer;