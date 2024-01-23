'use client'

import AudioPlayer from "./AudioPlayer"

interface AurdioElementProps {
    title: string;
    description?: string;
    file: any; //later
}

const AudioElement: React.FC<AurdioElementProps> = ({ title, description, file}) => {
    
    return (
        <div className="my-8">
            <AudioPlayer title={title} description={description} file={file}/>
        </div>
    )
};

export default AudioElement;