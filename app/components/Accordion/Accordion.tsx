'use client'

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface AccordionProps {
    title: string;
    children: JSX.Element;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <article className="shadow mb-4">
            <div
                className={`
                    border-l-4 
                    ${isOpen ? 'border-emerald-400' : 'border-gray-400'} 
                `}
            >
                <header
                    onClick={toggleOpen}
                    className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
                >
                    <span className="text-grey-800 text-xl">
                        {title}
                    </span>
                    <div className="w-7 h-7 flex items-center justify-center">
                        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </header>

                <div className={isOpen ? '' : 'hidden'}>
                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                        {children}
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Accordion;