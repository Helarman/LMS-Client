'use client'

import { useState } from "react";
import Button from "../Button/Button";
import TestLayout from "./TestLayout";
import TestSelectItem from "./TestSelectItem";
import TestDetail from "./TestDetail";

const FileElement = ({ title, description, questions }) => {

    const [isStarted, setIsStarted] = useState(false)

    if (!isStarted) {
        return (
            <TestLayout>
                <Button onClick={() => setIsStarted(true)} label="Start" color="text-gray-800" background="bg-emerald-400" />
            </TestLayout>
        )
    }
    return (
        <>
            <TestLayout>
                <div className=" absolute right-8 top-8 space-x-5 " >

                    <div className="hidden md:block h-44 w-44">

                        <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth="2"></circle>

                            <g className="origin-center -rotate-90 transform">
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-emerald-400 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="80"></circle>
                            </g>
                        </svg>
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-4xl font-bold text-gray-600">
                                2/10
                            </span>
                        </div>
                    </div>
                </div>
                
                <TestDetail />

                <div className="flex  md:absolute right-8 bottom-8 space-x-5 " >

                    <Button onClick={() => { }} label="Finish" color="text-gray-800" background="bg-gray-300" />

                    <Button onClick={() => { }} label="Next" color="text-gray-800" background="bg-emerald-400" />
                </div>
            </TestLayout>

        </>

    )
};

export default FileElement;
