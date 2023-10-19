import React from 'react'
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import BoxHeader from '@/components/BoxHeader';
import createPalette from '@mui/material/styles/createPalette';
import { useTheme } from '@mui/material';
import {Box} from "@mui/material"

const Row3 = () => {
  const { palette }= useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ]

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText ={`${productData?.length} products`}
        />
        <Box
          mt="0.5 rem"
          p="0 0.5 rem"
          height="100%"
          sx={{
            "&. MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none" ,
            },
          }}
        >
         { <DataGrid 
            rows = {productData || []}
            columns={productColumns}
          /> } 
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  )
}

export default Row3