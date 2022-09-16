import { useState } from 'react'; 
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './carousel.css'

const items = [
    {
        src: 'src/assets/Naruto.jpg',
        altText:'imagen DBZ'
    },
    {
        src: 'src/assets/harry-potter.jpg',
        altText:'imagen harry-potter'
    },
    {
        src:'src/assets/the-lord-of-the-rings.jpg',
        altText:'imagen the-lord-of-the-rings'
    }
]

export const CarouselComponent = () => {
  const [activeIndex,setActiveIndex] = useState(0); 
  const [animating,setAnimating] = useState(false); 

  const next = () =>{
    if(animating) return; 
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1; 
    setActiveIndex(nextIndex); 
  }

  const previous = () =>{
    if(animating) return; 
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1; 
    setActiveIndex(nextIndex); 
  }
  
  const goToIndex = (newIndex) => {
    if(animating) return; 
    setActiveIndex(newIndex); 
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return(
    <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
    >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />   
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

  )
}