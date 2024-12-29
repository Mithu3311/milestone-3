"use client";

import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="space-y-2">
        {comments.map((c, index) => (
          <div
            key={index}
            className="bg-gray-100 p-2 rounded shadow-md text-gray-800"
          >
            {c}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
