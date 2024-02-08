'use client'

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TestLayout from "./TestLayout";
import TestSelectItem from "./TestSelectItem";
import TestDetail from "./TestDetail";
import TestCounter from "./TestCounter";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { QuestionProps } from "./TestElement.";

interface TestElementProps {
    title: string;
    description: string;
    questions: QuestionProps[]
    currentUserId: any;
    result: number;
    maxCount: number;
}

const TestElemntClient: React.FC<TestElementProps> = ({ title, description, questions, currentUserId, result, maxCount }) => {
    const pathname = useParams();
    const router = useRouter();
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        setUserId(currentUserId.value as number)
    })
   

    const [isStarted, setIsStarted] = useState(false)

    let [questionNum, setQuestionNum] = useState(1)
    let [score, setScore] = useState(0)

    let [answer, setAnswer] = useState({
        answerSelected: false,
        answerCount: 0,
    })

    const handleAnswer = (count: number) => {
        setAnswer({
            answerSelected: true,
            answerCount: count
        })
    }

    const confirmAnswer = () => {
        if (answer.answerSelected) {
            setScore(score + answer.answerCount)
            if (questionNum < questions.length) {
                setQuestionNum(questionNum + 1);
            }
        } else if (questionNum < questions.length) {
            setQuestionNum(questionNum + 1);
        }
        setAnswer({
            answerSelected: false,
            answerCount: 0
        })
    }

    const handleFinish = async () => {
        confirmAnswer();
        if (!pathname) return;

        try {
            await axios.post('https://lmsadmin-ew58.onrender.com/api/results?populate=*',
                {
                    data: {
                        type: 'examination',
                        count: score,
                        user: userId,
                        item: pathname.lessonId
                    },
                })
            toast.success("Result updated");
            router.refresh();
        } catch (error: any) {
            toast.error("Something went wrong", error);
        }
    }

    if (result != null) {
        return (
            <TestLayout>
                <div className="flex flex-col text-center">
                    <h3 className="text-3xl font-bold mb-1 text-gray-800">The test has already been passed!</h3>
                    <h4 className="text-9xl font-bold mb-1 text-gray-400">{result}/{maxCount}</h4>
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
                        handleAnswer={handleAnswer}
                        question={questions[questionNum - 1].question}
                        count={questions[questionNum - 1].count}
                        image={questions[questionNum - 1].image}
                        answers={questions[questionNum - 1].answers}
                    />
                    :
                    <TestDetail
                        handleAnswer={handleAnswer}
                        question={questions[questionNum - 1].question}
                        count={questions[questionNum - 1].count}
                        image={questions[questionNum - 1].image}
                        answers={questions[questionNum - 1].answers}
                    />

                }

                <div className="flex  md:absolute right-8 bottom-8 space-x-5 " >

                    <Button onClick={handleFinish} label="Finish" color="text-gray-800" background={questionNum == questions.length ? 'bg-emerald-400' : 'bg-gray-300'} />

                    {questionNum == questions.length ? null : <Button onClick={confirmAnswer} label="Next" color="text-gray-800" background="bg-emerald-400" />}

                </div>
            </TestLayout>

        </>

    )
};

export default TestElemntClient;
