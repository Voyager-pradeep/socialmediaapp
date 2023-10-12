import "./sidebar.css";
import {
  MdRssFeed,
  MdOndemandVideo,
  MdGroups2,
  MdBookmarks,
  MdOutlineQuestionAnswer,
  MdWork,
  MdEventNote,
  SiCoursera,
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { Users } from "../../dummyData";
import Closefriend from "../closeFriend/Closefriend";

import img1 from "../../assets/person/2.jpg";
const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <MdOndemandVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <MdGroups2 className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <MdBookmarks className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineQuestionAnswer className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <MdWork className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <MdEventNote className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FaGraduationCap className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Closefriend id={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
