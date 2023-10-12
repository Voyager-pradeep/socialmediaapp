import "./post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import likeBtn from "../../assets/like.png";
import heartBtn from "../../assets/heart.png";
import React, { useState } from "react";
import { Users } from "../../dummyData2";
const Post2 = ({ post }) => {
  console.log(post.photo);
  const [like, setLike] = useState(post.like);
  const [isLicked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLicked ? like - 1 : like + 1);
    setIsLiked(!isLicked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/img/1.jpg" alt="" className="postProfileImg" />
            <span className="postUsername">Pradeep Das</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={likeBtn}
              alt=""
              className="likeicon"
              onClick={likeHandler}
            />
            <img
              src={heartBtn}
              alt=""
              className="likeicon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">{post.comment} comments</div>
        </div>
      </div>
    </div>
  );
};

export default Post2;
