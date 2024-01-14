import Button from "./button";


interface cardProps{
    header: string;
    description: string;
    buttonText: string;
}

const Card: React.FC<cardProps> = ({header,description,buttonText} ) => {
    return ( 
    <div className="flex flex-col p-5 bg-[#242525] rounded-xl m-2  gap-5">
        <p className="font-bold text-white ">{header}</p>
        <p className="text-white text-xs ">
            {description}
        </p>
        <Button buttonText={buttonText} />

        


        
    </div> );
}
 
export default Card;