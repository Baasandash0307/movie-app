
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
          <CarouselItem>s</CarouselItem>
          <CarouselItem>s</CarouselItem>
          <CarouselItem>s</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slideshow;
