import Head from 'next/head'
import { Inter } from '@next/font/google'
import React, {useEffect} from 'react'
import styled from "styled-components"
import { GlobalStyles, Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import {Typography} from "@mui/material"
import {makeStyles} from "@mui/material"
import { Container } from '@mui/system'
import Image from 'next/image'
import JsonData from "../Catagoriesdata/Catagoriesdata.json";
import Link from 'next/link'

 
 
const inter = Inter({ subsets: ['latin'] })





export default function Catagories() {


 console.log(JsonData.Team)
  const Main=styled.main``
  const margin_cards = {
    marginTop:"30px",
    cursor:"pointer"
 }


  
  return (
    <>
      <Head>
        {/* <title>Expert || Any Service | Any Time | Any Where</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Main>
      <div className='padding_common'>
        <Container>
       
        <Grid align="center"  spacing={0} container>
            {JsonData.Team.map((item:any, index:any)=>{
                    return(
                   <Grid sx={margin_cards} key={index} item md={6} sm={6} xs={6} lg={2}  >
                    <div>
                        <Link className='decoration_link' href={`/Industries/${item.id}`}  >
                         <img className="img_responsive" src={item.image}  />
                         <p>{item.title}</p>
                         </Link>
                         </div>
                      </Grid>
                    )
                })}
            </Grid>
          
      </Container>
      </div>
     
       </Main>
    </>
  )
}