import axios from "axios";

export const addTaskService = async (credentials) => {
    console.log(`${process.env.REACT_APP_BASE_URL}/user/addTask`)
    return await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/addTask`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
};