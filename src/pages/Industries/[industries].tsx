import Head from 'next/head'
import { Inter } from '@next/font/google'
import React, {useEffect} from 'react'
import Header from "../Industries/Header/Header"
import styled from "styled-components"
import JsonData from "./Catagoriesdata/Catagoriesdata.json";
import Link from 'next/link'

 
 
const inter = Inter({ subsets: ['latin'] })





export default function Dindustries() {


  console.log(JsonData.Tailoring)
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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>
      <Main>
        <Header />
      <div className='col-md-12 px-3 pt-3'>
       <div className='row'>

        {JsonData.Tailoring.map((items, index)=>{
          return(
            <div key={index} className='col-md-3 mt-md-0 mt-4'>
            <div className='col-md-12 shadow_box'>
              <Link className='simple_decoration_link' href={`/Industries-detail/${items.id}`}>
              <img src={items.image} className='img-fluid img_border' />
              <div className='col-md-12 bg_card text-center'>
              {items.title}
              </div>
              </Link>
            </div>
          </div>
          )
        })}
              

        
       </div>
      </div>
     
       </Main>
    </>
  )
}