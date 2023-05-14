import React, { useState } from 'react';
import './NewPost.css';

const NewPost = () => {
  const [postBody, setPostBody] = useState('');

  const handleChange = (e) => {
    setPostBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle submit
  };

  return (
    <div className="post-form-container">
      <h2 className="post-form-title">What's On Your Mind</h2>
      <form className="post-form">
        <div className="form-group">
          <label htmlFor="content"></label>
          <textarea
            className="form-control"
            id="content"
            rows="3"
            placeholder="Share your thoughts..."
            value={postBody}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="post-form-footer">
          <p className="post-form-characters">
            {postBody.length} characters {postBody.split(' ').length - 1} words
          </p>
          <button
            type="submit"
            className="post-form-submit"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
