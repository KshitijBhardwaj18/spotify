import Image from "next/image";
import PlayButton from "./playButton";


interface playlistCardProps {
    url: string;
    title: string;
    description: string;
}


const PlaylistCard: React.FC<playlistCardProps> = ({url, title, description}) => {
    return ( 
    <div className="bg-[#181919] h-[11rem] w-36 rounded-xl  p-4 hover:bg-[#292829] relative" >
        <div className="flex flex-col items-center gap-1 group ">
            <Image alt="cover" className="rounded-xl shadow-2xl" src="/cover.jpg" width={120} height={140} />
            <p className="text-white font-bold text-xs items-start ">In your dreams</p>
            <p className="text-[#414041] text-[0.4rem] font-bold ">
                Songs that make you call her
            </p>
            <div className="hidden group-hover:block absolute top-24 right-7 ">
            <PlayButton/>
            </div>
        </div>

        

    </div>
     );
}
 
export default PlaylistCard;