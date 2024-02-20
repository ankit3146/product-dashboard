// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Avatar src="/logo.webp" alt="Company Logo" />

        <Box marginLeft={2}>
          <Typography variant="h6">United Dairy and Grocers Distribution</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
