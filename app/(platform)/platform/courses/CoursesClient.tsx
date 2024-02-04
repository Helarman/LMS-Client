'use client'

import { useRouter, useSearchParams } from "next/navigation";
import Search from "@/app/components/Search/Search";
import SectionHeader from "@/app/components/Header/SectionHeader";
import CourseCard from "@/app/components/Courses/CourseCard";
import { useSession } from "next-auth/react";

interface ClientProps {
    courseData: any
    categories: any
}
const Client = ({
    coursesData,
    categoriesList
}) => {
    const router = useRouter();

    const { data: session, status } = useSession()

    if (!session && status != "loading") {
        router.push('/login')
    }
    
    const formatCategories = (categories) => {
        const formatedCatgories = categories.map((category) => { return { id: category.id, name: category.attributes.name } })
        return formatedCatgories
    }

    const formatItems = (items) => {
        const formatedItems = items.map((item) => { return { id: item.id, type: item.attributes.type } })
        return formatedItems
    }


    return (
        <>
            <Search categories={categoriesList} />
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <SectionHeader title="Courses" subTitle="Lorem ipsum dolor sit amet" />

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-12">

                    <ul>
                        {coursesData && coursesData.map(({ id, attributes }) => (
                            <li key={id}>
                                <CourseCard
                                    id={id}
                                    title={attributes.title}
                                    description={attributes.description}
                                    price={attributes.price}
                                    available={false}
                                    categories={formatCategories(attributes.categories.data)}
                                    items={formatItems(attributes.items.data)} />
                            </li>
                        ))}

                    </ul>

                </div>
            </div>
        </>
    )
}

export default Client;