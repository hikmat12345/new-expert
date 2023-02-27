import styled from 'styled-components'

export const InputTag = styled.input<{placeholder:string, padding?:string}>`
    placeholder:${({placeholder}:{placeholder:string})=>placeholder || "Please insert"};
    padding:${({padding})=>padding || "6.9px 10px 6px 54.5px;"}; 
    border-radius: 8px;
    background-color: #f1f6fa;
    borderRadius:8px; 
    backgroundColor:#f1f6fa;
    outline:none;
    border: initial;
    width:320px;
    width: 340px;
    height: 50px;
    border: none;
    position:relative;
`