import getItemsResultsByUser from "@/app/actions/getItemsResultsByUser";
import PlatformClient from "./PlatformClient";
import getCoursesResultsByUser from "@/app/actions/getCoursesResultsByUser copy";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NoLogin } from "@/app/components/NoLogin";


const Platform = async () => {
    const itemsResults = await getItemsResultsByUser()
    const coursesResults = await getCoursesResultsByUser()
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return <NoLogin />
    }

    return (
        <PlatformClient itemsResults={itemsResults} coursesResults={coursesResults} />
    )
}

export default Platform;