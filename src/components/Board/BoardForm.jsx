import React, { useState } from 'react';
import * as S from './BoardForm.style';
import check from '../../assets/check.png';

const BoardForm = ({ onPostSubmit }) => {
  const [formData, setFormData] = useState({ name: '', title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 게시글 데이터를 생성
    const newPost = {
      name: formData.name,
      title: formData.title,
    };

    // 게시글 작성 완료 후 부모 컴포넌트로 데이터 전달
    onPostSubmit(newPost);

    // 폼 초기화
    setFormData({
      name: '',
      title: '',
      content: '',
    });
  };
  return (
    <>
      <S.Form onSubmit={handleFormSubmit}>
        <S.Section>
          <S.Div1>
            <S.Name
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleInputChange}
            />
            <S.Title
              type="text"
              name="title"
              placeholder="제목"
              value={formData.title}
              onChange={handleInputChange}
            />
          </S.Div1>

          <S.Content
            type="text"
            name="content"
            placeholder="내용"
            value={formData.content}
            onChange={handleInputChange}
          />
        </S.Section>
        <S.Button type="submit">
          <strong>등록</strong> <img src={check} alt="게시글 등록 버튼 이미지" />
        </S.Button>
      </S.Form>
    </>
  );
};

export default BoardForm;
