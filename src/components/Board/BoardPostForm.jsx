import React, { useState } from 'react';
import * as S from './BoardPostForm.style';
import { useNavigate } from 'react-router-dom';
import check from '../../assets/check.png';

const BoardPostForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 현재 날짜 생성
    const currentDate = new Date().toLocaleDateString();

    // 이전에 저장된 게시글 수를 가져와 새로운 Num 생성
    const prevNum = localStorage.getItem('num') || 0;
    const newNum = parseInt(prevNum) + 1;

    // 게시글 데이터를 로컬스토리지에 저장
    localStorage.setItem(
      `board_${newNum}`,
      JSON.stringify({
        num: newNum,
        name: formData.name,
        title: formData.title,
        date: currentDate,
        content: formData.content,
      })
    );

    // Num 업데이트
    localStorage.setItem('num', newNum);

    // 공지 페이지로 이동
    navigate('/notice');
  };

  return (
    <>
      <S.Form onSubmit={handleFormSubmit}>
        <S.Section>
          <S.Div>
            <S.Name
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
            />
            <S.Title
              type="text"
              name="title"
              placeholder="제목"
              value={formData.title}
              onChange={handleChange}
            />
          </S.Div>
          <S.Content
            type="text"
            name="content"
            placeholder="내용"
            value={formData.content}
            onChange={handleChange}
          />
        </S.Section>
        <S.Button type="submit">
          <strong>등록</strong> <img src={check} alt="게시글 등록 버튼 이미지" />
        </S.Button>
      </S.Form>
    </>
  );
};

export default BoardPostForm;
