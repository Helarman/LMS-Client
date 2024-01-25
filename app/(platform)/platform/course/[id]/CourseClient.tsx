'use client'

import CourseBody from "@/app/components/Courses/CourseBody";
import CourseHeader from "@/app/components/Courses/CourseHeader"

interface CourseClient {
    courseData:{
        attributes: {
            title: string;
            description: string;
            items: any;
        }
    }
}

const CoursesClient: React.FC<CourseClient> = ({
    courseData
}) => {
    
    return (
        <div>
            <CourseHeader title={courseData.attributes.title} description={courseData.attributes.description}/>
            <CourseBody items={courseData.attributes.items.data}/>
        </div>
    )
}

export default CoursesClient;