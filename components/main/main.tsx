import Navbar from "./components/navbar/navbar"
import Tab from "./components/tab/page";

interface mainProps{

}

const Main: React.FC<mainProps> = () => {
    return ( 
        <div className="flex flex-col w-full">
            <Navbar/>
            <Tab/>
            
        </div>
     );
}
 
export default Main;