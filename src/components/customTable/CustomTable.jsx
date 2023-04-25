import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

function CustomTable({ data, columns, ...rest }) {
  const { data: demoData } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  return (
    <div>
      <DataGrid
        {...demoData}
        rows={data}
        columns={columns}
        initialState={{
          ...demoData.initialState,
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        {...rest}
      />
    </div>
  );
}

export default CustomTable;
