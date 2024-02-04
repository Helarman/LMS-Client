'use client'

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { FaArrowRightFromBracket } from "react-icons/fa6";

interface HeaderProps {
    name: string | null | undefined
}

const Header: React.FC<HeaderProps> = ({
    name
}) => {
    const router = useRouter()
    return (

        <header className="bg-indigo-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, {name}!</h1>
                    </div>
                    <div className=" flex flex-wrap justify-start  gap-4">
                        < button
                            className="uppercase px-2 py-2.5 font-medium text-black hover:opacity-75 tracking-widest"
                            onClick={() => signOut()}
                        >
                            <span className="sr-only">SignOut</span>
                            <FaArrowRightFromBracket className="w-10 h-10"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )

};

export default Header