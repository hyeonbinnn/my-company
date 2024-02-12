import styled from 'styled-components';

export const MainWrap = styled.div`
  margin-top: 70px;
`;

export const MainBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 10px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

export const MainSpan = styled.span`
  font-size: 19px;
  font-weight: bold;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 15px;
  }
`;

export const MainForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  position: relative;
`;

export const MainInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  padding: 10px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    height: 30px;
  }
`;

export const MainBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 37px;
  right: 15px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 13px;
    padding: 8px;
    top: 30px;
    right: 15px;
  }
`;
