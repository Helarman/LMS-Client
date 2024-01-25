import getCourses from "@/app/actions/getCourses";
import CoursesClient from "./CoursesClient";
import EmptyState from "@/app/components/Courses/EmptyState";
import { CategoryProps } from "@/app/components/Search/CategoryBox";
import getCategories from "@/app/actions/getCategories"
import Search from "@/app/components/Search/Search";

const Courses = async ({ searchParams }) => {

    const coursesData = await getCourses(searchParams)
    const categories: CategoryProps[] = await getCategories()




    if (coursesData.length < 1) {
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