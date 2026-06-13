import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material";

const sales = [
  {
    value: "$1k",
    label: "Total Sales",
    growth: "+8%",
    bgColor: "#FFE2E5",
    iconBackgroundColor: "#FA5A7D",
    icon: "💰",
  },
  {
    value: "300",
    label: "Total Order",
    growth: "+5%",
    bgColor: "#FFF4DE",
    iconBackgroundColor: "#FF947A",
    icon: "🛒",
  },
  {
    value: "5",
    label: "Product Sold",
    growth: "+1.2%",
    bgColor: "#DCFCE7",
    iconBackgroundColor: "#3CD856",
    icon: "📦",
  },
  {
    value: "8",
    label: "New Customers",
    growth: "+0.5%",
    bgColor: "#F3E8FF",
    iconBackgroundColor: "#BF83FF",
    icon: "👤",
  },
];

const SalesMap = () => {
  return (
    <Paper sx={{ p: 4 }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <div>
          <Typography variant="h5" fontWeight={600}>
            Today's Sales
          </Typography>

          <Typography color="text.secondary">
            Sales Summary
          </Typography>
        </div>

        <Button variant="outlined">Export</Button>
      </Stack>

      {/* Cards */}
      <Grid container spacing={3}>
        {sales.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.label}>
            <Card
              sx={{
                borderRadius: 4,
                bgcolor: item.bgColor,
                height: "100%",
              }}
            >
              <CardContent>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: item.iconBackgroundColor,
                    mb: 2,
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  {item.icon}
                </Stack>

                <Typography variant="h4" fontWeight={700} mb={1}>
                  {item.value}
                </Typography>

                <Typography variant="body1" fontWeight={600} mb={1}>
                  {item.label}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  Last day {item.growth}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SalesMap;