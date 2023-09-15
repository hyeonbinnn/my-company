import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 7px 10px;
  margin-left: auto;

  strong {
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    width: 15px;
    padding-top: 2px;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  margin-bottom: 30px;
`;

export const Thead = styled.thead`
  tr {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  th {
    padding: 15px 10px;
    font-size: 17px;
  }
`;

export const Tbody = styled.tbody`
  tr {
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
      cursor: pointer;
    }
  }

  td {
    font-size: 16px;
    padding: 18px;
    border-bottom: ${({ theme }) => `1px dotted ${theme.colors.gray}`};
  }
`;
