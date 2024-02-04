'use client'

import { ImageType } from "@/app/types";
import toast from "react-hot-toast";

interface AnswerProps {
    id: number
    text: string;
    isRight: boolean
}

interface TestDetailItemProps{
    question: string;
    count: number;
    handleAnswer: (count: number) => void;
    image: ImageType;
    answers: AnswerProps[]
}


const TestDetailItem: React.FC<TestDetailItemProps> = ({
    question,
    handleAnswer,
    count,
    image,
    answers
}) => {
    //get right answer
    const rightAnswer = answers && answers.find((answer: AnswerProps) => answer.isRight === true)

    //handle undefined state of righ answer
    if(rightAnswer == undefined){
        toast.error('Cannot find the right answer. Please contact the administrator via the form on the FAQ page')
    }

    //transwer data to TestElement
    const handleChange = (e: any) => { 
        if (e.target.value.toLowerCase() === rightAnswer?.text.toLowerCase()) {
            handleAnswer(count);
        }
        return;
    };

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
                <h3 className="text-2xl">{question}</h3>
                <fieldset className="space-y-4 w-full">
                    <legend className="sr-only">{question}</legend>

                    <div>
                        <div className="flex bg-white outline-none w-full cursor-text">
                            <label
                                htmlFor="Search"
                                className="relative w-full block overflow-hidden pt-3 h-36"
                            >
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    id="Answer"
                                    placeholder="Answer"
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
                                    Answer
                                </span>

                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>

          
        </div>

    )
}

export default TestDetailItem;