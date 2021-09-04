import React from 'react'
import styled from 'styled-components'

export default function Imagenes() {

    const StyleProyects = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;

    div{
        
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 80px;
        margin-left: 50px;
    }
    img{
        
        width: 600px;
        margin: 30px;
        width: 40%;
        border-radius: 10%;
        border: solid 1px #0F0E17;
    }
    `
    
    return (
        <StyleProyects>
            <div>
                <img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1630720849/gammingStore_ac54tj.png" alt="" srcset="" />
                <img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1630720848/pokedex_hjdzzv.png" alt="" srcset="" />
            </div>
            </StyleProyects>
    )
}
