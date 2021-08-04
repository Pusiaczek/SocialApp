import axios from 'axios';



// const loginHandler = (loginData) => {
//     const user = {
//         ...loginData,
//         ttl: 3600
//     }
//     // console.log("loginHandler");

//     try {
//         const response = axios.post(
//             'https://akademia108.pl/api/social-app/user/login',
//             JSON.stringify(user),
//             axiosConfig,
//         )
//         // console.log("loginHandler - try");

//         return response;

//     } catch (error) {
//         console.log("error", error);
//     }
// }



function authReducer(state, action) {
    switch (action.type) {
        case 'login':

            // let temp = {}
            // loginHandler(action.loginData).then( res => {
            //     temp = { data: res.data.jwt_token }
            //     console.log(temp);
            // });

            console.log(action.token);
            return { isLoggedIn: true, };

        case 'logout':
            console.log(action);
            return false;

        default:
            // console.log(action);
            throw new Error();
    }
}

export default authReducer;