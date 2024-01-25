'use client'

import { useCallback, useState } from "react";
import Button from "../Button/Button";
import TestLayout from "./TestLayout";
import TestSelectItem from "./TestSelectItem";
import TestDetail from "./TestDetail";
import TestCounter from "./TestCounter";

export interface AnswerProps{
    id: number;
    text: string;
    isRight?: string
}

const FileElement = ({ title, description, questions }) => {

    const isCompleted = false;

    const [isStarted, setIsStarted] = useState(false)
    let [questionNum, setQuestionNum] = useState(1)


    const onAdd = useCallback(() => {
        if (questionNum < questions.length) {
            setQuestionNum(questionNum + 1);
        }
    }, [setQuestionNum, questionNum]);

    if (isCompleted) {
        return (
            <TestLayout>
                <div className="flex flex-col text-center">
                    <h3 className="text-3xl font-bold mb-1 text-gray-800">The test has already been passed!</h3>
                    <h4 className="text-9xl font-bold mb-1 text-gray-400">1/{questions.length}</h4>
                </div>
            </TestLayout>
        )
    }

    if (!isStarted) {
        return (
            <TestLayout>
                <Button onClick={() => setIsStarted(true)} label="Start" color="text-gray-800" background="bg-emerald-400" />
            </TestLayout>
        )
    }


    return (
        <>
            <TestLayout>
                <TestCounter current={questionNum} maximum={questions.length} />
                {questions[questionNum - 1].answerType === 'select' ?
                    <TestSelectItem
                        question={questions[questionNum - 1].question}
                        count={questions[questionNum - 1].count}
                        image={questions[questionNum - 1].image}
                        answers={questions[questionNum - 1].answers}
                    />
                    :
                    <TestDetail
                        question={questions[questionNum - 1].question}
                        count={questions[questionNum - 1].count}
                        image={questions[questionNum - 1].image}
                        answers={questions[questionNum - 1].answers}
                    />

                }

                <div className="flex  md:absolute right-8 bottom-8 space-x-5 " >

                    <Button onClick={() => { }} label="Finish" color="text-gray-800" background={questionNum == questions.length ? 'bg-emerald-400' : 'bg-gray-300'} />

                    {questionNum == questions.length ? null : <Button onClick={onAdd} label="Next" color="text-gray-800" background="bg-emerald-400" />}

                </div>
            </TestLayout>

        </>

    )
};

export default FileElement;
