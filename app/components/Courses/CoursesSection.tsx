'use client'

import CourseCard from "./CourseCard";
import SectionHeader from "../Header/SectionHeader";
import EmptyState from "./EmptyState";

interface CardProps {
    id: number;
    title: string;
    description: string;
    price: number;
    categories: any;
    items: any;
}

interface CoursesSectionProps {
    title: string;
    subTitle?: string;
    cards?: CardProps[]
    results?: any;
    available: boolean;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({
    title,
    subTitle,
    cards,
    results,
    available
}) => {
    const getProgress = (id: number) => {
        const structuredResults = results.map((result: any) => { return { progress: result.attributes.progress, id: result.attributes.course.data.id } })
        const progress = structuredResults.filter((result: any) => result.id == id)[0].progress
        return progress
    }

    return (
        <div>
            <SectionHeader title={title} subTitle={subTitle} />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-12">

                <ul>
                    {cards && cards.map(({ id, title, description, price, categories, items }) => (
                        <li key={id}>
                            <CourseCard id={id} title={title} description={description} price={price} available={available} categories={categories} items={items} progress={getProgress(id)} />
                        </li>
                    ))}

                </ul>

            </div>
        </div>
    )
};

export default CoursesSection