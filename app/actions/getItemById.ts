
import { getServerSession } from "next-auth"
import axios from "axios";

interface IParams {
    id?: number
}


export default async function getItemById({ id } : {id: number}) {
    try {
        const session = await getServerSession();
        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/items/${id}?populate=deep`);

        const itemData = res.data.data

        if (!itemData) {
            return null;
        }

        return itemData;
    } catch (error: any) {
        return null;
    }
}