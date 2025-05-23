// import { ReactNode } from 'react';

// material-ui
import { Box, Grid } from '@mui/material';

// project-imports
import AuthCard from './AuthCard';

// assets
import AuthBackground from './AuthBackground';

interface Props {
  children: any;
  border?: boolean;
}

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children, border }: Props) => (
  <Box sx={{ minHeight: '100vh' }}>
    <AuthBackground />
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{
        minHeight: '100vh'
      }}
    >
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        >
          <Grid item>
            <AuthCard border={border}>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default AuthWrapper;
