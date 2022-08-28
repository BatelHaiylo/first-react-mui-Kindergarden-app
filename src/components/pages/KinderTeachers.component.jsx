// import { useState,useContext,useEffect } from "react";
// import { Typography, AppBar ,Card , CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

// export default function KinderTeachers(){
//     let [,]=useState

//     return(
//         <div>
//             <CssBaseline/>
//             <Container maxWidth="sm">
//                 <Typography varient="h1" align="center" color="textPrimary" gutterBottom>
//                     Photo album
//                 </Typography>
//                 <Typography varient="h5" align="center" color="textSecondary" paragraph>
//                     Hello dear parents ,<br/>
//                     This is our kids photo album.
//                     here you can watch the kids in diffrent acctivities during and after school time.
//                 </Typography>

//             </Container>
//         </div>
//     )
// }
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `name:  phone:05. `;

export default function KinderTeachers() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src="https://cdn.prod.www.spiegel.de/images/a75e5aaa-0001-0004-0000-000000548243_w1200_r1.33_fpx41.97_fpy45.jpg" alt="Mark" /></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src="https://images.thestar.com/LMFahhO4oBtAOyB24xoQ1gSPfW8=/1200x1200/smart/filters:cb(1548689313694)/https://www.thestar.com/content/dam/thestar/entertainment/television/analysis/2019/01/25/is-this-the-breakout-year-for-asian-men-in-leading-roles/simu_liu.jpg" alt="Ming" /></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C00C/production/_122646194_c64a0082-f20b-44f0-8c79-01c407eb3bb8.jpg" alt="Zoranga" /></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src="https://c.stocksy.com/a/xFP500/z9/1288729.jpg" alt="Melisa" /></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
