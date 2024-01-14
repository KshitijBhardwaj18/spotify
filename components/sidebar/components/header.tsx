import Image from "next/image";
import { Home, HomeIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";


const Header = () => {
    return ( 
    <div className=" bg-[#121313]  m-2 mb-1 rounded-xl  w-full h-40 " >
        <div className="p-3 flex flex-col gap-3">
        <div className="pl-1 ">
            <Image src="/logo1.png"   className="contain pl-1" width={70} height={100} alt="logo" />
        </div>

        <div className="flex gap-2 pl-1">
            <HomeIcon className="text-white"/> 
            <p className="text-white font-bold pt-[0.2rem] ">Home</p>
        </div>

        <div className="flex gap-2 pl-1">
            <Search className="text-white"/> 
            <p className="text-white font-bold pt-[0.2rem] ">Search</p>
        </div>

        </div>
        
        
    </div> 
     );
}
 
export default Header;