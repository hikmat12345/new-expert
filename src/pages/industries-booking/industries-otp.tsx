import Head from 'next/head'
import React,{useState,Component} from 'react'
import Header from '../Industries/Header/Header'
import styled from "styled-components"
import Link from 'next/link'
import Optpinput from '@/Tags/Otpinput/otpinput'

function industriesotp() {
    const Main=styled.main``
  return (
    <div>
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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" />
      </Head>
      <Main>
        <Header />
        <div className='col-md-12 text-center padding_top_equal_booking_page'>
            <img className='img-fluid' src='../images/expertlog.png' />
            <div className='col-md-12  pt-4'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 px-5 input_otp  '>
                        <div className='col-md-12 text-center '>
                            <p className='input_otp_p pt-5'>Enter the code that was sent to <b>+92-3134361309</b></p>
                    <Optpinput />
                    </div>
                    <div className='col-md-12 text-center pt-4 pb-4'>
                    <Link href="/industries-booking/industries-password" >  <button className='btn btn-danger background_otp_button pl-5 pr-5 pt-2 pb-2'>
                            Resend
                        </button> </Link>
                    </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
          </div>
        </Main>

    </div>
  )
}

export default industriesotp