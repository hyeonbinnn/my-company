import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60vh;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    height: 80vh;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-bottom: 80px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &:first-child {
    margin-top: 50px;
  }
`;

export const ContentEmail = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContentImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const ContentComment = styled.span`
  font-size: 14px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 12px;
  }
`;
