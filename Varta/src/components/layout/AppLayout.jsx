import React from 'react'
import Header from './Header'
import Title from '../Shared/Title'
import { Grid } from '@mui/material'
import { themeSecondary } from '../../constants/color'

function AppLayout(WrappedComponent){
  return (props) =>{
    return(
        <div>
            <Title/>
            {/* here applayout is a high order component  */}
            <Header/>
            <Grid container height={"calc(100vh - 4rem)"}>
              <Grid item sm={4} md={3} sx={{display:{xs: 'none', sm: 'block'}}} height={"100%"} >1</Grid>
              <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} ><WrappedComponent {...props}/> </Grid>
              <Grid item md={4} lg={3} height={"100%"} sx={{display:{xs: 'none', md: 'block'},
              padding: '2rem',
              bgcolor: themeSecondary}}>3</Grid>
            </Grid>
        </div>
    )
  }
}

export default AppLayout