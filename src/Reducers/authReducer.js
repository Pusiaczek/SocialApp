function authReducer(state, action) {
    switch (action.type) {
        case 'login':
            localStorage.setItem('user', action.data.user);
            localStorage.setItem('token', action.data.token);

            return {
                isLoggedIn: true,
                token: action.data.token,
                username: action.data.user,
            };

        case 'logout':
            localStorage.clear();
            return { isLoggedIn: false, token: '' };

        case 'locallogin':
            // console.log(action);

            return {
                isLoggedIn: true,
                token: action.data.token,
                username: action.data.user,
            };
        default:
            // console.log(action);
            throw new Error();
    }
}

export default authReducer;