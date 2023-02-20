import React,{useEffect} from 'react'
import styled from "styled-components"
import { GlobalStyles, Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import {Typography} from "@mui/material"
import {makeStyles} from "@mui/material"

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


function Header(posts:any) {

  useEffect(() => {
    console.log("header",posts);

  }, [])



    const Paper = styled(Typography)`
    box-shadow: "none";
    margin:"0px"
    }
      `
    const sxStyle = {
        color: "red",
        backgroundColor:"black",
        
    }

  
  return (
    <>
     <Grid container spacing={0}>
            <Grid  item md={12} sm={12} xs={12} lg={12}  >
                <div style={{backgroundColor:"red",paddingTop:"1%", paddingBottom:"1%"}} >
                  <img className='img-fluid img_logo_width'  src='../images/logo.png' />
                  </div>
            </Grid>
            {/* <Grid item md={6} sm={9} lg={6} >
              <div ><span >1</span></div>
            </Grid> */}
        </Grid>
    </>
  )
}

export default Header