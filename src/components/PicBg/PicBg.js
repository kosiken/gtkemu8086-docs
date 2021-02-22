import React from 'react'
import ImagePaletteProvider from "react-image-palette";

function PicBg({ children, image, title, imgalt }) {
    return (
        <ImagePaletteProvider crossOrigin image={image}>

            {({ backgroundColor, color, alternativeColor }) => (
                <div style={{
                   background: `linear-gradient(${backgroundColor}, ${alternativeColor})`
                }}>
                    {title && (<h6 style={{ color}}></h6>)}
                    <img src={image} alt={imgalt}/>
                </div>
            )}

        </ImagePaletteProvider>
    )
}

export default PicBg
