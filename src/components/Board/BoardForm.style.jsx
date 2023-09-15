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
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
`;

export const Name = styled.input`
  width: 30%;
  margin-right: 50px;
  padding: 10px 20px;
  outline: none;
`;

export const Title = styled.input`
  width: 70%;
  padding: 10px 20px;
  outline: none;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 500px;
  padding: 20px;
  resize: vertical;
  overflow-y: auto;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  display: flex;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 7px 10px;
  margin-top: 20px;
  margin-left: auto;

  strong {
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    width: 18px;
    padding: 1px;
  }
`;
