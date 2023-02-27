import { Logo, StyledHeader } from '@/styles/Header.styled'
import React from 'react'

export default function Header(props:any) {
  return (
    <StyledHeader>
     <Logo src='/assets/images/expert_logo.png'/> 
    </StyledHeader>
  )
}
