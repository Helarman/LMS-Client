'use client'

import { useCopyToClipboard } from "@/app/hooks/useCopyToClipboard";
import { FaCopy } from "react-icons/fa";

type ItemProps ={
    type: string
    text: string
    italic?: boolean,
    bold?: boolean,
    strikethrough?: boolean,
    underline?: boolean,
    code?: boolean,
    url?: string,
    children?: any
}
interface CodeAreaProps {
    text?: string,
    children?: ItemProps[],
}

const CodeArea: React.FC<CodeAreaProps> = ({ text, children }) => {
 
    const [copiedText, copy] = useCopyToClipboard()
    const code = text ? text : children && children[0].text
    
    return (
        <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white p-4 pl-6 my-2 w-full justify-between">
            <span className="flex gap-4">
                <span className="shrink-0 text-gray-500">
                    $
                </span>

                <span className="flex-1">
                    {code}
                </span>
            </span>

            <button onClick={() => copy(code as string)}>
                <FaCopy className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white"/>
            </button>
        </code>
    )
};

export default CodeArea;