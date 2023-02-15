import { NavLink } from 'react-router-dom';

import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

// import { Link } from '@mui/material';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '40px',
        color: 'white',
      }}
    >
      <NavLink to="/register">
        <Typography variant="h6" component="h6">
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography variant="h6" component="h6">
          Log In
        </Typography>
      </NavLink>
    </Box>
  );
};
