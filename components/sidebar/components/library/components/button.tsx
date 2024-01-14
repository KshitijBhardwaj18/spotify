

interface buttonProps{
    buttonText: string;
    icon?: string;
}


const button: React.FC<buttonProps> = ({buttonText}) => {
    return ( 
        <button className="bg-white p-1 items-center justify-center  rounded-full text-black transition-all duration-300 transform hover:scale-110 py-2 px-4 text-sm  font-bold" style={{width: '150px'}}>
           
            {buttonText}
        </button>
     );
}
 
export default button;