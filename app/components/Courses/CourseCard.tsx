'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBookOpen, FaFileCircleCheck, FaCheck } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";

interface CategoriesProps {
    id: number;
    name: string;
}

interface CourseCardProps {
    id: number
    title: string;
    description: string;
    price: number;
    available: boolean;
    progress?: number;
    categories: CategoriesProps[]
    items?: any;
    type?: string;
}
const CourseCard: React.FC<CourseCardProps> = ({
    id,
    title,
    description,
    progress,
    price,
    categories,
    items,
    available
}) => {
    const router = useRouter()

    const lessonCount = items && items.filter((item: any) => item.type === 'lesson').length
    const examCount = items && items.filter((item: any) => item.type === 'examination').length

    return (
        <>
            <article
                onClick={() => router.push(`/platform/course/${id}`)}
                className="group hover:bg-indigo-50 bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 cursor-pointer">
                <div className="flex items-center sm:gap-8">
                    <div className=" relative w-72">
                        <ProgressBar progress={progress} available={available}  />
                    </div>

                    <div className="items-center">
                        {categories && categories.map(({ id, name }) => (
                            <strong key={id}
                                className="mr-2 border first:border-emerald-400 first:bg-emerald-400 border-gray-300 bg-gray-400 px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                {name}
                            </strong>
                        ))}

                        <h3 className="mt-4 text-lg font-medium sm:text-xl">
                            <a href={`/platform/course/${id}`} className="hover:underline">
                                {title}
                            </a>
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                            {description}
                        </p>

                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center gap-1 text-gray-500 ">
                                <FaBookOpen className="w-4 h-4" />

                                <p className="text-xs font-medium">{lessonCount} lessons</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 ">
                                <FaFileCircleCheck className="w-4 h-4" />

                                <p className="text-xs font-medium">{examCount} examinations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article >
        </>
    )
};

export default CourseCard;