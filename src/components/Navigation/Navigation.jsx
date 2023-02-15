import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <NavLink to="/">
          <Typography variant="h6" component="div">
            Home
          </Typography>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <Typography variant="h6" component="div">
              Contacts
            </Typography>
          </NavLink>
        )}
      </Box>
    </nav>
  );
};
