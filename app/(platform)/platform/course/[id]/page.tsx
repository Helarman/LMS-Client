import getCourseById from "@/app/actions/getCourseById";
import CoursesClient from "./CourseClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NoLogin } from "@/app/components/NoLogin";

interface IParams {
  id: number
}

const Page = async ({ params }: { params: IParams }) => {
  const courseData = await getCourseById({ id: params.id })
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return <NoLogin />
  }


  return (
    <div>

      <CoursesClient courseData={courseData} />
    </div>
  )
};

export default Page;

