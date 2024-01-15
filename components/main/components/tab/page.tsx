import PlaylistCard from "./components/playlistCard";

const tab = () => {
    return ( 
        <div className="bg-[#1f1e1f] flex flex-col h-full mr-1 mb-2 rounded-b-xl overflow-y-auto">
            <div className="flex flex-row items-center justify-between  m-2">
                <p className="font-bold text-xl text-white hover:underline ">PlayLists</p>
                <p className="font-bold text-xs text-[#aeaeae] hover:underline ">Show all</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-2">
                <PlaylistCard url="" title="" description=""/>
            </div>


        </div>
     );
}
 
export default tab;