import { LoginContainer } from '@/styles/Container.styled';
import { Flex } from '@/styles/Flex.styled';
import Image from 'next/image';
import * as React from 'react'; 

 
function Signin() {
    
  return (
    <LoginContainer>
      <Flex>
      <Image style={{width:"50%"}} src={"/./../public/assets/images/LoginBg.png"}
      layout="fill" 
      alt="Side image"/>
       <div style={{width:"50%"}}>
          Login
       </div>
      </Flex>
    </LoginContainer>
  )
}

export default Signin
