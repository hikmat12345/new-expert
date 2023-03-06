import Img from '@/Components/Image/Image';
import { InputField } from '@/Components/Input/Input';
import PhoneInputField from '@/Components/CountryPhoneInput/CountryPhoneInput';
import { LoginContainer } from '@/styles/Container.styled';
import { Flex } from '@/styles/Flex.styled';
import { border, margin } from '@mui/system';
import Image from 'next/image';
import * as React from 'react'; 
import styled from 'styled-components'
import { useRouter } from 'next/router';
import { CopyRight } from '@/styles/CopyRight.styled';
import { Button } from '@/styles/Button.style';
import { FAECodeInput } from '@/Components/VerificationInput/VerificationInput';
const Item=  styled.div`
  width:${({width}:{width:string})=>width ||"100%"}; 
  ` 
function MobileVerification() {
  const router = useRouter()

  const handleClick = () => {
     router.push("/create-password")
  }
  return (
    <LoginContainer>
      <Flex style={{
        backgroundColor:"#fff"
      }}>
       <Item width={"35%"} >
          <Img
           inlineCss={{
              height: "38rem",
              width: "100%",
            }}
            src={`/assets/images/LoginBg.png`} />
          <Img
           inlineCss={{ 
            position: "absolute",
            width: "15rem",
            top: "21rem",
            bottom: "0",    
          }}
          src={`/assets/images/logoOnbanner.png`} />
       </Item>
       <Item width={"65%"} >
        <div style={{ 
        }}>
          <h3 style={{
           margin:" 0 0 5.8px",
           fontFamily:"Poppins",
           fontSize:"30px",
           fontWeight:"600",
           fontStretch:"normal",
           fontStyle:"normal",
           lineHeight:"normal",
           letterSpacing:"normal",
           textAlign:"center",
           color:"#22272e",
        }}>
          Mobile <span style={{color:"#dc0000"}} >Verification</span>
          </h3>
          <p style={{
              margin: "0.6px 33px 40px 0.9px",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "normal",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              textAlign: "center",
              color: "#757677",
          }}>Enter the code that was sent to</p>
          <p style={{ 
            fontSize: "16px",
            fontWeight: 600, 
            letterSpacing: "normal",
            textAlign: "center",
            color: "#444",
          }}>
            +44 789 392 0403
          </p>
            <FAECodeInput /> 
          <p style={{ 
            fontSize: "14px", 
            textAlign: "center",
            color: "#a9a9a9",}}>
            Having problem?
          </p>
          <button style={{  
            margin:"auto",
            display:"block",
            background:"initial",
            border:"0px",
            outline:"initial",
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "center",
          color: "#db0406"}}>
             Resend Code
          </button> 
          <Button onClick ={handleClick} width='340px'> Verify Number </Button> 
        </div>
           
          {/* <InputField /> */}
          <CopyRight>
           Terms & Conditions • Privacy Policy • Copyright • Cookies Policy • Help
© 2022 Selteq Ltd.
           </CopyRight>
       </Item>
      </Flex>
    </LoginContainer>
  )
}

export default MobileVerification
