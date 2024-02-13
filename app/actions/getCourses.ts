

import { getServerSession } from "next-auth"
import axios from "axios";

export default async function getCourses({ searchParams }: { searchParams: any }) {


    let searchQuery

    if (!searchParams) {
        searchQuery = '';
    }
    else {
        if (searchParams.search === undefined) {
            searchQuery = '';
        }
        if (searchParams.search != undefined) {
            searchQuery = searchParams.search;
        }
    }

    let categoryQuery

    if (!searchParams) {
        searchQuery = '';
    }
    else {
        if (searchParams.category === undefined) {
            categoryQuery = '';
        }
        if (searchParams.category != undefined) {
            categoryQuery = searchParams.category;
        }
    }

    try {
        const session = await getServerSession();
        if (!session?.user?.email) {
            return null;
        }
        /*filters[title][$containsi]=${searchQuery}&filters[categories][name][$containsi]=${categoryQuery}&*/
        const res = await axios.get(`https://lmsadmin-ew58.onrender.com/api/courses?populate[0]=users&populate[1]=categories&populate[2]=items`);

        const coursesData = res.data.data

        if (!coursesData) {
            return null;
        }

        return coursesData;
    } catch (error: any) {
        return null;
    }
}