import  { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Link,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import ChartHeadingSection from "./ChartHeadingSection";

const DataTable = () => {
  const apiRef = useGridApiRef();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        const formattedRows = users.map((user) => ({
          id: user.id,
          assigned: {
            name: user.name,
            role: user.company.bs,
          },
          name: user.company.name,
          priority: ["Low", "Medium", "High", "Critical"][
            user.id % 4
          ],
          budget: Math.floor(Math.random() * 900000) + 100000,
        }));

        setRows(formattedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      field: "assigned",
      headerName: "Assigned",
      flex: 1.5,
      minWidth: 220,
      valueGetter: (value, row) => row.assigned.name,
      renderCell: (params) => (
        <Stack justifyContent="center" height={1}>
          <Typography
            variant="body1"
            component={Link}
            href="#"
            color="text.primary"
            underline="none"
          >
            {params.row.assigned.name}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {params.row.assigned.role}
          </Typography>
        </Stack>
      ),
    },
    {
      field: "name",
      headerName: "Company",
      flex: 1.5,
      minWidth: 220,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
      minWidth: 140,
      renderCell: (params) => {
        let color = "";

        switch (params.value) {
          case "Low":
            color = "#E8F5E9";
            break;
          case "Medium":
            color = "#E3F2FD";
            break;
          case "High":
            color = "#FFEBEE";
            break;
          case "Critical":
            color = "#FFF3E0";
            break;
          default:
            color = "#F5F5F5";
        }

        return (
          <Chip
            label={params.value}
            size="small"
            sx={{
              backgroundColor: color,
            }}
          />
        );
      },
    },
    {
      field: "budget",
      headerName: "Budget",
      flex: 1,
      minWidth: 150,
      valueFormatter: (value) =>
        `$${Number(value).toLocaleString()}`,
    },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "center" }}
        spacing={2}
      >
        <ChartHeadingSection Heading="Table" />
      </Stack>

      <Box
        sx={{
          height: 500,
          width: "100%",
          mt: 3,
        }}
      >
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            apiRef={apiRef}
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
          />
        )}
      </Box>
    </Paper>
  );
};

export default DataTable;