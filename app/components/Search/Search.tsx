'use client'

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import CategoryBox, { CategoryProps } from "./CategoryBox";
import { useState } from "react";



const Search = ({ categories }: { categories: CategoryProps[] }) => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const category = searchParams?.get('category')

    const [query, setQuery] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const onSearch = () => {
        if (query.trim().length < 1) {
            router.push(`/platform/courses?category=${category}`)
        }
        if (!category || category.trim().length === 0) {
            router.push(`/platform/courses?search=${query}`)
        }
        if (query.trim().length > 0 && category && category.trim().length > 0) {
            router.push(`/platform/courses?search=${query}&category=${category}`)
        }
        return
    }

    return (
        <search className="bg-indigo-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex items-center  justify-between mb-6">

                    <div className="flex bg-white p-4 w-full space-x-4 border-2 mr-3 
                    border-current ">

                        <div className="flex bg-white outline-none w-full">
                            <form onSubmit={onSearch}>
                                <label
                                    htmlFor="Search"
                                    className="relative w-full block overflow-hidden pt-3"
                                >
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="Search"
                                        placeholder="Search"
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />

                                    <span
                                        className="font-bold  absolute start-0 top-2 -translate-y-1/2  text-gray-700 uppercase transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                    >
                                        SEARCH
                                    </span>
                                </label>
                            </form>
                        </div>

                        <Button icon={FaSearch} label="Search" onClick={onSearch} color="text-black" background="bg-emerald-400" />

                    </div>


                </div>

                <CategoryBox categories={categories} />
            </div>
        </search>
    )

};

export default Search;