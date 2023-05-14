import React, { useState, useRef } from "react";
import "./Post.css";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Post(props) {

  const likeRef = useRef(null)
  
  const { id, user, imageURL, content, stats, date, likes } = props;
  const dateObj = new Date(date).toDateString();
  const [postLikes, setPostLikes] = useState(likes);

  const handleLikeClick = () => {
    fetch(`http://localhost:5000/like`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          postid: id
        }
      )
    })
      .then((response) => response.json())
      .then((data) => {
        setPostLikes(data.likes);
        likeRef.current.disabled = true;
      })
      .catch((error) => {
        console.error("Error liking post:", error);
      });
  };

  return (
    <div className="card">
      <div className="info row justify-content-start gx-5">
        <div className="col">
          <div className="row justify-content-start" id="username">
            <p className="my-0">{user}</p>
          </div>
          <div className="row justify-content-start" id="date">
            <p className="my-0 text-muted">{dateObj}</p>
          </div>
        </div>
      </div>
      <p className="card-text">{content}</p>
      {!(imageURL == undefined) && (
        <img src={imageURL} className="card-img-top" alt="..." />
      )}
      <div className="card-body">
        <div className="stats row justify-content-between">
          <div className="col likes">{postLikes}</div>
        </div>
        <hr />
        <div className="buttons row justify-content-evenly">
          <button className="btn  col-3" onClick={handleLikeClick} ref={likeRef}>
            <FontAwesomeIcon
              icon={faHeart}
              size="2x"
              style={{ color: "e55252" }}
            />
          </button>
          <a href="#" className="btn  col-3">
            <FontAwesomeIcon
              icon={faComment}
              size="2x"
              style={{ color: "#833cc9" }}
            />
          </a>
          <a href="#" className="btn  col-3">
            <FontAwesomeIcon
              icon={faShare}
              size="2x"
              style={{ color: "#4c7bb8" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
