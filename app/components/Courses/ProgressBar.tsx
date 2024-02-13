'use client'

import { useRouter } from "next/navigation"

import { FaCheck } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";

interface ProgressBarProps {
    progress?: number;
    available: boolean;
    type?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, available, type }) => {
    const router = useRouter()
    let roundedProgress
    let strokeDashoffset

    if (progress) {
        roundedProgress = Math.round(progress)
    }
    if (roundedProgress == undefined) {
        roundedProgress = 0
    }

    strokeDashoffset = 100 - roundedProgress

    if (available) {
        return (
            <>  <div className="h-full w-full">
                <svg className=" h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                    <circle cx="18" cy="18" r="16" fill="none"
                        className={`
                                ${roundedProgress == 100 || type === 'examination' ? 'text-emerald-400' : 'text-gray-200'}
                                stroke-current 
                            `}
                        strokeWidth="2"></circle>

                    <g className="origin-center -rotate-90 transform">
                        <circle
                            cx="18" cy="18" r="16" fill="none"
                            className={`
                                    ${roundedProgress == 0 && type != 'examination' ? 'text-gray-200 ' : 'text-emerald-400'}
                                    stroke-current 
                                `}
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={strokeDashoffset}
                        ></circle>
                    </g>
                </svg>
                {type === 'examination' ?
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold text-gray-800">
                            <PiExamFill className="w-10 h-10" />
                        </span>
                    </div>
                    :

                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold text-gray-800">
                            {roundedProgress == 100 ?
                                <FaCheck />
                                :
                                `${roundedProgress}%`
                            }
                        </span>
                    </div>
                }
            </div>
            </>
        )
    }

    return (
        <>
            <svg className="h-full w-full group-hover:fill-emerald-400 fill-none" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <g className="origin-center -rotate-90 transform">
                    <circle cx="18" cy="18" r="16" className="stroke-current bg-emerald-400 text-emerald-400 dark:text-blue-500" strokeWidth="2" strokeDasharray="102" strokeDashoffset="0"></circle>
                </g>
            </svg>
            <div
                onClick={() => router.push('/platform')}
                className="
                        absolute 
                        top-1/2 
                        start-1/2 
                        transform 
                        -translate-y-1/2 
                        -translate-x-1/2 
                        cursor-pointer
                    "
            >
                <span className="group-hover:hidden text-center text-xl font-bold text-gray-800 dark:text-white ">1000$</span>
                <span className="hidden group-hover:block text-center text-xl font-bold text-gray-800 dark:text-white uppercase">Buy</span>
            </div>
        </>
    )
};

export default ProgressBar;