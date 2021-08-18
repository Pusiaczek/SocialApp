import axios from 'axios';



const getDefaultPosts = async (token) => {
    
    
    const user = {
        token
    }
    
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    // console.log('Headery: ', axiosConfig.headers);

    try {
        const response = await axios.post(
            'https://akademia108.pl/api/social-app/post/latest',
            JSON.stringify(user),
            axiosConfig,
        )
        // console.log('Odpowiedz', response);

        return response;
    } catch (error) {
        console.log("error", error);
    }
}

export default getDefaultPosts;