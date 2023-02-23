import { Main } from 'next/document'
import Head from 'next/head'
import React from 'react'
import Header from '../Industries/Header/Header'
import styled from "styled-components"
import JsonData from "../Industries/Catagoriesdata/Catagoriesdata.json";
import Link from 'next/link'
import Image from 'next/image'
import Imageforlisting from "../../Assets/Images/loadingimage.jpg"

function Industrieslisting() {
  const Main=styled.main``
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
      <div className='col-md-12 pt-3 padding_left_right_listing'>
        <div className='col-md-12 text-center'>
          <h5><b>Manicure Pedicure</b></h5>
        </div>
        {
            JsonData.ListingNails.map((item, index)=>{
              return(
                <div className='mt-3'>
                <Link className='simple_decoration_link' href={`/industries-booking/${item.id}`}>  
                <div className='badge bg-danger margin_botton_badge'>{item.discount}%</div>
                <div className='col-md-12 background_card_white p-2'>
              <div className='row '>
                <div className='col-md-3 '>
                  <Image className='img-fluid width_img_loading' src={Imageforlisting} width={1000} height={1000} alt="image crashed" />
                </div>
                <div className='col-md-6 m-auto pt-3'>
                    <p className='mb-1 test_head_services'> {item.title}</p>
                    <p className='test_sub_heading'> {item.subtitle}</p>
                    </div>
                <div className='col-md-3 m-auto pt-3 text-end px-5'>
                  <h6><b><span className='textline'>{item.price}</span>&nbsp;&nbsp; {item.price}</b></h6>
                </div>
              </div>
              
           
        </div>
        </Link>
        </div>
             ) })
         
        }
      </div>
      </Main>
      </>
  )
}

export default Industrieslisting