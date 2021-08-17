import axios from "axios";




const logoutHandler = async (token, dispatch) => {
    const user = {
        token
    }

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    }

    try {
        const response = await axios.post(
            'https://akademia108.pl/api/social-app/user/logout',
            JSON.stringify(user),
            axiosConfig,
        )

        if (!response.data.error) {
            // console.log(response);
            dispatch({
                type: 'LOGOUT'
            })
            
        } else {
            throw new Error("Błąd wylogowania!");
        }

    } catch (error) {
        console.log("Napotkaliśmy na problemy przy wylogowywaniu: ", error);
    }
}

export default logoutHandler;