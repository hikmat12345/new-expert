import React from 'react'
import styled from "styled-components"
import { GlobalStyles, Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import {Typography} from "@mui/material"
import {makeStyles} from "@mui/material"


function Header() {


    const Paper = styled(Typography)`
    box-shadow: "none";
    margin:"0px"
    }
      `
    const sxStyle = {
        color: "red",
        backgroundColor:"black"
    }

  
  return (
    <>
    
            <Grid container spacing={0}>
            <Grid item md={6} sm={3} lg={6}  >
                <div style={{backgroundColor:"red"}} ><span >1</span></div>
            </Grid>
            <Grid item md={6} sm={9} lg={6} >
              <div ><span >1</span></div>
            </Grid>
            </Grid>
    </>
  )
}

export default Header