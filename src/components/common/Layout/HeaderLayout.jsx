import styled from 'styled-components';

export const Header = styled.header`
  padding: 0px 20px;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    padding: 22px 0 0;
    text-align: center;
  }
`;
