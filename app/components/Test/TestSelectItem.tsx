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
            <div className=" absolute right-8 top-8 space-x-5 " >

                <div className="hidden md:block h-44 w-44">

                    <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth="2"></circle>

                        <g className="origin-center -rotate-90 transform">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-emerald-400 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="80"></circle>
                        </g>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-4xl font-bold text-gray-600">
                            2/10
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full ">
                <h3 className="text-2xl">Which came first: the chicken or the egg?</h3>
                <fieldset className="space-y-4 w-full">
                    <legend className="sr-only">Lorem ipsum </legend>

                    <div>
                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryStandard"
                            id="DeliveryStandard"
                            className="peer hidden"

                        />

                        <label
                            htmlFor="DeliveryStandard"
                            className="
                    
                                flex 
                                cursor-pointer 
                                items-center 
                                justify-between 
                                border 
                                border-gray-100 
                                bg-white 
                                p-4 
                                text-sm 
                                font-medium 
                                hover:border-gray-200 
                                peer-checked:border-emerald-400
                                peer-checked:ring-1 
                                peer-checked:ring-emerald-400
                            "
                        >
                            <p className="text-gray-700">Answer</p>
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryPriorityu"
                            id="DeliveryPriorityu"
                            className="peer hidden"
                        />

                        <label
                            htmlFor="DeliveryPriorityu"
                            className="
                                flex 
                                cursor-pointer 
                                items-center 
                                justify-between 
                                border 
                                border-gray-100 
                                bg-white 
                                p-4 
                                text-sm 
                                font-medium 
                                hover:border-gray-200 
                                peer-checked:border-emerald-400
                                peer-checked:ring-1 
                                peer-checked:ring-emerald-400
                        "
                        >
                            <p className="text-gray-700">Answer</p>

                        </label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryPriority"
                            id="DeliveryPriority"
                            className="peer hidden"
                        />

                        <label
                            htmlFor="DeliveryPriority"
                            className="
                        flex 
                        cursor-pointer 
                        items-center 
                        justify-between 
                        border 
                        border-gray-100 
                        bg-white 
                        p-4 
                        text-sm 
                        font-medium 
                        hover:border-gray-200 
                        peer-checked:border-emerald-400
                        peer-checked:ring-1 
                        peer-checked:ring-emerald-400
                "
                        >
                            <p className="text-gray-700">Answer</p>

                        </label>
                    </div>
                </fieldset>
            </div>

            <div className="flex  md:absolute right-8 bottom-8 space-x-5 " >

                <Button onClick={() => { }} label="Finish" color="text-gray-800" background="bg-gray-300" />

                <Button onClick={() => { }} label="Next" color="text-gray-800" background="bg-emerald-400" />
            </div>
        </div>

    )
}

export default TestSelectItem;