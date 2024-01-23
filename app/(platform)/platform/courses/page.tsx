import getCourses from "@/app/actions/getCourses";
import CoursesClient from "./CoursesClient";
import EmptyState from "@/app/components/Courses/EmptyState";

const Courses = async () => {
    const coursesData = await getCourses()
    

    if (coursesData.length < 1) {
        return (
            <>
                <EmptyState  title="Courses" subTitle="Lorem ipsum dolor sit amet" />
            </>
        )
    }

    return (
        <>
            <CoursesClient coursesData={coursesData}/>
        </>
    )
}

export default Courses;