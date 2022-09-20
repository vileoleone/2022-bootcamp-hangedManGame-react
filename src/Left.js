
export default function left() {
    
    const imageArray = [

        "./assets/forca0.png",
        "./assets/forca1.png",
        "./assets/forca2.png",
        "./assets/forca3.png",
        "./assets/forca4.png",
        "./assets/forca5.png",
        "./assets/forca6.png",

    ]

    return (
        <section className="left-figure">
            <figure >
                <img className= "figure" src={imageArray[0]} alt="forca" ></img>
            </figure>
        </section>
    )
}

