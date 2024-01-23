import getItemById from "@/app/actions/getItemById";
import LessonHeader from "@/app/components/Lesson/LessonHeader";
import LessonManager from "./LessonManager";

interface IParams {
  lessonId: number
}

const Page = async ({ params }: { params: IParams }) => {

  const itemData = await getItemById({ id: params.lessonId })
  return (
    <div>
      <section className="shadow-xl mx-auto min-h-screen max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8  " >
        <div className="px-8 h-full">
          <LessonHeader title={itemData.attributes.title} description={itemData.attributes.description} />

          <div className="flex flex-col gap-8 h-full">
            <LessonManager elements={itemData.attributes.elements} />
          </div>
        </div>
      </section>
    </div>
  )
};

export default Page;

