import React, { useState, useEffect } from 'react';
import './CommentSection.css';

function CommentSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Load comments from localStorage when component mounts (visible only to you)
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('userComments')) || [];
    setComments(savedComments);
  }, []);

  // Handle comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;

    const newComments = [...comments, comment];
    setComments(newComments);
    setComment('');
    localStorage.setItem('userComments', JSON.stringify(newComments));
  };

  return (
    <div className="comment-section">
      <h2>Share Your Thoughts</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Leave a comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-input"
        />
        <button type="submit" className="submit-comment-btn">Post Comment</button>
      </form>
      

     
    
    </div>
  );
}

export default CommentSection;
