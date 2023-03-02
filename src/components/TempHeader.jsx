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

const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

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

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
