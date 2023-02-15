import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

import { Typography } from '@mui/material';
import { useAuth } from 'hooks';
import { Animation } from 'components/Animation/Animation';

const styles = {
  container: {
    minHeight: 'calc(100vh - 60px)',
    marginTop: '-150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Animation />
      ) : (
        <div style={styles.container}>
          <LoginForm />

          <Typography
            variant="h6"
            component="h6"
            sx={{ color: '#1976d2', marginTop: '4px' }}
          >
            Don't have an account yet?
          </Typography>
          <NavLink
            to="/register"
            style={{
              marginTop: '8px',
              color: '#1976d2',
              width: '364px',
              textAlign: 'center',
              fontWeight: '400',
              border: '1px solid #1976d2',
            }}
          >
            <Typography variant="h6" component="h6">
              Register
            </Typography>
          </NavLink>
        </div>
      )}
    </>
  );
}
