'use client'

import { useRouter } from "next/navigation";
import Button from "../Button/Button";

const Header = () => {
    const router = useRouter()
    return (
        <section className="bg-emerald-400 text-black">

            <div className="mx-auto max-w-screen-xl px-4 py-32 md:flex justify-between lg:h-screen lg:items-center">
                <div className="text-left w-6/12">
                    <h1
                        className="w-10/12 text-3xl font-extrabold sm:text-5xl"
                    >
                        Online learning platform
                    </h1>

                    <p className=" w-10/12 mt-4 sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-start gap-4">
                        <Button color={'text-black'} background={'bg-yellow-400'} label="Get Started" disabled={false} onClick={() => router.push('/platform')} />
                    </div>
                </div>

                <div className="text-right w-6/12">
                    <img src="/head.png" alt="" className="w-full" />

                </div>
            </div>
        </section>

    )
};

export default Header;