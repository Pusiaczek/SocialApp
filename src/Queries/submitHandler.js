import axios from "axios";

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}

const submitHandler = async (submitData) => {
    const user = {
        username: submitData.username,
        email: submitData.email,
        password: submitData.password,
    }

    try {
        const response = await axios.post(
            'https://akademia108.pl/api/social-app/user/signup',
            JSON.stringify(user),
            axiosConfig,
        )

        if (!response.data.error) {
            console.log(response);
        } else {
            throw new Error("Błąd rejestracji!");
        }

    } catch (error) {
        console.log("Napotkaliśmy na problemy przy rejestracji: ", error);
    }
}

export default submitHandler;