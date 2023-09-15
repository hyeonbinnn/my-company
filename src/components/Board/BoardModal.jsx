import React from 'react';

const BoardModal = ({ post, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{post.title}</h2>
        <p>작성자: {post.name}</p>
        <p>날짜: {post.date}</p>
        <p>조회수: {post.views}</p>
        {/* 게시글 내용 및 상세 정보 표시 */}
      </div>
    </div>
  );
};

export default BoardModal;
