import { useMemo } from 'react';

// material-ui
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// third-party

import { useTable, useFilters, useGlobalFilter, Column, HeaderGroup, Cell, Row, useSortBy, usePagination } from 'react-table';

// project-imports
// import MainCard from 'components/MainCard';
// import ScrollX from 'components/ScrollX';
import { EmptyTable, HeaderSort } from 'components/third-party/ReactTable';
// import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

// import makeData from 'data/react-table';
import { DefaultColumnFilter, renderFilterTypes } from 'utils/react-table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, top, tableType }: { columns: Column[]; data: []; top?: boolean; tableType?: string }) {
  const filterTypes = useMemo(() => renderFilterTypes, []);
  const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter }), []);
  const initialState = useMemo(() => ({ filters: [{ id: 'status', value: '' }] }), []);
  const theme = useTheme();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState,
      filterTypes
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  const sortingRow = page.slice(0, 10);
  let sortedData = sortingRow.map((d: Row) => d.original);
  Object.keys(sortedData).forEach((key: string) => sortedData[Number(key)] === undefined && delete sortedData[Number(key)]);

  return (
    <>
      <Table {...getTableProps()}>
        <TableHead sx={{ borderTopWidth: 2 }}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: HeaderGroup) => (
                <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                  {tableType === 'filterable' ? <HeaderSort column={column} sort /> : column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {tableType === 'filterable' &&
            headerGroups.map((group: HeaderGroup<{}>) => (
              <TableRow {...group.getHeaderGroupProps()}>
                {group.headers.map((column: HeaderGroup) => (
                  <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                    {column.canFilter ? column.render('Filter') : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {sortingRow.length > 0 ? (
            sortingRow.map((row) => {
              prepareRow(row);
              return (
                <TableRow
                  className="tr"
                  onClick={(e) => {
                    // console.log('row', e);
                    // row.toggleRowSelected();
                  }}
                  sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell: Cell, j) => (
                    <TableCell
                      className="td"
                      data-label={headerGroups[0].headers[j].Header}
                      {...cell.getCellProps([{ className: cell.column.className }])}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          ) : (
            <EmptyTable msg="No Data" colSpan={7} />
          )}
          {/* {!top && (
            <TableRow>
              <TableCell sx={{ p: 2 }} colSpan={7}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
              </TableCell>
            </TableRow>
          )} */}
        </TableBody>
      </Table>
    </>
  );
}

// ==============================|| REACT TABLE - FILTERING ||============================== //

// const FilteringTable = ({ columns, data, tableType }: { columns: Column[]; data: []; tableType?: string }) => {
// const data = useMemo(() => makeData(2000), []);

// const columns = useMemo(
//   () =>
//     [
//       {
//         Header: 'First Name',
//         accessor: 'firstName'
//       },
//       {
//         Header: 'Last Name',
//         accessor: 'lastName',
//         filter: 'fuzzyText'
//       },
//       {
//         Header: 'Email',
//         accessor: 'email'
//       },
//       {
//         Header: 'Age',
//         accessor: 'age',
//         className: 'cell-right',
//         Filter: SliderColumnFilter,
//         filter: 'equals'
//       },
//       {
//         Header: 'Visits',
//         accessor: 'visits',
//         className: 'cell-right',
//         Filter: NumberRangeColumnFilter,
//         filter: 'between'
//       },
//       {
//         Header: 'Status',
//         accessor: 'status',
//         Filter: SelectColumnFilter,
//         filter: 'includes',
//         Cell: ({ value }: { value: string }) => {
//           switch (value) {
//             case 'Complicated':
//               return <Chip color="error" label="Complicated" size="small" variant="light" />;
//             case 'Relationship':
//               return <Chip color="success" label="Relationship" size="small" variant="light" />;
//             case 'Single':
//             default:
//               return <Chip color="info" label="Single" size="small" variant="light" />;
//           }
//         }
//       },
//       {
//         Header: 'Profile Progress',
//         accessor: 'progress',
//         Filter: SliderColumnFilter,
//         filter: filterGreaterThan,
//         Cell: ({ value }: { value: number }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
//       }
//     ] as Column[],
//   []
// );

//   return <ReactTable columns={columns} data={data} tableType={tableType} />;
// };

export default ReactTable;