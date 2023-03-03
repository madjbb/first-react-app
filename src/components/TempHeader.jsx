// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function TempHeader() {
//   return (
//     <div>
//       <NavLink to="/">List Page</NavLink>
//       <NavLink to="/add">Add Page</NavLink>
//       <NavLink to="/update">Update Page</NavLink>
//       <NavLink to="/asdshd">Not Found Page</NavLink>
//     </div>
//   )
// }

// export default TempHeader

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
// import ErrorBoundary from './debug/ErrorBoundary';

const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MobileNavigation
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <DesktopNavigation handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
}

export default DrawerAppBar;
