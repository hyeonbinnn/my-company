import styled from 'styled-components';
import { Main } from '../../components/Layout/MainLayout';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.third};
  padding: 20px;
  margin: -20px 0 80px 0;
`;

export const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 600px;
  overflow: hidden;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    height: 50px;
  }
`;

export const H3 = styled.h3`
  @media ${(props) => props.theme.mediaQuery.mobile} {
    max-width: 340px;
    word-wrap: break-word;
  }
`;

export const DeleteBtn = styled.button``;

export const DeleteImg = styled.img`
  position: absolute;
  top: 20%;
  right: 50px;
  width: 30px;
  height: 30px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    top: 30%;
  }
`;

export const Content = styled.p`
  width: 100%;
  height: 500px;
  padding: 20px;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.colors.white};
`;
