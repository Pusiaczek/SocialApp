import axios from 'axios';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}

const getDefaultPosts = async () => {
    try {
        const response = await axios.post(
            'https://akademia108.pl/api/social-app/post/latest',
            axiosConfig,
        )
        return response;
    } catch (error) {
        console.log("error", error);
    }
}

export default getDefaultPosts;
