'use client'
import VideoPlayer from "./VideoPlayer"
import { FileType } from '../../types';


interface VideoElemntProps {
    title: string;
    description?: string;
    file: FileType
}


const VideoElemnt: React.FC<VideoElemntProps> = ({title, description, file}) => {
    return (
        <div className="my-8">
            <VideoPlayer title={title} description={description} file={file}/>
        </div>
    )
};

export default VideoElemnt;