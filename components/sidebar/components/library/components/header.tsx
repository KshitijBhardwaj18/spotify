import Image from "next/image";
import {LibraryBig} from "lucide-react";
import { Plus } from "lucide-react";

const header = () => {
    return ( 
        <div className="flex justify-between p-3 sticky">
            <div className="flex flex-row gap-1 text-[#a7a6a6] hover:text-white ">
                <LibraryBig/>
                <p className="flex flex-row  group:on-hover:text-black font-bold">Your Library</p>
            </div>

            <div className="text-[#a7a6a6] hover:rounded-full hover:bg-[#181918] hover:text-white " >
                <Plus/>
            </div>
        </div>
     );
}
 
export default header;