'use client'
import toast from "react-hot-toast";
import { SetStateAction, useState } from "react";

interface AnswerProps {
    id: number
    text: string;
    isRight: boolean
}

interface TestSelectItemProps {
    question: string;
    count: number;
    handleAnswer: (count: number) => void;
    image: any;
    answers: AnswerProps[];
}

const TestSelectItem: React.FC<TestSelectItemProps> = ({
    question,
    handleAnswer,
    count,
    image,
    answers
}) => {

    //get right answer id
    const rightAnswer = answers && answers.find((answer: AnswerProps) => answer.isRight === true)

    //handle undefined state of righ answer
    if(rightAnswer == undefined){
        toast.error('Cannot find the right answer. Please contact the administrator via the form on the FAQ page')
    }

    //transwer data to TestElement
    const handleChange = (e: any) => { 
        if (e.target.value == rightAnswer?.id) {
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
                    <legend className="sr-only">Lorem ipsum </legend>
                    {answers && answers.map(({ id, text }) => (
                        <div key={id}>
                            <input
                                type="radio"
                                name="Answer"
                                value={id}
                                id={id.toString()}
                                className="peer hidden"
                                onClick={(e) => handleChange(e)}
                            />

                            <label
                                htmlFor={id.toString()}
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
                                <p className="text-gray-700">{text}</p>
                            </label>
                        </div>
                    ))}

                </fieldset>
            </div>


        </div>

    )
}

export default TestSelectItem;