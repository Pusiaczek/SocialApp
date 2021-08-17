import axios from "axios";


const likeItClickHandler = async (id, token, refreshPosts) => {
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
            `https://akademia108.pl/api/social-app/post/like`,
            JSON.stringify(sendData),
            axiosConfig,
        )

        if (!response.data.error) {
            // console.log("Wyslano lajka: ", response);
            refreshPosts();
            
        } else {
            console.log("Błąd likea! :: ", response);
            throw new Error();
        }

    } catch (error) {
        console.log("Napotkaliśmy na problemy przy likeowaniu: \n", error);
    }
}

export default likeItClickHandler;