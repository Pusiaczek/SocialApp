import axios from "axios";


const dislikeClickHandler = async (id, token, refreshPosts) => {
    const sendData = {
        // token,
        post_id: id
    }

    // console.log(id);

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    }

    try {
        const response = await axios.post(
            `https://akademia108.pl/api/social-app/post/dislike`,
            JSON.stringify(sendData),
            axiosConfig,
        )

        if (!response.data.error) {
            // console.log("Wyslano dislikea: ", response);
            refreshPosts();
            
        } else {
            console.log("Błąd dislikea! :: ", response);
            throw new Error();
        }

    } catch (error) {
        console.log("Napotkaliśmy na problemy przy odlikeowaniu: \n", error);
    }
}

export default dislikeClickHandler;