import axios from 'axios';



const getRecommendSubs = async (token) => {
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

    if(token){
        try {
            const response = await axios.post(
                'https://akademia108.pl/api/social-app/follows/recommendations',
                JSON.stringify(user),
                axiosConfig,
            )
            console.log('Odpowiedz reccomm subs', response);
    
            return response;
        } catch (error) {
            console.log("error", error);
        }
    }
}

export default getRecommendSubs;