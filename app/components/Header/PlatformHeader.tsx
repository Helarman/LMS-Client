'use client'

import { useRouter } from "next/navigation";
import Button from "../Button/Button";

interface HeaderProps {
    name: string | null | undefined
}

const Header: React.FC<HeaderProps> = ({
    name
}) => {
    const router = useRouter()
    return (

        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, {name}!</h1>
                    </div>
                    <div className=" flex flex-wrap justify-start  gap-4">
                        <Button color={'text-black'} background={'bg-emerald-400'} label="Сontinue studying" disabled={false} onClick={() => router.push('/platform')} />
                    </div>
                </div>
            </div>
        </header>
    )

};

export default Header