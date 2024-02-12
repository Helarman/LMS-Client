import getCoursesByCurrentUser from "@/app/actions/getCoursesByCurrentUser";
import AvailableCoursesClient from "./AvailableCoursesClient";
import EmptyState from "@/app/components/Courses/EmptyState";
import getCourseResultsByCurrentUser from "@/app/actions/getCourseResultsByCurrentUser";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NoLogin } from "@/app/components/NoLogin";

const Courses = async () => {

    const userCourses = await getCoursesByCurrentUser()
    const userResults = await getCourseResultsByCurrentUser()

    console.log(userCourses)
    if (!userCourses) {
        return (
            <>
                <EmptyState title="Avilable courses" subTitle="Lorem ipsum dolor sit amet" buttonLabel="Browse courses" url="/platform/courses" />
            </>
        )
    }

    return (
        <AvailableCoursesClient userCourses={userCourses} userResults={userResults}/>
    )
}

export const dynamic = 'force-dynamic'
export default Courses;