
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCourses() {
    try {
        const session = await getServerSession();
        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`http://127.0.0.1:1337/api/courses?populate[0]=users&populate[1]=categories&populate[2]=items`);

        const coursesData = res.data.data

        if (!coursesData) {
            return null;
        }

        return coursesData;
    } catch (error: any) {
        return null;
    }
}