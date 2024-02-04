
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getResult() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }
        const res = await axios.get(`http://127.0.0.1:1337/api/results?filters[user][email][$eq]=${session.user.email}&filters[item][id][$eq]=3&populate=*`);

        const result = res.data.data[0].attributes.count
        if (!result) {
            return null;
        }
        return result;
    } catch (error: any) {
        return null;
    }
}