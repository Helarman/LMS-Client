
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCoursePrviewById() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/courses`);

        const currentUser = res.data[0]

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error: any) {
        return null;
    }
}