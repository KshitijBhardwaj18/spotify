import Button from "./button";

interface footerProps {}

const Footer: React.FC<footerProps> = () => {
  return (
    <footer className="flex flex-col">
      <div className="grid grid-cols-3 gap-3 justify-items-center p-4 m-2 text-[#a7a6a6] text-[10px] pl-1 ml-0   ">
        {/* Add your footer content here */}
        <a href="#" className="text-gray-400 hover:text-white">
          Legal
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Privacy Center
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Cookies
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          About Ads
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Accessibility
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Cookies
        </a>
      </div>
        <div className="ml-3">
        <Button buttonText="Login"/>
        </div>

    </footer>
  );
};

export default Footer;
