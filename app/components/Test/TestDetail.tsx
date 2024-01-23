'use client'

import Button from "../Button/Button";

const TestSelectItem = ({ }) => {
    return (
        <div
            className="
                w-full 
                h-full 
                flex 
                flex-col 
                justify-center
            "
        >


            <div className="flex flex-col w-full ">
                <h3 className="text-2xl">Which came first: the chicken or the egg?</h3>
                <fieldset className="space-y-4 w-full">
                    <legend className="sr-only">Lorem ipsum </legend>

                    <div>
                        <div className="flex bg-white outline-none w-full cursor-text">
                            <label
                                htmlFor="Search"
                                className="relative w-full block overflow-hidden pt-3 h-36"
                            >
                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search"
                                    className="
                                        
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
                                    Answer
                                </span>

                            </label>то
                        </div>
                    </div>
                </fieldset>
            </div>

          
        </div>

    )
}

export default TestSelectItem;