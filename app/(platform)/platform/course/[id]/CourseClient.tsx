'use client'

import CourseBody from "@/app/components/Courses/CourseBody";
import CourseHeader from "@/app/components/Courses/CourseHeader"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface CourseInterfaceProps{
    title: string;
    type: string;
    description?: string;
} 

interface CourseClient {
    courseData: {
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
    const router = useRouter()
    const { data: session, status } = useSession()

    if (!session && status != "loading") {
        router.push('/login')
    }


    return (
        <div>
            <CourseHeader title={courseData.attributes.title} description={courseData.attributes.description} />
            <CourseBody items={courseData.attributes.items.data} />
        </div>
    )
}

export default CoursesClient;