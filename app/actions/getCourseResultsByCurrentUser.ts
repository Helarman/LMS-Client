
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCourseResultsByCurrentUser() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }
        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/course-results?filters[user][email][$eq]=${session.user.email}&populate=*`);
      
        const userResults = res.data.data

        if (!userResults) {
            return null;
        }

        return userResults;
    } catch (error: any) {
        return null;
    }
}