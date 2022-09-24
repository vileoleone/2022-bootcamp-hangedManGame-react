
import Board from "./board";
import Right from "./Right"
import Left from "./Left"
import React from "react";
import Userboard from "./Userboard"


import image0 from "./assets/forca0.png";
import image1 from "./assets/forca1.png";
import image2 from "./assets/forca2.png";
import image3 from "./assets/forca3.png";
import image4 from "./assets/forca4.png";
import image5 from "./assets/forca5.png";
import image6 from "./assets/forca6.png";

export default function App() {
    const imageArray = [

        image0,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6

    ]
    
    const [numberofErrors, setError] = React.useState(0);
    const [currentImage, imageSet] = React.useState(imageArray[0]);


    function changeImage(error) {
        setError(numberofErrors + 1);
        imageSet(imageArray[numberofErrors]);
    }
    

    return (
        <div className="body">
            <main className="main">
                <Left  currentImage = {currentImage}/>
                <Right />
            </main>
            <div className="user-board">
            <Board />
            <Userboard/>
            </div>
           
        </div>
    );
}