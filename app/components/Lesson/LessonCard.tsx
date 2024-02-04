'use client'

import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import ProgressBar from "../Courses/ProgressBar";

interface LessonCardProps {
    id: number;
    attributes: {
        title: string;
        type: string;
        description: string;
    }
}

const LessonCard: React.FC<LessonCardProps> = ({
    id,
    attributes
}) => {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <>
            <article
                onClick={() => { router.push(`${pathname}/lesson/${id}`) }}
                className="hover:bg-indigo-50 bg-white p-4 shadow-lg sm:p-6 lg:p-8 cursor-pointer">
                <div className="flex items-center sm:gap-8">
                    <div className=" relative w-1/12">
                        <ProgressBar available={true} type={attributes.type}/>
                    </div>


                    <div>
                        <h3 className=" uppercase text-xl font-medium sm:text-xl ">
                            {attributes.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                            {attributes.description}
                        </p>
                    </div>


                </div>
            </article>
        </>
    )
};

export default LessonCard;