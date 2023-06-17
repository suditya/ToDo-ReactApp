import axios from "axios";

export const getTask = async (email) => {
    console.log(`${process.env.REACT_APP_BASE_URL}/user/getTask`)
    return await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/getTasks?email=${email}`
    )
};