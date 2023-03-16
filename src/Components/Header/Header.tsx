<<<<<<< HEAD
import { Logo, StyledHeader } from '@/styles/Header.styled'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

=======
import { Logo, StyledHeader } from "@/styles/Header.styled";
import Link from "next/link";
import React from "react";
>>>>>>> 3c4337664ca5ddb322f1a629e3c21ce6cde5287d

export default function Header(props: any) {
  return (
    <StyledHeader>
      <Link href="/">
        <Logo src="/assets/images/expert_logo.png" />{" "}
      </Link>
    </StyledHeader>
  );
}
