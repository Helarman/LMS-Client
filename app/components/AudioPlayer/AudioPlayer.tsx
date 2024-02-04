'use client'

import './AudioPlayer.css'
import {
    Dispatch,
    SetStateAction,
    useState,
    useRef,
    MutableRefObject,
    useEffect,
} from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark, FaMaximize, FaMinimize } from "react-icons/fa6";

interface AudioPlayerProps {
    title: string,
    description?: string,
    file: any
}
const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, description, file }) => {

    const url = `https://admin.lms.helarman.pro/${file.data.attributes.url}`
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5)
    const [muted, setMuted] = useState(false)

    const [durationSeconds, setDurationSeconds] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);

    const playerRef = useRef() as MutableRefObject<ReactPlayer>;

    if (hasMounted) {
        return (
            <div className="w-full relative">
                <div className="absolute w-full h-full   ">
                    <Controls
                        title={title}
                        description={description}
                        playerRef={playerRef}
                        playing={playing}
                        setPlaying={setPlaying}
                        muted={muted}
                        setMuted={setMuted}
                        playedSeconds={playedSeconds}
                        duration={durationSeconds}
                        volume={volume}
                        setVolume={setVolume}
                    />
                </div>

                <ReactPlayer
                    width="100%"
                    height="200px"
                    ref={playerRef}
                    controls={false}
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    url={url}
                    onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
                    onSeek={setPlayedSeconds}
                    onDuration={setDurationSeconds}
                />

            </div>
        )
    }
};

type ControlsProps = {
    playing: boolean;
    setPlaying: Dispatch<SetStateAction<boolean>>;
    muted: boolean;
    setMuted: Dispatch<SetStateAction<boolean>>;
    volume: number;
    setVolume: any
    playedSeconds: number;
    duration: number;
    playerRef: MutableRefObject<ReactPlayer>;
    title: string;
    description?: string;
};

const Controls = (props: ControlsProps) => {

    function formatSeconds(seconds: number) {
        var date = new Date(1970, 0, 1);
        date.setSeconds(seconds);
        return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }

    const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.playerRef.current.seekTo(+e.target.value, "seconds");
    };

    const handleRange = (event: any) => {
        props.setVolume(event.target.value);
    }

    return (

        <div className="flex flex-col sm:flex-row md:h-full w-full bg-white border-2 border-emerald-400">

            <button
                className="relative h-full aspect-square text-gray-800 bg-emerald-400 group"
                onClick={() => props.setPlaying(!props.playing)}>
                {props.playing ?
                    <FaPause className="w-0 h-0 md:w-16 md:h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-75" />
                    :
                    <FaPlay className="w-0 h-0 md:w-16 md:h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-75" />
                }
            </button>

            <div className="w-full flex flex-col justify-between">

                <div className="flex flex-col p-4 items-left">
                    <h4 className='text-3xl font-bold text-gray-700'>{props.title}</h4>
                    <p className='text-xl font-semibold text-gray-400'>{props.description}</p>
                </div>

                <div className="flex p-4 mb-0 items-center ">
                    <div className="flex pr-2">
                        <button
                            className="opacity-75 hover:opacity-100 text-gray-800 h-4 "
                            onClick={() => props.setPlaying(!props.playing)}>
                            {props.playing ? <FaPause /> : <FaPlay />}
                        </button>
                    </div>
                    <div className="group flex flex-row  pr-2 items-center">

                        <button
                            className="flex opacity-75 h-4 group-hover:opacity-100 text-gray-800 pr-2"
                            onClick={() => props.setMuted(!props.muted)}>
                            {props.muted ? <FaVolumeXmark /> : <FaVolumeHigh />}
                        </button>
                        <div className="
                                flex
                                items-center
                                transition-all 
                                apperance-none
                                overflow-hidden 
                                duration-30 
                                ease-in-out
                                transform
                                w-0
                                group-hover:w-16
                                cursor-pointer
                              "
                        >
                            <input
                                value={props.volume}
                                className="aSlider w-full"
                                type="range"
                                min={0}
                                step="any"
                                max={1}
                                onChange={handleRange}
                            />
                        </div>
                    </div>
                    <div className="hidden lg:flex pr-2 ">
                        <p
                            className="flex flex-row items-center text-gray-800 h-4 "

                        >
                            <span className="pr-1">
                                {formatSeconds(props.playedSeconds)}
                            </span>
                            /
                            <span className="pl-1">
                                {formatSeconds(props.duration)}
                            </span>
                        </p>
                    </div>

                    <div className="flex w-full cursor-pointer pr-2">
                        <input
                            className="aSlider w-full"
                            type="range"
                            value={props.playedSeconds}
                            min="0"
                            step="any"
                            max={props.duration}
                            onChange={seek}
                        />

                    </div>
                </div>
            </div>

        </div >
    );
};

export default AudioPlayer;