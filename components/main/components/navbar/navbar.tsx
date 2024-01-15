import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Button from "./components/button";

interface navbarProps {}

const Navbar: React.FC<navbarProps> = () => {
  return (
    <nav className="bg-[#111011] h-[60px] mt-2 mr-2 rounded-t-xl w-full ">
      <div className="text-white flex justify-between p-3">
        <div className="flex flex-row gap-1">
          <div className="rounded-full bg-[#090808] p-2 ">
            <ChevronLeft />
          </div>
          <div className="rounded-full bg-[#090808] p-2 ">
            <ChevronRight />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="font-bold text-[#5a5b5a] hover:text-white  "
          >
            {" "}
            Sign up{" "}
          </Link>

          <Button buttonText="Sign In" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
