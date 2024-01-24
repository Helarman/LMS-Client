'use client'

import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";

export interface CategoryProps {
    id: number;
    name: string;
}

type SelectCategoryName = string

const CategoryBox = ({ categories }: { categories: CategoryProps[] }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams?.get('search')
    const category = searchParams?.get('category')

    const selectCategory = (name: SelectCategoryName) => {
        if (!search || search.trim().length === 0) {
            router.push(`/platform/courses?category=${name}`)
        }
        if (search && search.trim().length > 0) {
            router.push(`/platform/courses?search=${search}&category=${name}`)
        }
        return
    }

    const removeCategory = () => {
        if (!search || search.trim().length === 0) {
            router.push(`/platform/courses`)
        }
        if (search && search.trim().length > 0) {
            router.push(`/platform/courses?search=${search}`)
        }
    }


    return (
        <ul className="flex text-left flex-row flex-wrap w-full text-lg font-bold gap-4 cursor-pointer">
            {categories && categories.map(({ id, name }) => (
                <li
                    key={id}
                    className={`
                        ${name === category ? ' order-first' : null} 
                        ${name === category ? 'bg-emerald-200' : null} 
                        mr-2 
                        text-gray-800
                        p-1
                        inline-flex
                        items-center
                    `}
                >
                    <button
                        className="hover:opacity-75"
                        onClick={() => selectCategory(name)}
                    >
                        {name}
                    </button>
                    <button
                        className={`
                            ${name === category ? 'block' : 'hidden'} 
                            ml-1 
                            hover:opacity-75
                        `}
                        onClick={() => removeCategory()}
                    >
                        <FaXmark />
                    </button>

                </li>
            ))}
        </ul>
    )
};

export default CategoryBox;