import { Logo, StyledHeader } from '@/styles/Header.styled'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';


export default function Header(props: any) {
  return (
    <StyledHeader>
      <Link href="/">
        <Logo src="/assets/images/expert_logo.png" />{" "}
      </Link>
    </StyledHeader>
  );
}
