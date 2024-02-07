import getCourses from "@/app/actions/getCourses";
import CoursesClient from "./CoursesClient";
import EmptyState from "@/app/components/Courses/EmptyState";
import { CategoryProps } from "@/app/components/Search/CategoryBox";
import getCategories from "@/app/actions/getCategories"
import Search from "@/app/components/Search/Search";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NoLogin } from "@/app/components/NoLogin";

const Courses = async ({ searchParams } : {searchParams: any}) => {

    const coursesData = await getCourses(searchParams)
    const categories: CategoryProps[] = await getCategories()

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return <NoLogin />
    }

    if (coursesData && coursesData.length < 1) {
        return (
            <>
                <Search categories={categories} />
                <EmptyState title="Courses" subTitle="Lorem ipsum dolor sit amet" buttonLabel="Remove filter" url="/platform/courses" />
            </>
        )
    }

    return (
        <>
            <CoursesClient coursesData={coursesData} categoriesList={categories} />
        </>
    )
}

export default Courses;