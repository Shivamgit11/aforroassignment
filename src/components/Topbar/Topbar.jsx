import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  Avatar,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Topbar = ({ onHandleDrawerToggle }) => {
  return (
    <div
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#000",
        borderBottom: "1px solid #EAEAEA",
      }}
    >
      <Toolbar
        sx={{
          height: 88,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side */}
        <Box display="flex" alignItems="center" gap={2}>
          

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Dashboard
          </Typography>
        </Box>

        {/* Center Search */}
        <Box
          sx={{
            width: 450,
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            bgcolor: "#F5F6FA",
            borderRadius: "12px",
            px: 2,
            py: 1,
          }}
        >
          <SearchIcon sx={{ color: "#888" }} />

          <InputBase
            placeholder="Search..."
            sx={{
              ml: 1,
              flex: 1,
            }}
          />
        </Box>

        {/* Right Side */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            sx={{
              bgcolor: "#FFF4E5",
            }}
          >
            <Badge color="error" variant="dot">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{
              cursor: "pointer",
            }}
          >
            <Avatar
              src="https://i.pravatar.cc/150?img=12"
              sx={{
                width: 48,
                height: 48,
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Musfiq
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#888",
                }}
              >
                Admin
              </Typography>
            </Box>

            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Toolbar>
    </div>
  );
};

export default Topbar;