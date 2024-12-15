import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsThreeDots, BsBookmarkFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import axios from "../../Axios/AxiosInstance";

const ReadListStoryItem = ({ story, editDate, getUserReadingList }) => {
  const { config, activeUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onPressBookmark = async (storySlug) => {
    try {
      await axios.post(
        `/user/${storySlug}/addStoryToReadList`,
        { activeUser },
        config
      );
      await getUserReadingList();
    } catch (error) {
      navigate("/");
    }
  };

  return (
    <div className="readList-story-item">
      <section>
        <div className="story-top-block">
          <div className="readList-story-author">{story.author.username}</div>
          <span>-</span>
          <div className="readList-story-createdAt">
            {editDate(story.createdAt)}
          </div>
          <i>
            <AiFillStar />
          </i>
        </div>

        <div className="story-med-block">
          <div className="readList-story-title">
            <a href={`story/${story.slug}`}>{story.title}</a>
          </div>
        </div>

        <div className="story-bottom-block">
          <Link to={`/story/${story.slug}`}>
            <span>Read More</span>
            <span>-</span>
            <span>{story.readtime} min read</span>
          </Link>

          <div>
            <i>
              <BsBookmarkFill onClick={() => onPressBookmark(story.slug)} />
            </i>
            <i>
              <BsThreeDots />
            </i>
          </div>
        </div>
      </section>

      <section>
        <div className="story-Image-Wrap">
          <img src={`${story.image}`} alt={story.title} width="180px" />
        </div>
      </section>
    </div>
  );
};

export default ReadListStoryItem;
