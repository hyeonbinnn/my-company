import styled from 'styled-components';
import { Main } from '../../components/Layout/MainLayout';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

export const Section = styled.section`
  margin: -20px 0 120px 0;
`;

export const CreateBtn = styled.button`
  float: right;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  margin-top: -60px;
  margin-bottom: 30px;
  position: relative;
  z-index: 999;
`;
