import React, { useState } from 'react';

const BoardForm = ({ onPostSubmit }) => {
  const [formData, setFormData] = useState({ name: '', title: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 게시글 데이터를 생성
    const newPost = {
      name: formData.name,
      title: formData.title,
      date: new Date().toLocaleDateString(),
      views: 0,
    };

    // 게시글 작성 완료 후 부모 컴포넌트로 데이터 전달
    onPostSubmit(newPost);

    // 폼 초기화
    setFormData({
      name: '',
      title: '',
    });
  };
  return (
    <>
      <h2>게시글 작성</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={formData.title}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default BoardForm;
