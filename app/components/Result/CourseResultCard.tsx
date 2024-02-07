'use client'

import { useRouter } from "next/navigation";
import ProgressBar from "../Courses/ProgressBar";
import { FaBookOpen, FaClock } from "react-icons/fa6";

interface CourseResultCardProps{
    progress: number;
    course: any;
}

const CourseResultCard: React.FC<CourseResultCardProps> = ({ progress, course }) => {
    const router = useRouter();
    return (
        <article
            className="group hover:bg-indigo-50 bg-white p-4 shadow-lg sm:p-6 lg:p-8 cursor-default">

            <div className="flex flex-col items-center sm:gap-8">
                <div className="relative w-full">
                    <ProgressBar progress={progress} available={true} />
                </div>

                <div className="items-center text-center">
                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                        {course.data.attributes.title}
                    </h3>
                </div>
            </div>
        </article >
    )
};

export default CourseResultCard;