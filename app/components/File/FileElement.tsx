'use client'
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@/app/utils/uploadthing";
import toast from "react-hot-toast";

const FileElement = ({ }) => {
    return (
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
                <UploadDropzone<OurFileRouter>
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
                        toast.success(res?.[0].url);
                        toast.success("Upload Completed");
                        
                    }}
                    onUploadError={(error: Error) => {
                        toast.error(`Upload error!`);
                        
                    }}
                   
                />


            </span>
        </div>
    )
};

export default FileElement;