
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Slideshow = () => {
  return (
    <div>
      <Carousel >
        <CarouselContent className="w-full h-[700px]">
          <CarouselItem><img className="h-screen" src="slide1.jpg"></img></CarouselItem>
          <CarouselItem><img src="slide1.jpg"></img></CarouselItem>
          <CarouselItem><img src="slide1.jpg"></img></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slideshow;
