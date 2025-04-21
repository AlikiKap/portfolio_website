import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
function DrawerAppBar() {
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: '#212121' }}>
        <Toolbar>

          <Typography component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} fontWeight='800' fontSize='24px'>
            <Link to='/home' style={{ color: 'white', textDecoration: 'none', fontSize: '32px' }}>
              &lt;Aliki &#47;&gt;
            </Link>
          </Typography>

        </Toolbar>
      </AppBar>
      <Box component="nav">

      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>);
}
export default DrawerAppBar;
