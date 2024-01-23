import TextElement from "@/app/components/TextElement/TextElement";
import VideoElement from "@/app/components/VideoPlayer/VideoElement";
import AudioElement from "@/app/components/AudioPlayer/AudioElement";
import TestElement from "@/app/components/Test/TestElement";
import FileElement from "@/app/components/File/FileElement";

interface getLessonProps {
    __component: string;
    index?: number;
    text?: string;
}

interface LessonsArrayProps {
    audio: any
    video: any
    text: any
    test: any
    file: any
}

const getLessonComponent: React.FC<getLessonProps> = ({ __component, ...rest }, index) => {
    let Lesson;
    
    const key = __component
        .replace('lessons.', '')
        .replace('examinations.', '')
        
    const Lessons: LessonsArrayProps = {
        audio: AudioElement,
        video: VideoElement,
        text: TextElement,
        test: TestElement,
        file: FileElement,
    }

    Lesson = Lessons[key as keyof LessonsArrayProps]

    return Lesson ? <Lesson key={index} {...rest} /> : null;
};

const LessonManager = ({ elements }: { elements: any }) => {
    return <div>{elements.map(getLessonComponent)}</div>;
};

LessonManager.defaultProps = {
    Lessons: [],
};

export default LessonManager;