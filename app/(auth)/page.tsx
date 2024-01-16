import Navbar from "./components/navbar";
import AuthForm from "./components/form";


interface authPage {}

const authPage: React.FC<authPage> = () => {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-b from-[#181918] to-black h-full items-center justify-between p-10 pb-0 ">
        <AuthForm/>
      </div>
    </div>
  );
};

export default authPage;
