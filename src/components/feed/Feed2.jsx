import Share from "../share/Share";
import Post2 from "../post/Post2";
import "./feed.css";
import { Posts } from "../../dummyData2";
const Feed2 = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post2 key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed2;
