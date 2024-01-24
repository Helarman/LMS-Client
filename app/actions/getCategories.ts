
import { getServerSession } from "next-auth"
import axios from "axios";

interface CategoryProps {
    id: number;
    attributes: {
        name: string;
    }
}

export default async function getCategories() {
    try {
        const session = await getServerSession();
        if (!session?.user?.email) {
            return null;
        }

        const res = await axios.get(`http://127.0.0.1:1337/api/categories?fields[0]=name`);

        const categories = res.data.data.map((category: CategoryProps) => { return { id: category.id, name: category.attributes.name } })
        if (!categories) {
            return null;
        }

        return categories;
    } catch (error: any) {
        return null;
    }
}