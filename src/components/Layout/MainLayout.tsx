import styled from 'styled-components';
import { MainLayoutProps } from '../../types/common';

const MainLayout = ({ icon, iconTxt, title, desc }: MainLayoutProps) => {
  return (
    <Main>
      <Article>
        <H2>
          <img src={icon} alt={iconTxt} />
          <strong>{title}</strong>
          <span>{desc}</span>
        </H2>
      </Article>
    </Main>
  );
};

export default MainLayout;

export const Main = styled.main`
  position: relative;
  max-width: 1280px;
  margin: 30px auto;
`;

export const Article = styled.article`
  padding: 30px 0px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 10px 0px;
  }
`;

export const H2 = styled.h2`
  img {
    width: 45px;
    height: 45px;
  }

  strong {
    font-size: 40px;
    line-height: 45px;
    padding-left: 15px;
  }

  span {
    display: block;
    margin: 30px 0;
    font-size: 25px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 35px;
      height: 35px;
    }
    strong {
      font-size: 30px;
      line-height: 35px;
      padding-left: 10px;
    }
    span {
      font-size: 20px;
      margin: 20px 0;
      line-height: 30px;
    }
  }
`;
