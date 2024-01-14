import NavBar from "./components/navbar.tsx"

interface mainProps{

}

const Main: React.FC<mainProps> = () => {
    return ( 
        <div className="flex felx row w-full">
            <NavBar/>
            
        </div>
     );
}
 
export default Main;