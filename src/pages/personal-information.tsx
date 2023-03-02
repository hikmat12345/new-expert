import Img from '@/Components/Image/Image';
 import { LoginContainer } from '@/styles/Container.styled';
import { Flex, Item } from '@/styles/Flex.styled';
 import * as React from 'react'; 
import styled from 'styled-components'
import { Button } from '@/styles/Button.style';
import InputField from '@/Components/InputField';
import { useRouter } from 'next/router';
import ImageUploadCard from '@/Components/UploadAvatar/UploadAvatar';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Checkbox } from '@mui/material';
import Link from 'next/link';
import { PersonalVerifcationAction } from '@/helper';
import { Message } from '@/styles/message.style';
 
function PersonalInformation() {
  const [errorMessage, setErrorMessage]= React.useState({type:false, message:""}) 

  const router = useRouter()
 const {id, }=router.query ||{}
 const firstName="";
 const  lastName="";
 const genderId = 1;
 const imagePath= "";
 const modifiedBy=0;
 console.log(id, 'id')
  const handleClick = (e:any) => {
    e.preventDefault()
    PersonalVerifcationAction({userId:Number(id), firstName, lastName, genderId, imagePath, modifiedBy }).then((result)=>{
      if (result?.code===0 && result?.error===false) {
        router.push({pathname:'/add-email', query:{id}});
      } else {
        setErrorMessage({type:false, message:result?.message});
      } 
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
        <div style={{ 
        }}>

          <ImageUploadCard /> 
          <br/>
          <InputField indicateIcon="/assets/icons/person.svg" placeholder="Enter first name" passwordLabel='First Name' />
          <br/>
          <InputField indicateIcon="/assets/icons/person.svg" placeholder="Enter last name" passwordLabel='Last Name' />
          
          <FormControl style={{width: "340px",margin:"auto", display:"block", paddingTop:"10px"}}>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" /> 
            </RadioGroup>
          </FormControl> 
            <Flex style={{
                backgroundColor:"#fff",
                width: "340px", 
              }}>
                <Item> 
                <FormControlLabel control={<Checkbox defaultChecked onChange={()=>{}} color="default" />}
                  label={<p style={{
                    textAlign: "left",
                    color: "#6c6c6c"}}>
                      I agree to the Expert <Link href="/term-and-condition" style={{fontWeight:"bold", color:"#6c6c6c", textDecoration:"none"}}>Terms of Services</Link> and  <Link style={{fontWeight:"bold",  color:"#6c6c6c", textDecoration:"none"}} href="/term-and-condition">Privacy Policy</Link>
                    </p> }
                    /> 
                  </Item>
            </Flex>
          <Button onClick ={handleClick} width='340px'> Confirm </Button> 
          <Message type={errorMessage.type}> {errorMessage.message} </Message>
        </div>
           
          {/* <InputField /> */}
       </Item>
      </Flex>
    </LoginContainer>
  )
}

export default PersonalInformation
