
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCurrentUser() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/users?filters[email][$eq]=${session.user.email}&populate=*`);

        const currentUser = res.data[0]
        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error: any) {
        return null;
    }
}