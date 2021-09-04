import React from 'react'
import styled from 'styled-components'

export default function Proyectos() {

    const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;

    div{
        margin: 50px;
    }
    div h4{
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 40px;
    }

    div h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
    }
    `
  


    return (


        <StyleDiv>
            <div>
                <h2><strong>Proyectos creados con logica y pasion.</strong></h2>
            </div>
            <div>
                <h4>Hasta ahora he creado proyectos divertidos y totalmente funcionales.</h4>
            </div>
        </StyleDiv>
    )
}
