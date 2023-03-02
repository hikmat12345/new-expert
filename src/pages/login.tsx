import Img from '@/Components/Image/Image';
 import PhoneInputField from '@/Components/CountryPhoneInput/CountryPhoneInput';
import { LoginContainer } from '@/styles/Container.styled';
import { Flex } from '@/styles/Flex.styled';
import { useRouter } from 'next/router'
 import * as React from 'react'; 
import styled from 'styled-components'
import { Button } from '@/styles/Button.style';
import { CopyRight } from '@/styles/CopyRight.styled';
import { LoadAction } from '@/helper';
import { Message } from '@/styles/message.style';
import Card from '@/Components/Card/Card';
const Item=  styled.div`
  width:${({width}:{width:string})=>width ||"100%"}; 
  `
 
function Signin() {

  
  const router = useRouter()
  const [phoneNumber, setPhoneNumber]= React.useState(0) 
  const [error, setError] = React.useState("");
  const [errorMessage, setErrorMessage]= React.useState("") 
   const handleSubmit = (event:any) => {
    event.preventDefault();
    try {
       LoadAction(phoneNumber).then(async(result:any)=>{
         if (result?.code===0 && result?.error===false) {
            router.push({pathname:'/mobile-verification', query:{...result?.result[0]}});
          } else if (result?.code===1 &&  result?.error===false) {
            router.push({pathname:'/password',  query:{...result?.result[0], mobileNumber:phoneNumber}});
          } else {
            console.log(result, 'result')
            setErrorMessage('Invalid credentials');
          }
    
  })
  } catch (error) {
    console.error(error);
    setErrorMessage('An error occurred');
  }
  }
  
  return (
    <LoginContainer>
      <Flex style={{
        backgroundColor:"#fff"
      }}>
       <Item width={"35%"} >
          <Img
           inlineCss={{
              height: "84vh",
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
        <form onSubmit={handleSubmit}>
          <div style={{ 
        }}>
          <h3 style={{
            margin:" 0 0 10.8px",
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
            Welcome to <span style={{color:"#dc0000"}} >Expert!</span>
          </h3>
          <p style={{
              margin: "0.6px 0px 41px 0.9px",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "normal",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              textAlign: "center",
              color: "#757677",
          }}>Please Enter your Mobile Number</p>
           <PhoneInputField 
              style={{
              margin:"auto",
              width:"100%",
              fontFamily:"Poppins",
              fontSize:"30px",
              fontWeight:"600",
              fontStretch:"normal",
              fontStyle:"normal",
              textAlign:"center",
              color:"#22272e"}}
              onChangeInput={setPhoneNumber}
              error={phoneNumber}
            /> 
             <Button type="submit" width='340px'> 
                Next
             </Button> 
              <Message> {errorMessage} </Message>
          </div>
        </form>
           <CopyRight>
           Terms & Conditions • Privacy Policy • Copyright • Cookies Policy • Help
© 2022 Selteq Ltd.
           </CopyRight>
          {/* <InputField /> */}
       </Item>
      </Flex>
    </LoginContainer>
  )
}

export default Signin
