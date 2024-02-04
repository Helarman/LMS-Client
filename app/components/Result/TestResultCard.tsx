'use client'

import { useRouter } from "next/navigation";
import ProgressBar from "../Courses/ProgressBar";
import { FaBookOpen, FaClock } from "react-icons/fa6";

const TestResultCard = ({ count, item }) => {
    const router = useRouter();
    return (
        <article
            className="group hover:bg-indigo-50 bg-white p-4 shadow-lg sm:p-6 lg:p-8 cursor-default">

            <div className="flex flex-col items-center sm:gap-8">
                <div className="relative w-full">
                    < div >
                        <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                            <circle cx="18" cy="18" r="16" fill="none"
                                className="
                                text-emerald-400
                                stroke-current 
                            "
                                strokeWidth="2"></circle>


                        </svg>
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-2xl font-bold text-gray-800">
                                {count === null ? <FaClock className="w-6 h-6" /> : count}
                            </span>
                        </div>
                    </div >
                </div>

                <div className="items-center text-center">
                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                        {item.data.attributes.title}
                    </h3>
                </div>
            </div>
        </article >
    )
};

export default TestResultCard;