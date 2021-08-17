import axios from 'axios';



const getProfileData = async (token) => {
    const user = {
        token
    }

    // console.log('TOKEN: ', token);
    
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    try {
        const response = await axios.post(
            'https://akademia108.pl/api/social-app/user/profile',
            JSON.stringify(user),
            axiosConfig,
        )
        // console.log('Odpowiedz', response);
        return response;
    } catch (error) {
        console.log("Błąd pobierania danych użytkownika! \n", error);
    }
}

export default getProfileData;