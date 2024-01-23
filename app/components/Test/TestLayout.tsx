'use client'

const TestLayout = ({ children }) => {
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
                        px-8 
                        py-3 
                        text-sm 
                        font-bold 
                        uppercase 
                        tracking-widest 
                        text-gray-800
                        
                    `}
            >
                <div
                    className="
                            flex 
                            justify-center 
                            items-center
                            h-full
                            w-full
                        "
                >
                    {children}
                </div>


            </span>
        </div>
    )
}

export default TestLayout;