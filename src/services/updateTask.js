import axios from "axios";

export const updatedTask = async (credentials) => {
    console.log(`${process.env.REACT_APP_BASE_URL}/user/` , " ")
    return await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/updateTask`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
};