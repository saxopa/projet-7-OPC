import './Caroussel.scss'
import chevronG from '../../assets/img/chevronG.png'
import chevronD from '../../assets/img/chevronD.png'
import { useState } from 'react'

export default function Slider({imageSlider}) {
    // imageSlider est un tableau d'images
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }



    return (
        //j'ai choisi le style inline css pour pouvoir utiliser la propriété background-image
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow  carousel_arrow_left' 
                        src={chevronG} 
                        alt="show next slider" 
                        onClick={prevSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_right ' 
                        src={chevronD} 
                        alt="show previous slider" 
                        onClick={nextSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}