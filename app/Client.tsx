'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

const Client = () => {
    const router = useRouter();

    const { data: session, status } = useSession()

    if (!session) {
        router.push('/login')

    }

    return (
        <div className="hero">
            <div className="navbar">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        signOut();
                    }}
                >
                    Sign Out
                </button>
            </div>
            <div className="text">
                <p>Signed in as {session.user.email}</p>
                <p>Signed in as {session.user.name}</p>
                Hello world
            </div>
        </div>
    );
};
export default Client;