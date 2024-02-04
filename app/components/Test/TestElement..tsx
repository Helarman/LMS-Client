import getResult from "@/app/actions/getResultById";
import TestElemntClient from "./TestElementClient";
import { ImageType } from "@/app/types";
import { AnswerProps } from "./TestSelectItem";

export interface QuestionProps {
    id: number;
    question: string;
    count: number;
    answerType: string;
    image: ImageType;
    answers: AnswerProps[]
}

interface TestElementProps {
    title: string;
    description: string;
    questions: any;
    currentUserId: number;
    result: any
}

const TestElement: React.FC<TestElementProps> = async ({ title, description, questions, currentUserId }) => {
    const result = await getResult()
    const maxCount = questions && questions.map((question: any) => { return question.count }).reduce((acc: number, number: number) => acc + number);
    return (
        <>
            <TestElemntClient title={title} description={description} questions={questions} currentUserId={currentUserId} result={result} maxCount={maxCount} />
        </>
    )
};

export default TestElement;
