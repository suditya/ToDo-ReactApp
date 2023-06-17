import axios from "axios";

export const login = async (credentials) => {
    console.log(`${process.env.REACT_APP_BASE_URL}/user/login` , "logging ")
    return await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/login`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
};