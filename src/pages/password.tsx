import Img from '@/Components/Image/Image'; 
import { InputField } from '@/Components/Input/Input';
import PaswordField from '@/Components/InputField';
import { Button } from '@/styles/Button.style';
import { LoginContainer } from '@/styles/Container.styled';
import { Flex, Item } from '@/styles/Flex.styled'; 
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRouter } from 'next/router';
import * as React from 'react'; 
import styled from 'styled-components'

 
function Password() {
    
  const router = useRouter()

  const handleClick = () => {
     router.push("/mobile-verification")
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
          +44 789 947 3099
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
          }}>Is already registered.</p>
          <PaswordField indicateIcon="/assets/icons/lock.svg" placeholder="Enter Password" passwordLabel='Enter Password to Login' />
            <Flex style={{
                backgroundColor:"#fff",
                width: "340px",
              }}>
                <Item> 
                <FormControlLabel control={<Checkbox defaultChecked onChange={()=>{}} color="default" />}
                  label={<p style={{
                    textAlign: "left",
                    color: "#6c6c6c"}}>
                    Remember Me  
                    </p> }
                    /> 
                  </Item>
                <Item>
                  <p style={{
                    margin: "0px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    textAlign: "right",
                    color: "#757677",
                  }}>Forgot Password?</p>
                </Item> 
              </Flex>
           <Button onClick ={handleClick} width='340px'> Login </Button>
        </div>
           
          {/* <InputField /> */}
       </Item>
      </Flex>
    </LoginContainer>
  )
}

export default Password
