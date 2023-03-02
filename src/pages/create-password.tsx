import Img from '@/Components/Image/Image'; 
import InputField from '@/Components/InputField';
import { PasswordAction } from '@/helper';
  import { Button } from '@/styles/Button.style';
import { LoginContainer } from '@/styles/Container.styled';
import { CopyRight } from '@/styles/CopyRight.styled';
import { Flex } from '@/styles/Flex.styled'; 
import { Message } from '@/styles/message.style';
import { useRouter } from 'next/router';
import React, {useState} from 'react'; 
import styled from 'styled-components'
const Item=  styled.div`
  width:${({width}:{width:string})=>width ||"100%"}; 
  `
 
function CreatePassword() {
  const [errorMessage, setErrorMessage]= React.useState({type:false, message:""}) 
  const [confirmMessage, setConfirmMessage]= React.useState("") 
  const router = useRouter()
  const query= router.query || {}
  const [passwordValue, setPassword]= useState("")
  const [confirmPassword, setConfirm]= useState()

   const handleClick = (e:any) => {
    e.preventDefault()
    confirmPassword === passwordValue?
    PasswordAction(query.id,  passwordValue ).then((result)=>{
       if (result?.code===0 && result?.error===false) {
         router.push({pathname:'/personal-information', query:{...query}});
       } else {
         setErrorMessage({type:false, message:result?.message});
      } 
   })
   : setConfirmMessage("Please add you password")
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
           <form onSubmit={handleClick}>
            <br/>
            <InputField type="password" onChange={(e:any)=>setPassword(e.target.value)}  isPasswordField={true} indicateIcon="/assets/icons/lock.svg"  placeholder="Password" passwordLabel='Enter Password'   />
            <br/>
            <InputField type="password" onChange={(e:any)=>{setConfirm(e.target.value); confirmPassword !==passwordValue && setConfirmMessage("Your password is not matching!"); }} isPasswordField={true} indicateIcon="/assets/icons/lock.svg" message={confirmPassword !==passwordValue ? confirmMessage : ""} placeholder="Confirm Password" passwordLabel='Repeat Password' />
            <Button type="submit" width='340px'> Save & Continue </Button>
            <Message type={errorMessage.type}> {errorMessage.message} </Message>
          </form>
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
