import getCourseById from "@/app/actions/getCourseById";
import CoursesClient from "./CourseClient";

interface IParams {
  id: number
}

const Page = async ({ params }: { params: IParams }) => {
  const id = params.id
  const courseData = await getCourseById( {id: params.id} )

  return (
    <div>
      
      <CoursesClient courseData={courseData}/>
    </div>
  )
};

export default Page;

