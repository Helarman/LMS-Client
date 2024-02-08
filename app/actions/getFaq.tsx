
import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getFAQ() {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }
        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/faq?populate=*`);

        const FAQ = res.data.data

        if (!FAQ) {
            return null;
        }
        return FAQ;
    } catch (error: any) {
        return null;
    }
}