import axios from "axios";

export const deletedTaskService = async (credentials) => {
    console.log(`${process.env.REACT_APP_BASE_URL}/user/deleteTask`)
    // const response = await axios.delete("http://localhost:3000/api/user/deleteTask", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: credentials, // Pass the credentials as the data property
    // });
    return await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/user/deleteTask`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            data:credentials,
        }
    )
};