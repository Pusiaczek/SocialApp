import axios from "axios";

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}


const loginHandler = async (loginData, dispatch) => {
    const user = {
        ...loginData,
        ttl: 3600
    }

    try {
        const response = await axios.post(
            'https://akademia108.pl/api/social-app/user/login',
            JSON.stringify(user),
            axiosConfig,
        )

        if (!response.data.error) {

            // console.log('response: ', response.data.id);
            dispatch({
                type: 'LOGIN',
                data: {
                    user: loginData.username,
                    pass: loginData.password,
                    token: response.data.jwt_token,
                    userId: response.data.id
                },
            })
            // console.log("login", response);
            // getProfileData(response.data.jwt_token);
        } else {
            throw new Error("Błąd logowania!");
        }

    } catch (error) {
        console.log("Napotkaliśmy na problemy przy logowaniu: ", error);
    }
}

export default loginHandler;