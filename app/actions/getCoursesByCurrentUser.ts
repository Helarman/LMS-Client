
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCoursesByCurrentUser() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/users?filters[email][$eq]=${session.user.email}&fields[0]=email&populate[0]=courses&populate[1]=courses.items&populate[2]=courses.categories`);

        const userCourses = res.data[0].courses

        if (!userCourses) {
            return null;
        }

        return userCourses;
    } catch (error: any) {
        return null;
    }
}