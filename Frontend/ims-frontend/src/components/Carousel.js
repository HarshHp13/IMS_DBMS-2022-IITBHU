import React from 'react';
import './Carousel.css'

function Carousel(){
    return (
        <div className='carousel'>
            <button className="slide-arrow" id="slide-arrow-prev" onClick={()=>{
                const slidesContainer = document.getElementById("slides-container");
                const slide = document.querySelector(".slide");
                const slideWidth = slide.clientWidth;
                if(slidesContainer.scrollLeft < slideWidth/2)
                    slidesContainer.scrollLeft = slideWidth*3;
                else
                    slidesContainer.scrollLeft -= slideWidth;
            }}>
                &#8249;
            </button>
            <button className="slide-arrow" id="slide-arrow-next" onClick={()=>{
                const slidesContainer = document.getElementById("slides-container");
                const slide = document.querySelector(".slide");
                const slideWidth = slide.clientWidth;
                console.log(3*slideWidth, slidesContainer.scrollLeft);
                if(slidesContainer.scrollLeft > slideWidth*2.5)
                    slidesContainer.scrollLeft = 0;
                else
                    slidesContainer.scrollLeft += slideWidth;
                console.log(slidesContainer.scrollLeft);
            }}>
                &#8250;
            </button>
            <div className="slides-container" id="slides-container">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
            </div>
        </div>
    );
}





// prevButton.addEventListener("click", () => {
    
// });

export default Carousel;
