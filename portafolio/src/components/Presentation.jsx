import React from 'react'
import styled from 'styled-components'

export default function Presentation() {
    const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // padding: 40px 20px;
    background: #0F0E17;
    position: absolute;
    width: 100%;
    left: 0;

    div{
        margin-left: 50px;
    }

    div h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 80px;
        color: #FFFFFE;
    }

    div h4{
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 40px;
        color: #A7A9BE;
    }

    img{
        width: 75%;
        margin: 16px;
        border-radius: 50%;
        border: 2px solid white;
        }

`

    return (
        <>

            <StyleDiv>
                <div>
                    <h2>¡Hola a todos!
                        Soy Anthony Colmenares</h2>
                    <h4>desarrollador apasionado, en constante aprendizaje</h4>                
                </div>
                <div>
                <img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1630710893/122680934_10220760751882652_8292185121783231926_n_olk5ks.jpg" alt="" />
                </div>
                
            </StyleDiv>

        </>
    )
}
