import getResult from "@/app/actions/getFaq";
import TestElemntClient from "./TestElementClient";

interface TestElementProps {
    title: string;
    description: string;
    questions: any;
    currentUserId: any;
    result: any
}

const TestElement: React.FC<TestElementProps> = async ({ title, description, questions, currentUserId }) => {
    const result = await getResult()
    const maxCount = questions && questions.map((question: any) => { return question.count }).reduce((acc: number, number: number) => acc + number);
    return (
        <>
            <TestElemntClient title={title} description={description} questions={questions} currentUserId={currentUserId} result={result} maxCount={maxCount}/>
        </>
    )
};

export default TestElement;
