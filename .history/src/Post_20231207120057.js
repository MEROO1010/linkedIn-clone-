import { Avatar } from "@mui/material";
import InputOption from "../InputOption/InputOption";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = ({ name, description, message, photourl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photourl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={ChatBubbleOutlineIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;