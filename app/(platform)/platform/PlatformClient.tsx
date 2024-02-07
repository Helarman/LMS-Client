'use client'

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header/PlatformHeader";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import FileResultSection from "@/app/components/Result/FileResultSection";
import TestResultSection from "@/app/components/Result/TestResultSection";
import CourseResultSection from "@/app/components/Result/CourseResultSection";

interface PlatformClientProps {
    itemsResults: any;
    coursesResults: any;
}
const Client: React.FC<PlatformClientProps> = ({ itemsResults, coursesResults }) => {
    const router = useRouter();

    const { data: session, status } = useSession()

    const [hasMounted, setHasmounted] = useState(false);

    useEffect(() => {
        setHasmounted(true)
    })

    if (!session && status != "loading") {
        router.push('/login')
    }

    if (!hasMounted) {
        return null;
    }


    const filesResults =  itemsResults && itemsResults.filter((result: any) => result.attributes.fileLink != null)
    const testsResults =  itemsResults && itemsResults.filter((result: any) => result.attributes.fileLink == null)


    return (
        <div className="w-full">
            <Header name={session?.user?.name} />
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <CourseResultSection title="Your courses progress" results={coursesResults} />
                <FileResultSection title="Your uploaded files scores" results={filesResults} />
                <TestResultSection title="Your test scores" results={testsResults} />
            </div>
        </div>
    )
}

export default Client;