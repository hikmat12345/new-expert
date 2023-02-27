import Img from '@/Components/Image/Image';
 import { LoginContainer } from '@/styles/Container.styled';
import { Flex } from '@/styles/Flex.styled';
 import * as React from 'react'; 
import styled from 'styled-components'
import { CopyRight } from '@/styles/CopyRight.styled';
import { useRouter } from 'next/router';
import { Button } from '@/styles/Button.style';
import InputField from '@/Components/InputField';
const Item=  styled.div`
  width:${({width}:{width:string})=>width ||"100%"}; 
  ` 
function EmailVerification() {
  const router = useRouter()
    const handleClick = () => {
     router.push("/email-verification-code")
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
          Email <span style={{color:"#dc0000"}} >Verification</span>
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
          }}>Please enter your Email Address</p>
         <InputField type="email"   indicateIcon="/assets/icons/mail-icon.svg" placeholder="Enter email Address" passwordLabel='' />
         <Button onClick ={handleClick} width='340px'> 
             Next
          </Button> 
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

export default EmailVerification
