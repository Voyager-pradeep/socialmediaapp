import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { RiEmojiStickerLine } from "react-icons/ri";
import image1 from "../../assets/img/7.jpg";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={image1} alt="" className="shareProfileImg" />
          <input className="shareInput" placeholder="What's in your mind" />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <AiFillTags className="shareIcon" style={{ color: "blue" }} />
              <span className="shareOptionText">Tags</span>
            </div>
            <div className="shareOption">
              <MdLocationPin className="shareIcon" style={{ color: "green" }} />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <RiEmojiStickerLine
                className="shareIcon"
                style={{ color: "goldenrod" }}
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share It</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
