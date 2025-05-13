"use client";

import React from 'react';
import { Container, Grid } from '@mui/material';
import Blogs from './blog_list';
import BlogsPage from './blogsPage';

function Bloglist() {
  return (
    <>
      <BlogsPage />
      <Grid container sx={{ background: '#fff' }}>
        <Container>
          <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 2 }}>
              <Blogs />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default Bloglist;
