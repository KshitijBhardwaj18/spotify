import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";


const library = () => {
  return (
    <div className="w-full flex flex-col m-2 mt-0 h-full rounded-xl bg-[#121313] text-white">
        <Header/>
        <div className="h-[13rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
        <Card header="Create your first playlist" description="It's easy, we'll help you" buttonText="Create playlist"/>

        <Card header="Lets find some songs that you might like" description="Lets Catch the beat" buttonText="Search"/>

        </div>

        <Footer/>
        



    </div>
  );
};

export default library;
