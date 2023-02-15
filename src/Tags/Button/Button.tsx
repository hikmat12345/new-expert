import React from 'react'
import styled from "styled-components"

function Button({children, ...rest}:{children:any}) {
 
  const Button = styled.button`
  font-family:"poppins"
    `
  return (
    <Button>
      {children}
    </Button>
  )
}

export default Button

