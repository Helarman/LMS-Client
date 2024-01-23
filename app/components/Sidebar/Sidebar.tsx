'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { FaHouse, FaTable, FaBook, FaBookBookmark, FaClipboardQuestion   } from "react-icons/fa6";

import MenuItem from "./MenuItem";

const NavLinks = [
    { label: 'Home', link: '/', icon: FaHouse },
    { label: 'Overview', link: '/platform', icon: FaTable },
    { label: 'Your courses', link: '/platform/courses/available', icon: FaBookBookmark },
    { label: 'Courses', link: '/platform/courses', icon: FaBook  },
    { label: 'FAQ', link: '/faq', icon: FaClipboardQuestion },
]

const Sidebar = ({

}) => {

    const router = useRouter();
    const year = new Date().getFullYear()

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen)

    }


    return (
        <>
            <div
                className={`
                ${isSidebarOpen ? 'hidden' : ''} 
                md:hidden 
                bg-emerald-400
                fixed 
                z-[1000] 
                w-8 
                h-8 
                p-1 
                m-3
            `}
            >
                <button
                    onClick={toggleSidebar}
                    type="button"
                >
                    <span className="sr-only">
                        Open sidebar
                    </span>

                    <AiOutlineMenuUnfold className="w-6 h-6 text-white" />
                </button>
            </div>

            <nav
                className={`
                block 
                
                
                top-0 
                bottom-0 
                w-80     
                bg-white
                dark:bg-[#1E2746]
                shadow-xl 
                left-0 
                fixed

                flex-row 
                flex-nowrap 
                md:z-10 
                z-[100] 
                transition-all 
                duration-300 
                ease-in-out
                transform
                ${isSidebarOpen ? `` : `md:translate-x-0 -translate-x-full`}
            `}
            >
                <div
                    className="
                    flex-col
                    min-h-full 
                    px-0 
                    flex 
                    flex-wrap 
                    items-center 
                    justify-between 
                    w-full 
                    mx-auto 
                    overflow-y-auto 
                    overflow-x-hidden
                "
                >
                    <div
                        className="
                        flex 
                        bg-white
                        dark:bg-[#1E2746]
                        dark:text-white
                        flex-col 
                        items-stretch 
                        opacity-100  
                        relative 
                        overflow-y-auto 
                        overflow-x-hidden 
                        h-auto z-40 
                        items-center
                        flex-1 
                        w-full
                        mb-auto
                        
                    "
                    >
                        <div
                            onClick={() => router.push('/')}
                            className="
                                py-4
                                bg-emerald-400
                                px-10
                                md:flex 
                                
                                justify-between 
                                mr-0 
                                inline-flex 
                                whitespace-nowrap  
                                px-0
                            "
                        >
                            <button className="uppercase text-lg items-center tracking-widest font-bold">
                                LMS Platform

                            </button>

                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className=" justify-end md:hidden"
                            >
                                <span className="sr-only">
                                    Open sidebar
                                </span>

                                <AiOutlineMenuFold className="w-6 h-6" />
                            </button>
                        </div>

                        <div
                            className="
                            md:flex-col
                            md:min-w-full 
                            flex 
                            flex-col 
                            list-none
                        "
                        >

                            <div className="md:min-w-full">
                                <ul >

                                    {NavLinks && NavLinks.map(({ label, link, icon }) => (
                                        <MenuItem key={label} label={label} link={link} icon={icon}/>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <div className="">
                            <div className="w-full flex flex-col">
                                <div className=" flex flex-row mb-2 justify-start ">
                                    <div className="text-sm text-gray-500 font-semibold py-1 text-left">
                                        <button className='text-gray-500 hover:opacity-75' onClick={() => router.push('/')}>LMS Platform</button> © {year}
                                        <span className='ml-3'>by <a target="_blank" href='https://helarman.pro' className='text-emerald-400 hover:opacity-75'>helarman</a></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;