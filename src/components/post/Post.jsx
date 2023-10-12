import "./post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import likeBtn from "../../assets/like.png";
import heartBtn from "../../assets/heart.png";
import { Users } from "../../dummyData";
import React, { useState } from "react";

const Post = ({ post }) => {
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
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
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

export default Post;
