'use client'

import LessonCard from "../Lesson/LessonCard";

interface CourseBodyProps {
    items: {
        id: number;
        attributes: any;
    }[]
}

const CourseBody: React.FC<CourseBodyProps> = ({
    items
}) => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 mb-12">
                {items && items.map(({ id, attributes }) => (
                    <div key={id}>
                        <LessonCard id={id} attributes={attributes} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseBody;