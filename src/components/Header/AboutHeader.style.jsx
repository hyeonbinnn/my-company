import styled from 'styled-components';
import { Header, Container } from '../common/Layout/HeaderLayout';

export const CustomHeader = styled(Header)``;

export const CustomContainer = styled(Container)`
  padding: 20px 0 262px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    height: 20vh;
  }
`;
