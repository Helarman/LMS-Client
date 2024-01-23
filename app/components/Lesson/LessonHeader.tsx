'use client'

import { DiEnvato } from "react-icons/di";
import Button from "../Button/Button";

interface LessonHeaderProps {
    title: string;
    description: string;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({
    title,
    description,
}) => {
    return ( 
        <div className="pb-12">
            <div className="overflow-hidden">
                <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    {title}
                </h2>

                <p className=" text-gray-500 md:mt-4 md:block">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default LessonHeader;