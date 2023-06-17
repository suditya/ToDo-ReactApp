import axios from "axios";

export const register =  async (credentials)=>
{
    console.log(`${process.env.REACT_APP_BASE_URL}/user/register`)
    return await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/register`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
};

