import axios from "axios";

export const editTaskService = async (credentials) => {
    console.log(`${process.env.REACT_APP_BASE_URL}/user/editTask`)
    return await axios.put(
        `${process.env.REACT_APP_BASE_URL}/user/editTask`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
};