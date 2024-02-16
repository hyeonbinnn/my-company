import React from 'react';
import Error from './../../components/Error/Error';

const Error404 = () => {
  return (
    <Error
      title="Error 404"
      content="서비스 이용에 불편을 드려 죄송합니다."
      nextContent="페이지를 찾을 수 없습니다."
    />
  );
};

export default Error404;
