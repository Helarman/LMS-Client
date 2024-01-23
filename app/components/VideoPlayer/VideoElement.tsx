'use client'
import VideoPlayer from "./VideoPlayer"



interface VideoElemntProps {
    title: string;
    description?: string;
    file: any; //later
}


const VideoElemnt: React.FC<VideoElemntProps> = ({title, description, file}) => {
    return (
        <div className="my-8">
            <VideoPlayer title={title} description={description} file={file}/>
        </div>
    )
};

export default VideoElemnt;