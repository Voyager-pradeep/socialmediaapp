import "./topbar.css";
import { FaSistrix, FaUser } from "react-icons/fa6";
import { PiChatsFill } from "react-icons/pi";
import { AiFillNotification } from "react-icons/ai";
import image1 from "../../assets/img/7.jpg";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            5ocial
          </Link>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSistrix className="searchBarFa" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "500",
              }}
            >
              Homepage
            </Link>
          </span>

          <span className="topbarLink">
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "500",
              }}
            >
              timeline
            </Link>
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUser className="noti-item" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <PiChatsFill className="noti-item" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <AiFillNotification className="noti-item" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/home2">
          <img src={image1} alt="bush" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
