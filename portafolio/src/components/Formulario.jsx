import React from 'react'
import styled from 'styled-components'

export default function Formulario() {
   
   const StyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #FEB692 0%, #EA5455 100%);
    width: 100%;
    left: 0;
    position: absolute;
    margin-top: 100px;

    div{
        display: flex;
        flex-direction: column;
        margin: 20%;
        padding: 40px;
        background: #0F0E17;
        color: white;
    }

    div h2{
        text-align: left;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 56px;
    }

    div h4{
        text-align: justify;
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        color: #A7A9BE;
    }

    div input{
        margin-top: 10px;
        padding: 12px 10px 12px 16px;
    }

    div button{
        margin-top: 10px;
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
   
    return (
        <StyleDiv>
            <div>
                <h2>Contacto</h2>
                <h4>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</h4>
                <input type="text" placeholder="Nombre completo"/>
                <input type="email" placeholder="Correo electronico"/>
                <input type="text" placeholder="Mensaje" />
                <button><strong>Enviar Mensaje</strong></button>
            </div>
        </StyleDiv>
    )
}
