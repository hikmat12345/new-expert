import styled from 'styled-components'

export const Button = styled.button`
  border: none;
    cursor: pointer;
 
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  
  padding: 2.5px 79.4px 1.8px 133px;
  border-radius: 8px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
 
  background-color: ${({ bg }:{bg:string}) => bg || '#dc0000'};
  color: ${({ color }) => color || '#fff'};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`