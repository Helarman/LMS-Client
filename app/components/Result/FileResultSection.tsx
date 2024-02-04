'use client'

import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa6";
import FileResultCard from "./FileResultCard";
import ProgressBar from "../Courses/ProgressBar";
import { useState } from "react";

const FileResultSection = ({ title, results }) => {

    const [isAllShown, setIsAllShown] = useState(false)

    const toggleIsAllShown = () => {
        setIsAllShown(!isAllShown)
    }

    if (!results) {
        return null;
    }

    return (
        <div className="mb-16">
            <div
                onClick={toggleIsAllShown}
                className="mb-6 px-4 flex flex-wrap  justify-between items-center cursor-pointer hover:opacity-75">
                <div className="relative w-full lg:w-8/12 text-left">
                    <h3 className="text-2xl font-bold mb-1 text-gray-700">{title}</h3>
                </div>
                {results.length > 6 ?
                    isAllShown ? <FaAngleUp className="w-6 h-6" /> : <FaAngleDown className="w-6 h-6" />
                    : null
                }
            </div>
            {isAllShown && results.length > 6 ?
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
                    {results && results.map(({ id, attributes }) => (
                        <div key={id}>
                            <FileResultCard count={attributes.count} item={attributes.item} />
                        </div>
                    ))}

                </div>
                :
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
                    {results && results.slice(0, 5).map(({ id, attributes }) => (
                        <div key={id}>
                            <FileResultCard count={attributes.count} item={attributes.item} />
                        </div>
                    ))}
                    {results.length > 6 ?
                        <div className="blur-sm ">
                            <div className="absolute z-10 w-full h-full"></div>
                            <FileResultCard count={results[6].attributes.count} item={results[6].attributes.item} />
                        </div>
                        : null
                    }
                </div>
            }
        </div>
    )
}

export default FileResultSection;