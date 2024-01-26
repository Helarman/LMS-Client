'use client'

interface TestCounterProps {
    current: number,
    maximum: number
}

const TestCounter: React.FC<TestCounterProps> = ({
    current,
    maximum
}) => {


    return (
        <div className=" absolute right-8 top-8 space-x-5 " >
            <div className="hidden md:block h-44 w-44">

                <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>

                    <g className="origin-center -rotate-90 transform">
                        <circle cx="18" cy="18" r="16" fill="none"
                            className={`
                                    ${(current - 1) / maximum * 100 == 0 ? 'text-gray-200 ' : 'text-emerald-400'}
                                    stroke-current 
                                `}
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={100 - ((current - 1) / maximum * 100)}></circle>
                    </g>
                </svg>
                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-4xl font-bold text-gray-600">
                        {current}/{maximum}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TestCounter;