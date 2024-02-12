import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.third};
  padding: 20px;
  margin: -20px 0 80px 0;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 600px;
  overflow: hidden;
`;

export const TitleBox = styled.div``;
export const ContentBox = styled.div``;

export const Title = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px 20px;
  outline: none;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 500px;
  padding: 20px;
  resize: vertical;
  overflow: auto;
  outline: none;
  border: none;
`;

export const UploadButton = styled.button`
  display: flex;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  margin-left: auto;
`;
