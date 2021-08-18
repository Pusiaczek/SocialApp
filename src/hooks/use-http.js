import axios from "axios";
import { useState } from 'react';


function useHttp() {

    

    const sendRequest = async (loginData, dispatch) => {
        try {
            const response = await axios({
                method: 'POST',
                url: 'https://akademia108.pl/api/social-app/user/login',
                data: {
                    ...loginData,
                    ttl: 3600
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (!response.data.error) {
                console.log('jest git');
                // console.log(response.data);

                return response.data
            } else {
                throw new Error(response.config.url);
            }

        } catch (error) {
            console.log("Napotkaliśmy na problemy przy: \n", error);
        }
    }
    return sendRequest;
}

export default useHttp;