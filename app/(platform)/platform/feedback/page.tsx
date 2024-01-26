'use client'

import Button from "@/app/components/Button/Button";
import SectionHeader from "@/app/components/Header/SectionHeader"
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const FeedbackPage = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value)
    }

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const onSubmit = async () => {
        if(!message || !subject){
            toast.error("Error! One or more fields are empty");
            return
        }
        try {
            await axios.post('http://127.0.0.1:1337/api/tickets?populate=*',
                {
                    data: {
                        email: session?.user?.email,
                        text: message,
                        subject: subject,

                    },
                })
            toast.success("Message sent");
            router.refresh()
        } catch (error: any) {
            toast.error("Something went wrong", error);
        }
    };

    return (
        <div className="w-full">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <SectionHeader title="Feedback page" subTitle="Lorem ipsum dolor sit amet" />
                <div className="flex flex-col bg-white outline-none w-full cursor-text 0 ">
                    <form onSubmit={onSubmit} className="w-full">
                        <label
                            htmlFor="Subject"
                            className="relative w-full block overflow-hidden pt-3 border-2 border-gray-400 mb-5"
                        >
                            <input
                                required
                                onChange={handleSubject}
                                type="text"
                                id="Subject"
                                placeholder="Subject"
                                className="
                                        w-full h-full
                                        peer  
                                         w-full
                                        border-none 
                                        bg-transparent 
                                        p-4
                                        placeholder-transparent
                                        focus:border-transparent 
                                        focus:outline-none 
                                        focus:ring-0 
                                        sm:text-sm
                                    "
                            />

                            <span
                                className="
                                        cursor-text
                                        pl-4 
                                        font-bold 
                                        text-sm   
                                        absolute 
                                        start-0 
                                        top-2 
                                        -translate-y-1/2  
                                        text-gray-700 
                                        uppercase 
                                        transition-all 
                                        peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:text-sm 
                                        peer-focus:top-2 
                                        peer-focus:text-xs"
                            >
                                Subject
                            </span>
                        </label>

                        <label
                            htmlFor="Message"
                            className="relative w-full block overflow-hidden pt-3 h-56 border-2 border-gray-400  mb-5"
                        >
                            <input
                                required
                                onChange={handleMessage}
                                type="text"
                                id="Message"
                                placeholder="Message"
                                className="
                                        w-full h-full
                                        peer  
                                         w-full
                                        border-none 
                                        bg-transparent 
                                        p-4
                                        placeholder-transparent
                                        focus:border-transparent 
                                        focus:outline-none 
                                        focus:ring-0 
                                        sm:text-sm
                                    "
                            />

                            <span
                                className="
                                        cursor-text
                                        pl-4 
                                        font-bold 
                                        text-sm   
                                        absolute 
                                        start-0 
                                        top-2 
                                        -translate-y-1/2  
                                        text-gray-700 
                                        uppercase 
                                        transition-all 
                                        peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:text-sm 
                                        peer-focus:top-2 
                                        peer-focus:text-xs"
                            >
                                Message
                            </span>

                        </label>
                    </form>
                </div>
                <div className="text-right w-full">
                    <Button label="Submit" onClick={onSubmit} color="text-gray-800" background="bg-emerald-400" />
                </div>
            </div>
        </div>
    )
};

export default FeedbackPage;