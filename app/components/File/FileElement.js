'use client'
import { UploadDropzone } from "@uploadthing/react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";


const FileElement = ({ currentUserId }) => {
    const pathname = useParams();
    const router = useRouter();
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        setUserId(currentUserId.value)
    })

    const onSubmit = async (url) => {
        
        if (!pathname) return;

        try {
            await axios.post('https://lmsadmin-ew58.onrender.com/api/results?populate=*',
                {
                    data: {
                        type: 'examination',
                        fileLink: url,
                        user: userId,
                        item: pathname.lessonId,
                        progress: 100,
                    },
                })
            toast.success("Result updated");
            router.refresh();

        } catch (error) {
            toast.error("Something went wrong", error);
        }
    };

    return (
        <div>
            <div
                className="relative inline-block focus:outline-none focus:ring w-full h-full aspect-video"
            >
                <span
                    className={`
                    h-full
                    w-full
                    absolute 
                    inset-0 
                    translate-x-1.5 
                    translate-y-1.5 
                    transition-transform 
                    bg-indigo-50
                `}
                >

                </span>

                <span
                    className={`
                    h-full
                    w-full
                    relative 
                    inline-block
                    border-2 
                    border-gray-400 

                    text-sm 
                    font-bold 
                    uppercase 
                    tracking-widest 
                    text-gray-800
                    
                `}
                >
                    <UploadDropzone
                        appearance={{
                            button: "ut-ready:bg-emerald-400 text-gray-800 ut-uploading:cursor-not-allowed  ut-uploading:bg-emerald-300 after:bg-emerald-400",
                        }}
                        className="
                        h-full 
                        ut-label:text-lg 
                        ut-readying:border-none 
                        ut-ready:border-none 
                        ut-label:text-gray-800 
                        ut-allowed-content:opacity-60
                    "
                        endpoint="pdfUploader"
                        onClientUploadComplete={(res) => {
                            onSubmit(res?.[0].url, userId)
                            toast.success("Upload Completed");

                        }}
                        onUploadError={(error) => {
                            toast.error(`Upload error!`);

                        }}

                    />


                </span>
            </div>
        </div>
    )
};

export default FileElement;