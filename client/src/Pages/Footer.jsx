import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Grid container
     sx={{ width: "100%" }}
      height={'10vh'}>
        <Grid size={12}>
            <Typography
            sx={{
            color: "grey",
            // fontSize: { xs: "1rem"},
          }}>
                © Umayange_Gamachchi
            </Typography>
        </Grid>
      
    </Grid>
  )
}

export default Footer
