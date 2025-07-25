import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || '#fff',
  padding: theme.spacing(3),
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'cursive',
  color: 'white',
  border:"3px solid white",
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
  },
}));

export default function BoxBasic() {
  return (
    <>
    <Box sx={{ py: 10, backgroundColor: "#27292B", textAlign: "center" }}>
  <Box sx={{ color: "white", fontSize: "30px", fontWeight: "bold", fontFamily: "cursive", mb: 2 }}>
    Connecting Projects With Talent!
  </Box>
  <Box sx={{ color: "white", fontSize: "25px", fontFamily: "cursive", mb: 4 }}>
    Post your projects or find exciting ones to work on — all in one place.
  </Box>
  <Box sx={{ color: "white", fontSize: "25px", fontFamily: "cursive", mb: 6 }}>
    Why Choose Us?
  </Box>

  <Grid container spacing={4} justifyContent="center">
    <Grid item xs={12} md={4}>
      <Item bgcolor="rgb(39,41,43)">🚀 Get Experience Working on Real-Life Projects</Item>
    </Grid>
    <Grid item xs={12} md={4}>
      <Item bgcolor="rgb(39,41,43)">💰 Get Rewarded for Your Work</Item>
    </Grid>
    <Grid item xs={12} md={4}>
      <Item bgcolor="rgb(39,41,43)">🌐 Endless Opportunities to Choose From</Item>
    </Grid>
  </Grid>
</Box>

</>
  );
}
