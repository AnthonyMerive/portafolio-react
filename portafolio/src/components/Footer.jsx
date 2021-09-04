import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    
    const StyleFooter = styled.footer`
    background-color: black;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    font-family: 'Lora', serif;
    color: white;
    
    `
    return (
        <StyleFooter>
             <img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1630707155/LOGO_3_sdnif3.png" alt="" />
        </StyleFooter>
    )
}
