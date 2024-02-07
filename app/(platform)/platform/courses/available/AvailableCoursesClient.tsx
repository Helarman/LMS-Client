'use client'

import { useRouter } from "next/navigation";
import CoursesSection from "@/app/components/Courses/CoursesSection";

interface AvilableCoursesClientProps {
    userCourses: any;
    userResults: any;
}

const Client: React.FC<AvilableCoursesClientProps> = ({ userCourses, userResults }) => {

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-left ">
                <CoursesSection title="Avilable courses" subTitle="Lorem ipsum dolor sit amet" available={true} cards={userCourses} results={userResults} />
            </div>
        </>
    )
}

export default Client;