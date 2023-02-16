import React from 'react'
import styled from "styled-components"

function Button({children, ...rest}:{children:any}) {
 
  const Button = styled.button`
  font-family:"poppins";
  background-color: lightblue;
  border: 1px solid black;
  @media (max-width: 768px) {
    background-color: red;
  }
    `
  return (
    <Button>
      {children}
    </Button>
  )
}

export default Button

