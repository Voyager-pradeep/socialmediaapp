import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed2 from "../../components/feed/Feed2";
import Rightbar2 from "../../components/rightbar/Rightbar2";
import "./home.css";

const Home2 = () => {
  return (
    <div>
      <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed2 />
          <Rightbar2 />
        </div>
      </>
    </div>
  );
};

export default Home2;
