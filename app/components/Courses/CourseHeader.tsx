'use client'

import Button from "../Button/Button";

interface CourseHeaderProps{
    title: string;
    description: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
    title,
    description,
}) => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" >
            <div className="overflow-hidden bg-indigo-50 sm:grid sm:grid-cols-2">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                           {title}
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            {description}
                        </p>

                        <div className="mt-4 md:mt-8">
                            <Button onClick={() => { }} label="Start" color="text-black" background="bg-emerald-400" />
                        </div>
                    </div>
                </div>

                <img
                    alt="Student"
                    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full object-cover sm:h-full"
                />
            </div>
        </section>
    )
}

export default CourseHeader;