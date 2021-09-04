import React from 'react';
import styled from 'styled-components';



export default function navbar() {

const StyleNav = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #0F0E17;
    padding: 20px 0;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    font-family: 'Lora', serif;
    color: white;

    button{
        margin-right: 20px;
        background: #FF8906;
        border: none;
        padding: 8px;
        font-size: 16px;
        line-height: 24px;
        color: white;
        font-family: 'Nunito', sans-serif;    
        cursor: pointer;
    }
    `

    const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 50px;


    a{
        margin-left: 20px;
        text-decoration: none;
        color: white;
    }

`

    return (<>
            <StyleNav>
                <StyleDiv>
                <img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1630707155/LOGO_3_sdnif3.png" alt="" />
                <a href="#">Hola</a>
                <a href="#">Proyectos</a>
                <a href="#">Testimonios</a>
                <a href="#">Contacto</a>
                </StyleDiv>
                <button><strong>Descargar Curriculum</strong></button>
            </StyleNav>

        </>)
}
