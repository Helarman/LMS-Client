'use client'

import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

interface LessonCardProps {
    id: number;
    attributes: any;
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
                onClick={() => {router.push(`${pathname}/lesson/${id}`)}}
                className="hover:bg-indigo-50 bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 cursor-pointer">
                <div className="flex items-center sm:gap-8">
                    <div className=" relative w-1/12">

                        <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth="2"></circle>

                            <g className="origin-center -rotate-90 transform">
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-emerald-400 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="50"></circle>
                            </g>
                        </svg>
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">50%</span>
                        </div>
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