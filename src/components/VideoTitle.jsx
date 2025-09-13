import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-full aspect-video pt-[20%] px-[5%] absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl mb-3 font-bold">{title}</h1>
            <p className="text-base mb-6 w-1/3">{overview}</p>
            <div className="flex gap-3 items-center justify-start">
                <button className="bg-white w-28 py-2 rounded-md text-black font-bold text-base flex items-center justify-center gap-2"><FaPlay size={14} /> <span>Play</span></button>
                <button className="bg-gray-400 w-32 py-2 rounded-md text-white font-bold text-base flex items-center justify-center gap-2"><CiCircleInfo size={18} color="white" fontWeight={"bold"} /><span>More Info</span></button>
            </div>
        </div>
    )
}

export default VideoTitle