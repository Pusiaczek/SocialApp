import axios from "axios";


const subscribeClickHandler = async (id, token, refresh) => {
    const sendData = {
        // token,
        leader_id: id
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
            `https://akademia108.pl/api/social-app/follows/follow`,
            JSON.stringify(sendData),
            axiosConfig,
        )

        if (!response.data.error) {
            console.log("Wyslano suba: ", response);
            refresh();

        } else {
            console.log("Błąd subskrypcji! :: ", response);
            throw new Error();
        }

    } catch (error) {
        console.log("Napotkaliśmy na problemy przy subskrybowaniu: \n", error);
    }
}

export default subscribeClickHandler;