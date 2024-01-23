'use client'

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import List from "./List";
import Code from "./Code";
import Quote from "./Quote";
import Image from "./Image";

interface getLessonProps {
    type: string;
    index?: number;
    text?: string;
}

interface LessonsArrayProps {
    heading: any,
    paragraph: any,
    link: any,
    list: any,
    code: any,
    quote: any,
    image: any,
}

const getTextElemntComponent: React.FC<getLessonProps> = ({ type, ...rest }, index) => {
    let Lesson;
    const Lessons: LessonsArrayProps = {
        heading: Heading,
        paragraph: Paragraph,
        link: Heading,
        list: List,
        code: Code,
        quote: Quote,
        image: Image,
    }

    Lesson = Lessons[type as keyof LessonsArrayProps]

    return Lesson ? <Lesson key={index} {...rest} /> : null;
};

const TextElemnt = ({ content }: { content: any }) => {
    return <div>{content.map(getTextElemntComponent)}</div>;
};



export default TextElemnt;