import Header from "./components/header";
import Library from "./components/library/library";



const Sidebar = () => {
    return ( 
    <div className="flex flex-col  h-full bg-black w-72">
        <Header/>
        <Library/>

    </div>  
    );
}
 
export default Sidebar;