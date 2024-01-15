import { Play } from "lucide-react";

const PlayButton = () => {
    return ( 
    <button className="bg-[#1fd761] p-1 items-center justify-center hover:  rounded-full relative inline-block overflow-hidden transition-all duration-300 hover:bg-[#1edf65]  ">
        <Play className="h-[20px] pl-[0.1rem] " style={{ fill: 'black' }}/>
    </button>  );
}
 
export default PlayButton;