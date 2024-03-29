
import { getServerSession } from "next-auth"
import axios from "axios";

interface IParams {
    id?: number
}


export default async function getCourseById({ id }: { id: number }) {
    try {
        const session = await getServerSession();
        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/courses/${id}?populate=*`);

        const courseData = res.data.data

        if (!courseData) {
            return null;
        }

        return courseData;
    } catch (error: any) {
        return null;
    }
}