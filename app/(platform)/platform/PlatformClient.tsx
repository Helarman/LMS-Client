'use client'

import { useRouter } from "next/navigation";
import CoursesSection from "@/app/components/Courses/CoursesSection";
import Header from "@/app/components/Header/PlatformHeader";
import { useSession } from "next-auth/react";

const Client = () => {

    const router = useRouter();
    const { data: session } = useSession()
    //if(!session){
      //  router.push('/login')
   // }
    return (
        <>
            <Header name={session?.user?.name} />
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
               Your progress here
            </div>
        </>
    )
}

export default Client;