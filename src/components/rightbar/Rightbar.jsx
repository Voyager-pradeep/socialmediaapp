import "./rightbar.css";
import birthday from "../../assets/gift.png";
import ad from "../../assets/3896.jpeg";
import image1 from "../../assets/person/3.jpg";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { BsGlobeAmericas, BsPersonWorkspace } from "react-icons/bs";
import { FaMountainCity, FaLocationDot } from "react-icons/fa6";
import { TbCirclesRelation } from "react-icons/tb";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={birthday} alt="" />
          <span className="birthdayText">
            <b>Guddu Raja</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <a href="http://www.myntra.com" target="_blank">
          <img className="rightbarAd" src={ad} alt="" />
        </a>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              <FaMountainCity className="info-icon" />
              City:
            </span>
            <span className="rightbarInfoValue">Bangalore, India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              <FaLocationDot className="info-icon" />
              From:
            </span>
            <span className="rightbarInfoValue">Guwahati, Karnataka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              <BsPersonWorkspace className="info-icon" />
              Worked at:
            </span>
            <span className="rightbarInfoValue">Cadd Nest Pvt Ltd</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              <TbCirclesRelation className="info-icon" />
              Relationship:
            </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              <BsGlobeAmericas className="info-icon" />
            </span>
            <span className="rightbarInfoValue">
              <a href="https://voyager-pradeep.netlify.app" target="_blank">
                https://voyager-pradeep.netlify.app
              </a>
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mahesh Yadav</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/7.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Pratibha Devi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tinku Singh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Chota Zayn</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sankar Pandit</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/8.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Kristen Thomas</span>
          </div>
        </div>
        <a href="https://www.flipkart.com/" target="_blank">
          <img className="rightbarAd" src={ad} alt="" />
        </a>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
