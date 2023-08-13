import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function DrawerAppBar() {
  const logoStyle = {
    background: `  background: linear-gradient(to right, #ff8a00 0%, #dd4c4f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;`}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: '#212121' }}>
        <Toolbar>

          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            fontWeight='800'
            fontSize='24px'
            style={logoStyle}
          >
            &lt;Aliki &#47;&gt;
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {['home', 'projects', 'cv'].map((item) => (
              <Button component={Link} to={`/${item}`} key={item} sx={{ color: '#BEFF34' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">

      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}



export default DrawerAppBar;