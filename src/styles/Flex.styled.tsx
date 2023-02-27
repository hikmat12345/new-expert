import styled from 'styled-components'

export const Flex = styled.div<{width?:string}>`
  display: flex;
  align-items: center;
  width:${({width})=>width};
  margin:auto;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
export const Item=  styled.div`
  width:${({width}:{width?:string})=>width ||""}; 
  `