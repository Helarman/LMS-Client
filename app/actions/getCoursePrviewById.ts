
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCoursePrviewById() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`http://127.0.0.1:1337/api/courses`);

        const currentUser = res.data[0]

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error: any) {
        return null;
    }
}