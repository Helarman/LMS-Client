'use client'
import { AnswerProps } from "./TestElement";

interface TestSelectItemProps {
    question: string;
    count: number;
    image: any;
    answers: AnswerProps[];
}

const TestSelectItem: React.FC<TestSelectItemProps> = ({
    question,
    count,
    image,
    answers
}) => {
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
                                name="DeliveryOption"
                                value={id}
                                id={id.toString()}
                                className="peer hidden"

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