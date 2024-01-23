'use client'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type ChildrenProps ={
    type: string
    text: string
}

const Quote = ({children} : {children: ChildrenProps[]}) => {
    return (
        <blockquote className="flex flex-col justify-end text-center text-xl font-semibold text-gray-900 my-2 bg-indigo-50 p-3">
            <FaQuoteLeft className="w-8 h-8 text-gray-400 mb-4" />

            <p >
                {children[0].text}    
            </p>

            <div className="flex justify-end">
                <FaQuoteRight className=" w-8 h-8 text-gray-400 mt-4" />
            </div>
        </blockquote>
    )
}

export default Quote;