import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Heading = ({ onSidebarToggle }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onSidebarToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Restaurant Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Heading;
