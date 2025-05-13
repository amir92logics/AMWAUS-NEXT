import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

const AdminNav: React.FC = () => {
    const router = useRouter();


  const handleLogout = () => {
    // Clear local storage and redirect to the login page
    localStorage.removeItem('user');
    localStorage.removeItem('profile_id');
    localStorage.removeItem('session');
    router.push('/login');
  };

  return (
    <CssBaseline>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>

            <Link href="/blogForm" color="inherit">
              Blog Form
            </Link>
            {/* <Button component={Link} to="/city-content" color="inherit">
              City Content
            </Button> */}
            <Link href="/admin" color="inherit">
            City Content
            </Link>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </CssBaseline>
  );
};

export default AdminNav;
