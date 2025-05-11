import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messageContainer/MessageContainer.jsx";
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] h-[400px] rounded-lg overflow-hidden bg-gray-400/10 backdrop-blur-lg bg-clip-padding ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
