'use client'
import { useHasMounted } from "@/app/hooks/useHasMounted";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const Navbar = ({ pathname }: { pathname: string | null }) => {
    
    const router = useRouter();
    const hasMounted = useHasMounted();
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        if (pathname && pathname?.length < 2) {
            setIsHomePage(true)
        }
    });

    const { data: session } = useSession()

    return (
        <div className={`
            ${isHomePage ? null : 'bg-emerald-400'}
            absolute 
            w-full 
            `}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-black uppercase " href="/">
                             Logotype
                        </a>
                    </div>


                    <div className="flex items-center gap-4 ">

                        <div className="sm:flex sm:gap-4">
                            {hasMounted && session ?
                                <>
                                    < button
                                        className="uppercase  py-2.5 font-medium text-black hover:opacity-75 tracking-widest"
                                        onClick={() => router.push('/platform')}
                                    >
                                        Platform
                                    </button>
                                    < button
                                        className="uppercase px-2 py-2.5 font-medium text-black hover:opacity-75 tracking-widest"
                                        onClick={() => signOut()}
                                    >
                                        Logout
                                    </button>
                                </>
                                :
                                < button
                                    className="uppercase px-2 py-2.5 font-medium text-black hover:opacity-75 tracking-widest"
                                    onClick={() => signIn('google')}
                                >
                                    Login
                                </button>
                            }
                        </div>

                        
                    </div>
                </div>
            </div >
        </div>
    )
};

export default Navbar