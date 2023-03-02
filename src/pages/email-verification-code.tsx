import Img from '@/Components/Image/Image'; 
import { LoginContainer } from '@/styles/Container.styled';
import { Flex } from '@/styles/Flex.styled'; 
import  React, {useState} from 'react'; 
import styled from 'styled-components'
import { useRouter } from 'next/router';
import { CopyRight } from '@/styles/CopyRight.styled';
import { Button } from '@/styles/Button.style';
import { FAECodeInput } from '@/Components/VerificationInput/VerificationInput';
import { EmailVerificationAction, ResendAction, VerificationAction } from '@/helper';
import { Message } from '@/styles/message.style';
const Item=  styled.div`
  width:${({width}:{width:string})=>width ||"100%"}; 
  ` 
function EmailVerificationCode() {
  const router = useRouter();
  const [errorMessage, setErrorMessage]= React.useState({type:false, message:""}) 
  const [otp, setOTP]= useState("")
  const query= router.query
  const {  id,  email, }=query||{}
  const handleClick = (e:any) => {
      e.preventDefault()
      EmailVerificationAction(id , otp ,  1 ).then((result)=>{
        if (result?.code===0 && result?.error===false) {
          router.push({pathname:'/', query:{id}});
          // go to home page 
        } else {
          setErrorMessage({type:false, message:result?.message});
        } 
    })
  }

const resendHandler = () => {
  ResendAction(id, IsEmailOTP=true).then((result)=>{
   console.log(result, 'resultresult')
   setErrorMessage({type:true, message:result?.message=="Successfully"?"Code Sent! Please check your gmail account.": result?.message});
   })
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
        <form onSubmit={handleClick}>
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
            }}>Enter the code that was sent to</p>
            <p style={{ 
              fontSize: "16px",
              fontWeight: 600, 
              letterSpacing: "normal",
              textAlign: "center",
              color: "#444",
            }}>
              { email || "email id is missed"}
            </p>
              <FAECodeInput  getValue={setOTP}/> 
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
              cursor:"pointer",
              color: "#db0406"}} onClick={resendHandler}>
              Resend Code
            </button> 
            <Button type='submit' width='340px'> Verify Number </Button> 
            <Message type={errorMessage.type}> {errorMessage.message} </Message>
          </div>
        </form>
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

export default EmailVerificationCode
