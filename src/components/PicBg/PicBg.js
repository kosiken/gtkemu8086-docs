import React from 'react'
import ImagePaletteProvider from "react-image-palette";
import './PicBg.css';


function PicBg({ children, image, title, imgalt }) {
    return (
        <ImagePaletteProvider crossOrigin image={image}>

            {({ backgroundColor, color, alternativeColor }) => (
                <div className="theme" style={{
                   backgroundColor,
                 
                }}>
                    {title && (<h4 style={{ color}}>{title}</h4>)}
                    <img src={image} alt={imgalt}/>
                </div>
            )}

        </ImagePaletteProvider>
    )
}

export default PicBg
