import styled from 'styled-components';
import { Main } from '../../components/Layout/MainLayout';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

export const Section1 = styled.section``;
export const Section2 = styled.section`
  margin: 50px 0 80px 10px;
`;
export const Inform = styled.div`
  ul {
    li {
      padding: 8px 0;

      &::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-right: 5px;
        margin-bottom: 3px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.secondary};
      }

      strong {
        display: inline-block;
        text-align: center;
        width: 65px;
        font-size: 15px;
        letter-spacing: 3px;
        color: ${({ theme }) => theme.colors.primary};
      }

      span {
        display: inline-block;
        padding: 0 17px 0 5px;
      }
    }
  }
`;
