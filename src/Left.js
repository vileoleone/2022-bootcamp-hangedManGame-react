import React from "react";

export default function Left(props) {
    return (
        <section className="left-figure">
            <figure >
                <img className="figure" src={props.currentImage} alt="forca" ></img>
            </figure>
        </section>
    )
}

