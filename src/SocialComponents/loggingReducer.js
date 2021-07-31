

function loggingReducer(state, action) {
    switch (action.type) {
        case "logIn":
            return (null)
        
        case "logOut":
            return (null)
        
        default:
            throw new Error();
    }
}

export default loggingReducer;