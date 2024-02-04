'use client'

import './VideoPlayer.css'
import screenfull from 'screenfull'
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

import { useHideOnMouseStop } from 'react-hide-on-mouse-stop';
import toast from 'react-hot-toast';
import { FileType } from '../../types';

interface VideoPlayerProps {
    title: string;
    description?: string;
    file: FileType;
}

const Player: React.FC<VideoPlayerProps> = ({ title, description, file }) => {
    const url = `https://admin.lms.helarman.pro${file.data.attributes.url}`

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5)
    const [muted, setMuted] = useState(false)
    const [playbackSpeed, setPlaybackSpeed] = useState(1)

    const [durationSeconds, setDurationSeconds] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);

    const playerRef = useRef() as MutableRefObject<ReactPlayer>;

    if (hasMounted) {
        return (
            <div id="target" className="w-full relative ">
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
                        playbackSpeed={playbackSpeed}
                        setPlaybackSpeed={setPlaybackSpeed}
                    />
                </div>

                <ReactPlayer
                    width="100%"
                    height="100%"
                    ref={playerRef}
                    controls={false}
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    playbackRate={playbackSpeed}
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
    playbackSpeed: number;
    setPlaybackSpeed: Dispatch<SetStateAction<number>>;
    title: string,
    description?: string,
};

const Controls = (props: ControlsProps) => {
    const [hide, onMouseEnter, onMouseLeave] = useHideOnMouseStop({ delay: 1000 });
    const onMouseMove = () => {
        const timer = setTimeout(() => {
            onMouseLeave()
        }, 1000);
        return () => clearTimeout(timer);
    }


    function formatSeconds(seconds: number) {
        var date = new Date(1970, 0, 1);
        date.setSeconds(seconds);
        return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }

    const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.playerRef.current.seekTo(+e.target.value, "seconds");
    };

    const [isFullscreen, setIsFullscreen] = useState(false)
    const element = document.getElementById('target');

    const handleClickFullscreen = () => {
        toast.success('click')
        screenfull.toggle(element as HTMLElement)
        setIsFullscreen(!isFullscreen)
    }
    const handleRange = (event: any) => {
        props.setVolume(event.target.value);
    }


    const handleChangeSpeed = () => {
        if (props.playbackSpeed === 0.5) {
            props.setPlaybackSpeed(1)
        }
        if (props.playbackSpeed === 1) {
            props.setPlaybackSpeed(1.5)
        }
        if (props.playbackSpeed === 1.5) {
            props.setPlaybackSpeed(2)
        }
        if (props.playbackSpeed === 2) {
            props.setPlaybackSpeed(0.5)
        }
    }
    return (

        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            className='h-full w-ful'
            style={hide ? { cursor: "none" } : { cursor: "pointer" }} >

            <button style={hide ? { cursor: "none" } : { cursor: "pointer" }}

                className="absolute h-full w-full  text-white z-10"
                onClick={() => props.setPlaying(!props.playing)}>
                {props.playing ?
                    null
                    :
                    <div>
                        <div className="absolute h-full w-full bg-gray-800 top-0 opacity-60 "></div>
                        <FaPlay className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                }
            </button>

            <div className={hide ? 'hidden' : 'flex'}>

                <div className="absolute w-full ">
                    <div className="flex flex-col p-4 items-left">

                        <h4 className='text-3xl font-bold text-white'>{props.title}</h4>
                        <p className='text-xl font-semibold text-white opacity-30'>{props.description}</p>
                    </div>
                </div>

                <div className="absolute w-full z-20 bottom-0 ">
                    <div className="flex items-center p-4">
                        <div className="flex pr-2">
                            <button
                                className="opacity-75 hover:opacity-100 text-white h-4 "
                                onClick={() => props.setPlaying(!props.playing)}>
                                {props.playing ? <FaPause /> : <FaPlay />}
                            </button>
                        </div>

                        <div className="group flex flex-row pr-2 items-center">
                            <button
                                className="flex opacity-75 h-4 group-hover:opacity-100 text-white pr-2"
                                onClick={() => props.setMuted(!props.muted)}>
                                {props.muted ? <FaVolumeXmark /> : <FaVolumeHigh />}
                            </button>
                            <div

                                className="
                                    cursor-pointer
                                    flex
                                    items-center
                                    apperance-none
                                    overflow-hidden 
                                    transition-all 
                                    duration-30 
                                    ease-in-out
                                    transform
                                    w-0
                                    group-hover:w-16
                                "
                            >
                                <input
                                    value={props.volume}
                                    className="slider w-full"
                                    type="range"
                                    min={0}
                                    step="any"
                                    max={1}
                                    onChange={handleRange}
                                />
                            </div>
                        </div>
                        <div className="flex pr-2">
                            <p
                                className="flex items-center text-white h-4 "

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
                                className="slider w-full"
                                type="range"
                                value={props.playedSeconds}
                                min="0"
                                step="any"
                                max={props.duration}
                                onChange={seek}
                            />
                        </div>

                        <div className="flex pr-2">
                            <button
                                onClick={handleChangeSpeed}
                                className="flex items-center opacity-75 hover:opacity-100 text-white h-4 font-bold uppercase"

                            >
                                {props.playbackSpeed}x
                            </button>
                        </div>
                        <div className="flex">
                            <button
                                className="opacity-75 hover:opacity-100 text-white  p-2"
                                onClick={handleClickFullscreen}
                            >
                                {isFullscreen ? <FaMinimize className='h-4' /> : <FaMaximize className='h-4' />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Player;