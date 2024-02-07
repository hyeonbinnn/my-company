import React from 'react';
import styled from 'styled-components';

const TableWrap = ({ headersName, children }) => {
  return (
    <Table>
      <Thead>
        <tr>
          {headersName.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </Table>
  );
};

export default TableWrap;

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  margin-bottom: 20px;
`;

const Thead = styled.thead`
  tr {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    th {
      padding: 15px 10px;
      font-size: 17px;
    }
  }
`;

const Tbody = styled.tbody`
  tr {
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
      cursor: pointer;
    }

    td {
      font-size: 16px;
      padding: 18px;
      border-bottom: ${({ theme }) => `1px dotted ${theme.colors.gray}`};
    }
  }
`;
