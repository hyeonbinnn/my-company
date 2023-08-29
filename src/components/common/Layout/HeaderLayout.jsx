import React from 'react';
import NavBar from '../../common/Bar/NavBar';
import styled from 'styled-components';

const HeaderLayout = () => {
  return (
    <Header>
      <Container>
        <NavBar />
      </Container>
    </Header>
  );
};

export default HeaderLayout;

export const Header = styled.header`
  padding: 0px 20px;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 25px 0px 170px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    text-align: center;
  }
`;
