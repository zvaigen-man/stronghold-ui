import { FC } from "react";
import "./appTable.scss";

import { ColType, Pagination, TableColumn } from "../../models";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-state";
import { noop } from "lodash";
import { convertMap } from "./table-value-convert-map";

export interface ITableProps {
  rows: any[]; // mappable
  columns: TableColumn[];
  type: any;
  totalItems?: number;
  pagination?: Pagination;
  onPageChange?: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  onChange: (e: any, row: any, field: string) => void;
  onBlur: (e: any, row: any, field: string) => void;
  onRowClick: (row: any, type: any) => void;
}
export const AppTable: FC<ITableProps> = ({
  pagination,
  rows,
  columns,
  type,
  totalItems = 0,
  onPageChange,
  onChange,
  onBlur,
  onRowClick,
}: ITableProps) => {
  return (
    <>
      <div data-testid="App-table" className={`table-wrapper ${type}`}>
        <table className={type === "experiments" ? "experiment" : ""}>
          {columns != undefined && columns.length > 0 && (
            <thead>
              <tr>
                {columns.map((cell: TableColumn, i: number) => (
                  <th key={type + "-th-" + i}>{cell.name}</th>
                ))}
              </tr>
            </thead>
          )}

          {rows != undefined && rows.length > 0 && (
            <tbody>
              {rows.map((row: any, i: number) => (
                <tr
                  className="table-row pointer"
                  key={type + "row" + i}
                  onClick={() => onRowClick(row, type)}
                >
                  {columns.map((column, j: number) => (
                    <td key={type + "cell" + i + j} className={column.type}>
                      {/* <div>{convertMap[column.type](row, column.field)}</div> */}
                      <input
                        value={convertMap[column.type](row, column.field)}
                        onChange={(e) => onChange(e, row, column.field)}
                        onBlur={(e) => onBlur(e, row, column.field)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default AppTable;
