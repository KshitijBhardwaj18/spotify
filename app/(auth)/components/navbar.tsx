import Image from "next/image";

const Navbar = () => {
    return ( <div className="h-[6rem] w-full bg-black flex flex-row items-center justify-between ">
         <Image src="/logo1.png"   className="contain pl-1" width={120} height={100} alt="logo" />
         
    </div> );
}
 
export default Navbar;