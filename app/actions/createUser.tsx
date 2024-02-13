
import axios from "axios";

export default async function createUser(data) {

    try {
        await axios.post('https://lmsadmin-ew58.onrender.com/api/users',
            {
                username: data.email,
                email: data.email,
                role: "Authenticated",
                password: ""

            })
    } catch (error: any) {
    }
}