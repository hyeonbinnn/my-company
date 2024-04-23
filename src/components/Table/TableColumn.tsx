import { TableProps } from '../../types/common';

const TableColumn = ({ children }: TableProps) => {
  return <td>{children}</td>;
};

export default TableColumn;
