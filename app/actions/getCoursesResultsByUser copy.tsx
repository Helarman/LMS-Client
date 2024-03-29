
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCoursesResultsByUser() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }
        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/course-results?filters[user][email][$eq]=${session.user.email}&populate=*`);

        const result = res.data.data;

        if (!result) {
            return null;
        }
        return result;
    } catch (error: any) {
        return null;
    }
}