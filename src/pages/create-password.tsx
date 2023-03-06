import Img from '@/Components/Image/Image'; 
import InputField from '@/Components/InputField';
  import { Button } from '@/styles/Button.style';
import { LoginContainer } from '@/styles/Container.styled';
import { CopyRight } from '@/styles/CopyRight.styled';
import { Flex } from '@/styles/Flex.styled'; 
import { useRouter } from 'next/router';
import * as React from 'react'; 
import styled from 'styled-components'
const Item=  styled.div`
  width:${({width}:{width:string})=>width ||"100%"}; 
  `
 
function CreatePassword() {
    
  const router = useRouter()

  const handleClick = () => {
     router.push("/personal-information")
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
          Create <span style={{color:"#dc0000"}} >Password</span>
          </h3>
          <br/>
          <InputField type="password" isPasswordField={true} indicateIcon="/assets/icons/lock.svg" placeholder="Password" passwordLabel='Enter Password' />
          <br/>
          <InputField type="password" isPasswordField={true} indicateIcon="/assets/icons/lock.svg" placeholder="Confirm Password" passwordLabel='Repeat Password' />
          <Button onClick ={handleClick} width='340px'> Save & Continue </Button>
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

export default CreatePassword
